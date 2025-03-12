import { deployments, getNamedAccounts } from "hardhat";
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("House", {
    from: deployer,
    log: hre.network.name !== "hardhat"
  });
};

export default func;

func.tags = ["House"];