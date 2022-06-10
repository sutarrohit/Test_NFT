require("dotenv").config();

const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY  =  process.env.PRIVATE_KEY;
const ALCHAMY_API_URL = process.env.ALCHAMY_API_URL;

const {createAlchemyWeb3} = require("@alch/alchemy-web3")

//Create client using createAlchemyWeb3 function passing Alchemy app url
const web3 = createAlchemyWeb3(ALCHAMY_API_URL);

//Get abi file 
const contract = require("../artifacts/contracts/myNFT.sol/myNFT.json");
//console.log(JSON.stringify(Contract.abi));

const contractAddress = "0xe20e8B543cD72825db13ae8aCE00316058243210";

//Create contract instance using abi and contract address
const nftContract = new web3.eth.Contract(contract.abi , contractAddress)

//Create transation

async function mintNFT(tokenURI){
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY,"latest");

    const tx = {

        from:PUBLIC_KEY,
        to: contractAddress,
        nonce: nonce,
        gas:500000,
        data: nftContract.methods.mintNFT(PUBLIC_KEY,tokenURI).encodeABI(),
    };

     //Transaction sign using transation data and private ky
    const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
    signPromise
      .then((signedTx) => {
        web3.eth.sendSignedTransaction(
          signedTx.rawTransaction,
          function (err, hash) {
            if (!err) {
              console.log(
                "The hash of your transaction is: ",
                hash,
                "\nCheck Alchemy's Mempool to view the status of your transaction!"
              );
            } else {
              console.log(
                "Something went wrong when submitting your transaction:",
                err
              );
            }
          }
        );
      })
      .catch((err) => {
        console.log(" Promise failed:", err);
      });
  }

  mintNFT("https://gateway.pinata.cloud/ipfs/QmYt26LiNHvP7kQgggtJk15SbahJyA2VUzKAbFUomESKhs");