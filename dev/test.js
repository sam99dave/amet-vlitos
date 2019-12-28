const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

const previousBlockHash = "Ab58hasfd9";
const currentBlockData = [
  {
    amount: 101,
    sender: "Neuadfadfan125123",
    receiver: "BSAD8869GAS"
  }
];

console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));
