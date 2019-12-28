const sha256 = require("sha256");

function Blockchain() {
  this.chain = []; // blocks for mining
  this.pendingTransactions = []; // Transactions before mining
  this.createNewBlock(101, "0", "0"); // Genesis Block
}

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.pendingTransactions,
    nonce: nonce, // comes from proof of work
    hash: hash,
    previousBlockHash: previousBlockHash
  };

  this.pendingTransactions = []; // clearing transactions for the next block
  this.chain.push(newBlock);

  return newBlock;
};

Blockchain.prototype.getLastBlock = function() {
  return this.chain[this.chain.length - 1];
};

Blockchain.prototype.createNewTransaction = function(amount, sender, receiver) {
  const newTransaction = {
    amount: amount,
    sender: sender,
    receiver: receiver
  };

  this.pendingTransactions.push(newTransaction);

  return this.getLastBlock()["index"] + 1;
};

Blockchain.prototype.hashBlock = function(
  previousBlockHash,
  currentBlockData,
  nonce
) {
  const oneSingleString =
    previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);

  const hash = sha256(oneSingleString);

  return hash;
};

Blockchain.prototype.proofOfWork = function(
  previousBlockHash,
  currentBlockData
) {
  let nonce = 0;
  let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
  while (hash.substring(0, 4) !== "000") {
    nonce = nonce + 1;
    hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    console.log(hash);
  }

  return nonce;
};

module.exports = Blockchain;
