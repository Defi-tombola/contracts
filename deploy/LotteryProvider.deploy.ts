import { AutomateSDK } from "@gelatonetwork/automate-sdk";
import { deployments, getNamedAccounts } from "hardhat";
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const deployerSigner = await hre.ethers.getSigner(deployer);
  const chainId = (await hre.ethers.provider.getNetwork()).chainId;
  const automateSdk = new AutomateSDK(chainId, deployerSigner);

  const dms = await automateSdk.getDedicatedMsgSender();
  const dedicatedMsgSender = dms.address;

  await deploy("LotteryProvider", {
    from: deployer,
    log: hre.network.name !== "hardhat",
    args: [dedicatedMsgSender],
  });
};

export default func;

func.tags = ["LotteryProvider"];
