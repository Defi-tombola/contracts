import { Signer, ContractFactory, BytesLike, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { LotteryProviderProxy, LotteryProviderProxyInterface } from "../../../contracts/Proxy.sol/LotteryProviderProxy";
type LotteryProviderProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LotteryProviderProxy__factory extends ContractFactory {
    constructor(...args: LotteryProviderProxyConstructorParams);
    deploy(_logic: PromiseOrValue<string>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LotteryProviderProxy>;
    getDeployTransaction(_logic: PromiseOrValue<string>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LotteryProviderProxy;
    connect(signer: Signer): LotteryProviderProxy__factory;
    static readonly bytecode = "0x608060405234801561000f575f80fd5b506040516104d43803806104d483398101604081905261002e916102e2565b818161003b82825f610044565b505050506103f7565b61004d8361006f565b5f825111806100595750805b1561006a5761006883836100ae565b505b505050565b610078816100da565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b905f90a250565b60606100d383836040518060600160405280602781526020016104ad6027913961018d565b9392505050565b6001600160a01b0381163b61014c5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b60605f80856001600160a01b0316856040516101a991906103aa565b5f60405180830381855af49150503d805f81146101e1576040519150601f19603f3d011682016040523d82523d5f602084013e6101e6565b606091505b5090925090506101f886838387610202565b9695505050505050565b606083156102705782515f03610269576001600160a01b0385163b6102695760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610143565b508161027a565b61027a8383610282565b949350505050565b8151156102925781518083602001fd5b8060405162461bcd60e51b815260040161014391906103c5565b634e487b7160e01b5f52604160045260245ffd5b5f5b838110156102da5781810151838201526020016102c2565b50505f910152565b5f80604083850312156102f3575f80fd5b82516001600160a01b0381168114610309575f80fd5b60208401519092506001600160401b0380821115610325575f80fd5b818501915085601f830112610338575f80fd5b81518181111561034a5761034a6102ac565b604051601f8201601f19908116603f01168101908382118183101715610372576103726102ac565b8160405282815288602084870101111561038a575f80fd5b61039b8360208301602088016102c0565b80955050505050509250929050565b5f82516103bb8184602087016102c0565b9190910192915050565b602081525f82518060208401526103e38160408501602087016102c0565b601f01601f19169190910160400192915050565b60aa806104035f395ff3fe608060405236601057600e6013565b005b600e5b601f601b6021565b6057565b565b5f60527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b365f80375f80365f845af43d5f803e8080156070573d5ff35b3d5ffdfea2646970667358221220e3e114dbfc0b533075d16f44a8cd2061441baaac8b358305577ba240aafcf21e64736f6c63430008160033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_logic";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "previousAdmin";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newAdmin";
            readonly type: "address";
        }];
        readonly name: "AdminChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "beacon";
            readonly type: "address";
        }];
        readonly name: "BeaconUpgraded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "implementation";
            readonly type: "address";
        }];
        readonly name: "Upgraded";
        readonly type: "event";
    }, {
        readonly stateMutability: "payable";
        readonly type: "fallback";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): LotteryProviderProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LotteryProviderProxy;
}
export {};
