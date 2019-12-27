function Blockchain() {
  this.chain = []; // blocks for mining
  this.pendingTransactions = []; // Transactions before mining
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

module.exports = Blockchain;
