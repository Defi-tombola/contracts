import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { House, HouseInterface } from "../../contracts/House";
type HouseConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class House__factory extends ContractFactory {
    constructor(...args: HouseConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<House>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): House;
    connect(signer: Signer): House__factory;
    static readonly bytecode = "0x60a060405230608052348015610013575f80fd5b506080516114296100485f395f8181610227015281816102700152818161030d0152818161034d01526103de01526114295ff3fe6080604052600436106100a5575f3560e01c80638980f11f116100625780638980f11f1461016e5780638da5cb5b1461018d578063c4d66de8146101a1578063e224680d146101c0578063f2fde38b146101df578063fe6566a2146101fe575f80fd5b80633659cfe6146100a95780634f1ef286146100ca57806352d1902d146100dd5780635fd9aadd14610104578063651b8cb61461013b578063715018a61461015a575b5f80fd5b3480156100b4575f80fd5b506100c86100c33660046110e2565b61021d565b005b6100c86100d836600461110f565b610303565b3480156100e8575f80fd5b506100f16103d2565b6040519081526020015b60405180910390f35b34801561010f575f80fd5b50600154610123906001600160a01b031681565b6040516001600160a01b0390911681526020016100fb565b348015610146575f80fd5b506100c86101553660046111cb565b610483565b348015610165575f80fd5b506100c8610670565b348015610179575f80fd5b506100c8610188366004611204565b610683565b348015610198575f80fd5b506101236107ed565b3480156101ac575f80fd5b506100c86101bb3660046110e2565b61081b565b3480156101cb575f80fd5b506100c86101da3660046110e2565b610944565b3480156101ea575f80fd5b506100c86101f93660046110e2565b6109eb565b348015610209575f80fd5b506100c86102183660046111cb565b610a25565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016300361026e5760405162461bcd60e51b81526004016102659061122c565b60405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166102b65f805160206113ad833981519152546001600160a01b031690565b6001600160a01b0316146102dc5760405162461bcd60e51b815260040161026590611278565b6102e581610bfe565b604080515f8082526020820190925261030091839190610c06565b50565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016300361034b5760405162461bcd60e51b81526004016102659061122c565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166103935f805160206113ad833981519152546001600160a01b031690565b6001600160a01b0316146103b95760405162461bcd60e51b815260040161026590611278565b6103c282610bfe565b6103ce82826001610c06565b5050565b5f306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146104715760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401610265565b505f805160206113ad83398151915290565b6001546001600160a01b031633146104ad5760405162461bcd60e51b8152600401610265906112c4565b6040516370a0823160e01b815230600482015281906001600160a01b038516906370a0823190602401602060405180830381865afa1580156104f1573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105159190611307565b10156105635760405162461bcd60e51b815260206004820152601d60248201527f496e73756666696369656e7420636f6e74726163742062616c616e63650000006044820152606401610265565b60405163a9059cbb60e01b81526001600160a01b0383811660048301526024820183905284169063a9059cbb906044016020604051808303815f875af11580156105af573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105d3919061131e565b6106175760405162461bcd60e51b8152602060048201526015602482015274141c9a5e99481d1c985b9cd9995c8819985a5b1959605a1b6044820152606401610265565b826001600160a01b03166106296107ed565b6001600160a01b03167faaa40a232aaf133fdd28f3485f6fdd163514cfadbffa981f3610f42398efe34b8360405161066391815260200190565b60405180910390a3505050565b610678610d75565b6106815f610da7565b565b61068b610d75565b6001600160a01b0382166106d95760405162461bcd60e51b8152602060048201526015602482015274496e76616c696420746f6b656e206164647265737360581b6044820152606401610265565b5f81116107285760405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206d7573742062652067726561746572207468616e20300000006044820152606401610265565b816001600160a01b031663a9059cbb61073f6107ed565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018490526044016020604051808303815f875af1158015610789573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107ad919061131e565b6103ce5760405162461bcd60e51b815260206004820152601160248201527015da5d1a191c985dd85b0819985a5b1959607a1b6044820152606401610265565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a008054600160401b810460ff16159067ffffffffffffffff165f811580156108605750825b90505f8267ffffffffffffffff16600114801561087c5750303b155b90508115801561088a575080155b156108a85760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff1916600117855583156108d257845460ff60401b1916600160401b1785555b6108db33610e17565b600180546001600160a01b0319166001600160a01b038816179055831561093c57845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050565b61094c610d75565b6001600160a01b0381166109a25760405162461bcd60e51b815260206004820181905260248201527f496e76616c6964206c6f74746572792070726f766964657220616464726573736044820152606401610265565b600180546001600160a01b0319166001600160a01b0383169081179091556040517fd39f3e8b7b5cbafa318b7cddac7cf98ff18a5312fa6e63c56f57619529cbf124905f90a250565b6109f3610d75565b6001600160a01b038116610a1c57604051631e4fbdf760e01b81525f6004820152602401610265565b61030081610da7565b6001546001600160a01b03163314610a4f5760405162461bcd60e51b8152600401610265906112c4565b6040516370a0823160e01b815230600482015281906001600160a01b038516906370a0823190602401602060405180830381865afa158015610a93573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ab79190611307565b1015610b055760405162461bcd60e51b815260206004820152601d60248201527f496e73756666696369656e7420636f6e74726163742062616c616e63650000006044820152606401610265565b60405163a9059cbb60e01b81526001600160a01b0383811660048301526024820183905284169063a9059cbb906044016020604051808303815f875af1158015610b51573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b75919061131e565b610bb95760405162461bcd60e51b8152602060048201526015602482015274141c9a5e99481d1c985b9cd9995c8819985a5b1959605a1b6044820152606401610265565b826001600160a01b0316826001600160a01b03167f16a5e7281d716bc27df8753e7c9972c4b8cff2cdecac91d48c7bd7d1ed8ca2198360405161066391815260200190565b610300610d75565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615610c3e57610c3983610e28565b505050565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610c98575060408051601f3d908101601f19168201909252610c9591810190611307565b60015b610cfb5760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b6064820152608401610265565b5f805160206113ad8339815191528114610d695760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b6064820152608401610265565b50610c39838383610ec3565b33610d7e6107ed565b6001600160a01b0316146106815760405163118cdaa760e01b8152336004820152602401610265565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a3505050565b610e1f610eed565b61030081610f36565b6001600160a01b0381163b610e955760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401610265565b5f805160206113ad83398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b610ecc83610f3e565b5f82511180610ed85750805b15610c3957610ee78383610f7d565b50505050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0054600160401b900460ff1661068157604051631afcd79f60e31b815260040160405180910390fd5b6109f3610eed565b610f4781610e28565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b905f90a250565b6060610fa283836040518060600160405280602781526020016113cd60279139610fa9565b9392505050565b60605f80856001600160a01b031685604051610fc5919061135f565b5f60405180830381855af49150503d805f8114610ffd576040519150601f19603f3d011682016040523d82523d5f602084013e611002565b606091505b50915091506110138683838761101d565b9695505050505050565b6060831561108b5782515f03611084576001600160a01b0385163b6110845760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610265565b5081611095565b611095838361109d565b949350505050565b8151156110ad5781518083602001fd5b8060405162461bcd60e51b8152600401610265919061137a565b80356001600160a01b03811681146110dd575f80fd5b919050565b5f602082840312156110f2575f80fd5b610fa2826110c7565b634e487b7160e01b5f52604160045260245ffd5b5f8060408385031215611120575f80fd5b611129836110c7565b9150602083013567ffffffffffffffff80821115611145575f80fd5b818501915085601f830112611158575f80fd5b81358181111561116a5761116a6110fb565b604051601f8201601f19908116603f01168101908382118183101715611192576111926110fb565b816040528281528860208487010111156111aa575f80fd5b826020860160208301375f6020848301015280955050505050509250929050565b5f805f606084860312156111dd575f80fd5b6111e6846110c7565b92506111f4602085016110c7565b9150604084013590509250925092565b5f8060408385031215611215575f80fd5b61121e836110c7565b946020939093013593505050565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b60208082526023908201527f4f6e6c79204c6f747465727950726f76696465722063616e206469737472696260408201526275746560e81b606082015260800190565b5f60208284031215611317575f80fd5b5051919050565b5f6020828403121561132e575f80fd5b81518015158114610fa2575f80fd5b5f5b8381101561135757818101518382015260200161133f565b50505f910152565b5f825161137081846020870161133d565b9190910192915050565b602081525f825180602084015261139881604085016020870161133d565b601f01601f1916919091016040019291505056fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122096a26ee8a781aa92cc3064bd9c6be9cbeec9c1d63179d222a086f20b86206a1764736f6c63430008160033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "InvalidInitialization";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotInitializing";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "OwnableInvalidOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "OwnableUnauthorizedAccount";
        readonly type: "error";
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
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Deposited";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "FeeDistributed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "version";
            readonly type: "uint64";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "lottery_provider";
            readonly type: "address";
        }];
        readonly name: "LotteryProviderUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "winner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "PrizeDistributed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "token_address";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "token";
            readonly type: "uint256";
        }];
        readonly name: "Recover";
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
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Withdrawn";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "lottery_owner";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "collectFee";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "winner";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "distributePrize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_lotteryProvider";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "lotteryProvider";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "proxiableUUID";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "recoverERC20";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_lotteryProvider";
            readonly type: "address";
        }];
        readonly name: "setLotteryProvider";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }];
        readonly name: "upgradeTo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): HouseInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): House;
}
export {};
