const hre = require('hardhat');

async function main() {
  const Fair = await hre.ethers.getContractFactory('Fair');
  const fair = await Fair.deploy('Fairs Example');
  await fair.deployed();
  console.log('Fair deployed to:', fair.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
