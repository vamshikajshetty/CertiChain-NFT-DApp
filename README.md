# CertiChain - NFT Based Certificate Verification DApp

CertiChain is a blockchain-based NFT certificate issuance and verification system built using Solidity, Hardhat, and React.

## Features

- Issue certificates as NFTs (ERC721)
- Verify certificate validity
- Revoke certificates
- Ownership transfer supported
- Built on Ethereum Local Network (Hardhat)

## Tech Stack

- Solidity
- Hardhat
- Ethers.js
- React.js
- MetaMask

## Project Structure

- contracts/ → Smart Contracts  
- scripts/ → Deployment scripts  
- src/ → Frontend files  
- hardhat.config.js → Hardhat configuration  

## How To Run

1. Install dependencies  
   npm install  

2. Start Hardhat local node  
   npx hardhat node  

3. Deploy contract  
   npx hardhat run scripts/deploy.js --network localhost  

4. Start frontend  
   npm start  

## Author

Vamshika J Shetty  
B.Tech CSE (Blockchain)
