require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: process.env.MUMBAI_RPC_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
