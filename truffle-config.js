const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = 'practice bargain mobile drink junk never cigar winner morning trophy vague response';


module.exports = {

  networks: {
    bsc: {
      provider: () => new HDWalletProvider(
        mnemonic, 
        'https://bsc-dataseed.binance.org/'
      ),
      network_id: 56,
      skipDryRun: true
    },
    bscTestnet: {
      provider: () => new HDWalletProvider(
        mnemonic, 
        'https://data-seed-prebsc-1-s1.binance.org:8545'
      ),
      network_id: 97,
      skipDryRun: true
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.4",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
};
