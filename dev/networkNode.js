const express = require("express");
const bodyParser = require("body-parser");
const Blockchain = require("./blockchain");
const uuid = require("uuid/v1");
const port = process.argv[2];
const rp = require("request-promise"); // install request first as it is a dependency
const app = express();

const nodeAddress = uuid()
  .split("-")
  .join("");

const bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/blockchain", (req, res) => {
  res.send(bitcoin);
});

app.post("/transaction", (req, res) => {
  const blockIndex = bitcoin.createNewTransaction(
    req.body.amount,
    req.body.sender,
    req.body.receiver
  );

  res.json({ note: `Transaction will be added in block ${blockIndex}.` });
});

app.get("/mine", (req, res) => {
  const lastBlock = bitcoin.getLastBlock();
  const previousBlockHash = lastBlock["hash"];
  const currentBlockData = {
    transactions: bitcoin.pendingTransactions,
    index: lastBlock["index"] + 1
  };

  const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
  const blockHash = bitcoin.hashBlock(
    previousBlockHash,
    currentBlockData,
    nonce
  );

  bitcoin.createNewTransaction(12.5, "00", nodeAddress); // "00" indicates reward for mining

  const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);

  res.json({ note: "New block mined successfully", block: newBlock });
});

// register a node and broadcast it the network
app.post("/register-and-broadcast-node", (req, res) => {
  const newNodeUrl = req.body.newNodeUrl;
  if (bitcoin.networkNodes.indexOf(newNodeUrl == -1))
    bitcoin.networkNodes.push(newNodeUrl);

  const regNodePromises = [];
  bitcoin.networkNodes.forEach(networkNodeUrl => {
    const requestOptions = {
      uri: networkNodeUrl + "/register-node",
      method: "POST",
      body: { newNodeUrl: newNodeUrl },
      json: true
    };

    regNodesPromises.push(rp(requestOptions));
  });

  Promise.all(regNodePromises)
    .then(data => {
      const bulkRegisterOptions = {
        uri: newNodeUrl + "/register-nodes-bulk",
        method: "POST",
        body: {
          allNetworkNodes: [...bitcoin.networkNodes, bitcoin.currentNodeUrl]
        }, // ... is a spread out operator
        json: true
      };

      return rp(bulkRegisterOptions);
    })
    .then(data => {
      res.json({ note: "New node registered with network successfully" });
    });
});

// register a node with the network
app.post("/register-node", (req, res) => {});

// register multiple nodes at once
app.post("/register-nodes-bulk", (req, res) => {});

app.listen(port, (req, res) => {
  console.log(`Listening on Port ${port}...`);
});
