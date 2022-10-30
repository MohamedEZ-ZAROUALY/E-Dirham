const hre = require("hardhat");

async function main() {
  const EDirhamToken = await hre.ethers.getContractFactory("EDirhamToken");
  const edirhamtoken = await EDirhamToken.deploy(100000000, 50);

  await edirhamtoken.deployed();

  console.log("E-Dirham Token deployed: ", edirhamtoken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});