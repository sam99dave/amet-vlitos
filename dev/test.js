const Blockchain = require("./blockchain");
const bitcoin = new Blockchain();

const bc1 = {
  chain: [
    {
      index: 1,
      timestamp: 1578423455990,
      transactions: [],
      nonce: 100,
      hash: "0",
      previousBlockHash: "0"
    },
    {
      index: 2,
      timestamp: 1578423486939,
      transactions: [],
      nonce: 18140,
      hash: "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
      previousBlockHash: "0"
    },
    {
      index: 3,
      timestamp: 1578423564497,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          receiver: "917fc960317f11eab293356b9fadc69f",
          transactionId: "a4110d50317f11eab293356b9fadc69f"
        },
        {
          amount: "10",
          sender: "okpka",
          receiver: "Bslsl",
          transactionId: "c5933cf0317f11eab293356b9fadc69f"
        },
        {
          amount: "20",
          sender: "okpka",
          receiver: "Bslsl",
          transactionId: "caccd2d0317f11eab293356b9fadc69f"
        },
        {
          amount: "30",
          sender: "okpka",
          receiver: "Bslsl",
          transactionId: "ce4298a0317f11eab293356b9fadc69f"
        }
      ],
      nonce: 4219,
      hash: "00001922600ea8dc45153c4f92ffbc214007050840826770e352a61eb035dcfe",
      previousBlockHash:
        "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
    },
    {
      index: 4,
      timestamp: 1578423626911,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          receiver: "917fc960317f11eab293356b9fadc69f",
          transactionId: "d22d6760317f11eab293356b9fadc69f"
        },
        {
          amount: "40",
          sender: "okpka",
          receiver: "Bslsl",
          transactionId: "e58c82a0317f11eab293356b9fadc69f"
        },
        {
          amount: "50",
          sender: "okpka",
          receiver: "Bslsl",
          transactionId: "f09f70d0317f11eab293356b9fadc69f"
        },
        {
          amount: "60",
          sender: "okpka",
          receiver: "Bslsl",
          transactionId: "f4fe5e20317f11eab293356b9fadc69f"
        }
      ],
      nonce: 14684,
      hash: "0000f3f7a3e9862aaba14e6bfdc1d63095a3d60f322ea444f7062396c0cee639",
      previousBlockHash:
        "00001922600ea8dc45153c4f92ffbc214007050840826770e352a61eb035dcfe"
    },
    {
      index: 5,
      timestamp: 1578423641935,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          receiver: "917fc960317f11eab293356b9fadc69f",
          transactionId: "f7609110317f11eab293356b9fadc69f"
        }
      ],
      nonce: 20973,
      hash: "00008c4e08b88d2e51c70ebb987d7277412274578cc46c2cd426c828be22fa14",
      previousBlockHash:
        "0000f3f7a3e9862aaba14e6bfdc1d63095a3d60f322ea444f7062396c0cee639"
    },
    {
      index: 6,
      timestamp: 1578423648901,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          receiver: "917fc960317f11eab293356b9fadc69f",
          transactionId: "00550c10318011eab293356b9fadc69f"
        }
      ],
      nonce: 171752,
      hash: "00003c1128d7ef9abce1bb5a851ad95ad88fa9f01aec946f326f4b78217ecc9e",
      previousBlockHash:
        "00008c4e08b88d2e51c70ebb987d7277412274578cc46c2cd426c828be22fa14"
    }
  ],
  pendingTransactions: [
    {
      amount: 12.5,
      sender: "00",
      receiver: "917fc960317f11eab293356b9fadc69f",
      transactionId: "047c2080318011eab293356b9fadc69f"
    }
  ],
  currentNodeUrl: "http://localhost:3001",
  networkNodes: []
};

console.log("VALID: ", bitcoin.chainIsValid(bc1.chain));
