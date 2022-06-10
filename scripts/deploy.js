const {ethers} = require("hardhat");

async function main(){

    const FactoryNFT = await ethers.getContractFactory("myNFT");
    const deployNFT = await FactoryNFT.deploy();
    console.log(`Contract deployed to address ${deployNFT.address}`);

}

main()
.then(() => process.exit(0))
.catch((error) =>{
    console.log(error)
    process.exit(1)
});