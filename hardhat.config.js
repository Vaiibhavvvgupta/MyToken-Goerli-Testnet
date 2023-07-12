/** 
 * @type import('hardhat/config').HardhatUserConfig 
 * */
require("@nomiclabs/hardhat-waffle")
const { ethers } = require("ethers");

const Alchemy_Api_key = "Z0clnSCN9HA6KM169ZKYGaFtIr14qo97";
const Goeril_private_key ="9f452263acf9f111869d15e7ae30fc1b9fc8eeaf665af15f5dded6ca93384a7d";

module.exports = {
  solidity: "0.8.18",

networks:{
  Goerli:{
    url: 'https://eth-goerli.g.alchemy.com/v2/${Alchemy_Api_key}',
    accounts: [Goeril_private_key],
  },
},
};

