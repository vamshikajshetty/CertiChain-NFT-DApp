// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CertiChain is ERC721URIStorage, Ownable {

    uint256 public tokenCounter;

    struct Certificate {
        uint256 issueDate;
        uint256 expiryDate;
        bool revoked;
    }

    mapping(uint256 => Certificate) public certificates;

    constructor() ERC721("CertiChain", "CERTI") Ownable(msg.sender) {
    tokenCounter = 0;
    }


    function issueCertificate(
        address student,
        string memory tokenURI,
        uint256 validityInDays
    ) public onlyOwner {

        uint256 newTokenId = tokenCounter;

        _safeMint(student, newTokenId);
        _setTokenURI(newTokenId, tokenURI);

        certificates[newTokenId] = Certificate(
            block.timestamp,
            block.timestamp + (validityInDays * 1 days),
            false
        );

        tokenCounter++;
    }

    function revokeCertificate(uint256 tokenId) public onlyOwner {
        certificates[tokenId].revoked = true;
    }

    function verifyCertificate(uint256 tokenId) public view returns (string memory) {
        Certificate memory cert = certificates[tokenId];

        if(cert.revoked) return "REVOKED";
        if(block.timestamp > cert.expiryDate) return "EXPIRED";
        return "VALID";
    }
}
