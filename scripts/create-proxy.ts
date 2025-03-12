import { ethers } from "hardhat";
import { LotteryProvider } from "../typechain";

async function main() {
  // Deploy the logic contract (implementation)
  const LogicContract: LotteryProvider = await ethers.getContract(
    "LotteryProvider"
  ); // Replace with actual contract name
  const logic = await LogicContract.deploy();
  await logic.waitForDeployment();
  console.log("Logic contract deployed at:", await logic.getAddress());

  // Deploy the Proxy contract
  const Proxy = await ethers.getContract("Proxy");

  // Encode initialization call (if needed)
  const initData = logic.interface.encodeFunctionData("initialize", []); // Replace with actual init function

  const proxy = await Proxy.deploy(await logic.getAddress(), initData);
  await proxy.waitForDeployment();
  console.log("Proxy contract deployed at:", await proxy.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
