require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 * 
 */

const ALCHAMY_API_URL = process.env.ALCHAMY_API_URL;
const PRIVATE_KEY  =  process.env.PRIVATE_KEY;

module.exports = {
  networks:{

    rinkeby:{
      url: ALCHAMY_API_URL,
      accounts: [PRIVATE_KEY],
      chainId: 4,
    },

  },

  

  solidity: "0.8.4",
};
