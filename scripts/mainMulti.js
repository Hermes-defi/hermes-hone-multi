const hre = require("hardhat");
// npx hardhat run scripts\mainMulti.js --network one
async function main() {
    // const _validator = '0xee0e4Cdc193367dd9482Ed4152444e1d8971a6B7'; // hermes
    const _validator = '0x588e2cda52B02a85d9dc3d150778183E14A078e8'; // I Bless The Rains
  const _main = await hre.ethers.getContractFactory("MainMulti");
  const main = await _main.deploy(true, _validator);
  await main.deployed();
  console.log("main:", main.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
