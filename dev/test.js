const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

bitcoin.createNewBlock(123421, "sgfa4436#", "sdah4766");

bitcoin.createNewTransaction(2000, "Sam", "Simon");

bitcoin.createNewBlock(123421, "sgfa4436#", "sdah4766");

console.log(bitcoin);
