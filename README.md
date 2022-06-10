#Basic NFT contract 

This is a Simple NFT contract to test ERC 721 standard, myNFT.sol is the contract which deployed on Rinkeby testnet and mint-nft.js javascript file to interact with the contract to generate new NFTS.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Please checkout below usefull info.

1. To install Hardhat run below commands.
  - npm init
  - npm install --save-dev hardhat

=== yarn init
=== yarn add --dev hardhat


2. To run hardhat run below command.
  - npx hardhat
=== yarn hardhat

3. Run below command which makes Hardhat compatible with tests built with Waffle, it will install all necessary plugin like node modules,
   config file, git file,test file, etc.
   
 -  npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
=== yarn add --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers

4. Check accounts details.
  - npx accounts
=== yarn accounts

5. Compile contracts
  - npx hardhat compile
=== yarn hardhat compile

6. Run depoly program
 - npx hardhat run scripts/deploy.js
 == yarn hardhat run scripts/deploy.js

6. dotenv file 
 -- npm install dotenv --save


Folder in Hardhat
1. artifacts  - Containt all information about copmile code
2. Scirpts - We write deploy script.

Hardhat commands:
yarn hardhat node - Get all accounts and private keys
yarn hardahat run scripts/deploy.js --netwrok newtwork name
Always add dotenv pakage while use of .env file
yarn hardhat clean

To very your code use hardhat plugin and their tutorial
npx hardhat verify --network mainnet DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1"


Test code in important step of dapp developments
hardhat use mocha fot test
yarn hardhat test


To test have much gas cost function install 
npm install hardhat-gas-reporter --save-dev
yarn add hardhat-gas-reporter --dev

Solidity Coverage : It help to test contract and find bugs. (IMP)
yarn add --dev solidity coverage

-----------------------------------------------------------------------------------------------------------
NFT : 

Install OpenZipLine : It help to implement ERC20 & ERC721 standard
npm install @openzeppelin/contracts

1 Write contract using openZipline library
2  Install Alchemay Web3 package 
   npm install @alch/alchemy-web3

3. Use pinata IPFS to store NFT images

