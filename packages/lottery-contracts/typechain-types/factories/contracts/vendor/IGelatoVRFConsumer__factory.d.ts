import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IGelatoVRFConsumer, IGelatoVRFConsumerInterface } from "../../../contracts/vendor/IGelatoVRFConsumer";
export declare class IGelatoVRFConsumer__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "round";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "RequestedRandomness";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "randomness";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "fulfillRandomness";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IGelatoVRFConsumerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IGelatoVRFConsumer;
}
