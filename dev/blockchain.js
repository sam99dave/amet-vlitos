function Blockchain() {
  this.chain = []; // blocks for mining
  this.newTransactions = []; // Transactions before mining
}

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.newTransactions,
    nonce: nonce, // comes from proof of work
    hash: hash,
    previousBlockHash: previousBlockHash
  };

  this.newTransactions = []; // clearing transactions for the next block
  this.chain.push(newBlock);

  return newBlock;
};

module.exports = Blockchain;
