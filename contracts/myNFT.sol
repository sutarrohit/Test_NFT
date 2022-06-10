//SPDX-License-Identifier: Unlicense
pragma solidity >=0.5.0 <= 0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

// My contract inherite all properties of ERC721URIStorage, Ownable contract 
contract myNFT is ERC721URIStorage, Ownable{

    //Counter is library, we can accress all function inside this library using Counters.Counters data type 
    //When we create any veriable of Counters.Counters type we can access this library
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;

    //Under the constructor we set NFT name and symbol
    constructor() ERC721("First Token", "FT"){}


//Write function to mint NFT using ERC721.sol library's mint function
function mintNFT(address receipt,string memory tokenURI) public onlyOwner returns(uint){
   
     //increament function from counter library to increment token id
    _tokenIds.increment();

    //current function from counter library to get current token id 
    uint newTokenId = _tokenIds.current();

    //Calling mint function with owner contract address and token id as parameter
    _mint(receipt,newTokenId);

     //Calling _setTokenURI function with NewTokenId and tokenURI as parameter (Link img url to id)
    _setTokenURI(newTokenId,tokenURI);

    return newTokenId;
}

}


// Contract address : 0xe20e8B543cD72825db13ae8aCE00316058243210