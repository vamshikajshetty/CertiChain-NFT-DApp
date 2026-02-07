const hre = require("hardhat");

async function main() {

  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contract with account:", deployer.address);

  const CertiChain = await hre.ethers.getContractFactory("CertiChain");

  const certiChain = await CertiChain.deploy();

  await certiChain.deployed();   // ✅ ethers v5 uses this

  console.log("CertiChain deployed to:", certiChain.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
