import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { GelatoVRFConsumerBase, GelatoVRFConsumerBaseInterface } from "../../../contracts/vendor/GelatoVRFConsumerBase";
export declare class GelatoVRFConsumerBase__factory {
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
            readonly name: "dataWithRound";
            readonly type: "bytes";
        }];
        readonly name: "fulfillRandomness";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "requestPending";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "requestedHash";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): GelatoVRFConsumerBaseInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GelatoVRFConsumerBase;
}
