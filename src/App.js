import React, { useState } from "react";
import { getContract } from "./contract";

function App() {
  const [student, setStudent] = useState("");
  const [tokenURI, setTokenURI] = useState("");
  const [validity, setValidity] = useState("");
  const [verifyId, setVerifyId] = useState("");
  const [status, setStatus] = useState("");

  const issueCertificate = async () => {
    try {
      const contract = await getContract();
      const tx = await contract.issueCertificate(
        student,
        tokenURI,
        validity
      );
      await tx.wait();
      alert("Certificate Issued!");
    } catch (error) {
      console.error(error);
    }
  };

  const verifyCertificate = async () => {
    try {
      const contract = await getContract();
      const result = await contract.verifyCertificate(verifyId);
      setStatus(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>CertiChain - NFT Certificate Platform</h1>

      <h2>Issue Certificate</h2>
      <input placeholder="Student Address" onChange={(e) => setStudent(e.target.value)} />
      <br />
      <input placeholder="Token URI (IPFS link)" onChange={(e) => setTokenURI(e.target.value)} />
      <br />
      <input placeholder="Validity in Days" onChange={(e) => setValidity(e.target.value)} />
      <br />
      <button onClick={issueCertificate}>Issue</button>

      <hr />

      <h2>Verify Certificate</h2>
      <input placeholder="Token ID" onChange={(e) => setVerifyId(e.target.value)} />
      <br />
      <button onClick={verifyCertificate}>Verify</button>

      <h3>Status: {status}</h3>
    </div>
  );
}

export default App;
