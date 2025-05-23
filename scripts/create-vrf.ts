import { AutomateSDK, TriggerType } from "@gelatonetwork/automate-sdk";
import hre from "hardhat";
import { LotteryProvider } from "../typechain";

const { ethers } = hre;

const main = async () => {
  const [deployer] = await ethers.getSigners();
  const chainId = (await ethers.provider.getNetwork()).chainId;

  const automate = new AutomateSDK(chainId, deployer);

  const lotteryRandomnessProducer: LotteryProvider = await ethers.getContract("LotteryProvider");

  console.log(`Address ${lotteryRandomnessProducer.address} of lottery`);
  // Create task using automate sdk
  console.log("Creating automate task...");

  const { taskId, tx } = await automate.createBatchExecTask({
    name: "Lottery VRF",
    web3FunctionHash: "QmWm8Uq2UYRAVwFyzWop2Hghj56WhJk7K8hGGC2Jy7rzDo",
    web3FunctionArgs: { consumerAddress: lotteryRandomnessProducer.address },
    trigger: {
      type: TriggerType.EVENT,
      filter: {
        topics: [[lotteryRandomnessProducer.interface.getEventTopic("RequestedRandomness")]],
        address: lotteryRandomnessProducer.address,
      },
      blockConfirmations: chainId === 1 ? 1 : 0,
    },
  });

  await tx.wait();
  console.log(`Task created, taskId: ${taskId} (tx hash: ${tx.hash})`);
  console.log(
    `> https://vrf.app.gelato.network/task/${taskId}?chainId=${chainId}`
  );
};

main()
  .then(() => {
    process.exit();
  })
  .catch((err) => {
    console.error("Error:", err.message);
    process.exit(1);
  });
