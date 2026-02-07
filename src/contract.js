import { ethers } from "ethers";
import CertiChain from "./artifacts/contracts/CertiChain.sol/CertiChain.json";

export const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export const getContract = async () => {
  if (!window.ethereum) {
    alert("MetaMask not detected");
    return;
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  return new ethers.Contract(
    contractAddress,
    CertiChain.abi,
    signer
  );
};
