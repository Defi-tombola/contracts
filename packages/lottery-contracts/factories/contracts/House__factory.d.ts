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
    static readonly bytecode = "0x60a08060405234610031573060805261127c908161003682396080518181816107ca015281816108f10152610b820152f35b5f80fdfe604060808152600480361015610013575f80fd5b5f3560e01c80633659cfe614610b585780634f1ef2861461087657806352d1902d146107b75780635fd9aadd1461078f578063651b8cb61461063b578063715018a6146105d45780638980f11f1461045d5780638da5cb5b14610429578063c4d66de8146102da578063e224680d1461022c578063f2fde38b146102015763fe6566a21461009f575f80fd5b346101ec576100ad36610dc4565b9160018060a09593951b0380916100c982600154163314610ebb565b16938551926370a0823160e01b8452308185015260209384816024818a5afa9081156101f7578692869285925f916101b9575b5084610109911015610f13565b895163a9059cbb60e01b81526001600160a01b039092169082019081526020810193909352918290819060400103815f8a5af19081156101af577f16a5e7281d716bc27df8753e7c9972c4b8cff2cdecac91d48c7bd7d1ed8ca21995969791610179915f91610182575b50610f77565b519485521692a3005b6101a29150863d88116101a8575b61019a8183610d86565b810190610f5f565b5f610173565b503d610190565b87513d5f823e3d90fd5b94505091905082813d83116101f0575b6101d38183610d86565b810103126101ec578285916101098880955191506100fc565b5f80fd5b503d6101c9565b88513d5f823e3d90fd5b346101ec5760203660031901126101ec5761022a61021d610d40565b61022561102c565b610fbb565b005b50346101ec5760203660031901126101ec57610246610d40565b61024e61102c565b6001600160a01b031691821561029757600180546001600160a01b03191684179055827fd39f3e8b7b5cbafa318b7cddac7cf98ff18a5312fa6e63c56f57619529cbf1245f80a2005b906020606492519162461bcd60e51b8352820152602060248201527f496e76616c6964206c6f74746572792070726f766964657220616464726573736044820152fd5b50346101ec5760203660031901126101ec576102f4610d40565b907ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0091825460ff81861c16159267ffffffffffffffff821680159081610421575b6001149081610417575b15908161040e575b50610400575067ffffffffffffffff1981166001178455826103e1575b5061036d6110f3565b6103756110f3565b61037e33610fbb565b60018060a01b03166bffffffffffffffffffffffff60a01b60015416176001556103a457005b805468ff00000000000000001916905551600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d290602090a1005b68ffffffffffffffffff1916680100000000000000011783555f610364565b855163f92ee8a960e01b8152fd5b9050155f610347565b303b15915061033f565b859150610335565b82346101ec575f3660031901126101ec575f805160206112078339815191525490516001600160a01b039091168152602090f35b50346101ec57816003193601126101ec57610476610d40565b6024359061048261102c565b6001600160a01b03908116908115610599578215610556575f8051602061120783398151915254855163a9059cbb60e01b815291166001600160a01b0316848201908152602080820194909452909291839182905f90829060400103925af190811561054c575f9161052d575b50156104f757005b6020606492519162461bcd60e51b8352820152601160248201527015da5d1a191c985dd85b0819985a5b1959607a1b6044820152fd5b610546915060203d6020116101a85761019a8183610d86565b5f6104ef565b83513d5f823e3d90fd5b845162461bcd60e51b8152602081860152601d60248201527f416d6f756e74206d7573742062652067726561746572207468616e20300000006044820152606490fd5b845162461bcd60e51b81526020818601526015602482015274496e76616c696420746f6b656e206164647265737360581b6044820152606490fd5b346101ec575f3660031901126101ec576105ec61102c565b5f8051602061120783398151915280546001600160a01b031981169091555f906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b50346101ec5761064a36610dc4565b939160018060a09593951b03809161066782600154163314610ebb565b16938351926370a0823160e01b8452308185015260209384816024818a5afa90811561078557918894939186935f9161074f575b50856106a8911015610f13565b865163a9059cbb60e01b81526001600160a01b039092169082019081526020810198909852968790819060400103815f895af1958615610745577faaa40a232aaf133fdd28f3485f6fdd163514cfadbffa981f3610f42398efe34b949596610716915f9161072e5750610f77565b5f8051602061120783398151915254169351908152a3005b6101a29150853d87116101a85761019a8183610d86565b84513d5f823e3d90fd5b93809296508491503d831161077e575b6107698183610d86565b810103126101ec57905187938592918561069b565b503d61075f565b86513d5f823e3d90fd5b82346101ec575f3660031901126101ec5760015490516001600160a01b039091168152602090f35b50346101ec575f3660031901126101ec577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316300361080e57602082515f805160206112278339815191528152f35b6020608492519162461bcd60e51b8352820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152fd5b50816003193601126101ec5761088a610d40565b906024359267ffffffffffffffff84116101ec57366023850112156101ec5783820135906108b782610da8565b6108c382519182610d86565b8281526020928382019636602483830101116101ec57815f9260248793018a37830101526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169061091f30831415610df9565b61093b5f80516020611227833981519152928284541614610e5a565b61094361102c565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff161561097d5750505050505061022a9150611064565b869293949596169084516352d1902d60e01b815286818981865afa5f9181610b29575b506109ff57855162461bcd60e51b8152808901889052602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b6064820152608490fd5b969192939603610ad45750610a1382611064565b7fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b5f80a2835115801590610acc575b610a4857005b5f8061022a96845196610a5a88610d56565b602788527f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c87890152660819985a5b195960ca1b868901525190845af4913d15610ac2573d610ab4610aab82610da8565b92519283610d86565b81525f81943d92013e611134565b5060609250611134565b506001610a42565b835162461bcd60e51b8152908101859052602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b6064820152608490fd5b9091508781813d8311610b51575b610b418183610d86565b810103126101ec5751905f6109a0565b503d610b37565b50346101ec57602090816003193601126101ec57610b74610d40565b6001600160a01b03939092907f00000000000000000000000000000000000000000000000000000000000000008516610baf30821415610df9565b610bcb5f80516020611227833981519152918783541614610e5a565b610bd361102c565b8151908382019682881067ffffffffffffffff891117610d2d578784525f83527f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615610c2d5750505050505061022a9150611064565b869293949596169084516352d1902d60e01b815286818981865afa5f9181610cfe575b50610caf57855162461bcd60e51b8152808901889052602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b6064820152608490fd5b969192939603610ad45750610cc382611064565b7fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b5f80a2835115801590610cf757610a4857005b505f610a42565b9091508781813d8311610d26575b610d168183610d86565b810103126101ec5751905f610c50565b503d610d0c565b604186634e487b7160e01b5f525260245ffd5b600435906001600160a01b03821682036101ec57565b6060810190811067ffffffffffffffff821117610d7257604052565b634e487b7160e01b5f52604160045260245ffd5b90601f8019910116810190811067ffffffffffffffff821117610d7257604052565b67ffffffffffffffff8111610d7257601f01601f191660200190565b60609060031901126101ec576001600160a01b039060043582811681036101ec579160243590811681036101ec579060443590565b15610e0057565b60405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608490fd5b15610e6157565b60405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608490fd5b15610ec257565b60405162461bcd60e51b815260206004820152602360248201527f4f6e6c79204c6f747465727950726f76696465722063616e206469737472696260448201526275746560e81b6064820152608490fd5b15610f1a57565b60405162461bcd60e51b815260206004820152601d60248201527f496e73756666696369656e7420636f6e74726163742062616c616e63650000006044820152606490fd5b908160209103126101ec575180151581036101ec5790565b15610f7e57565b60405162461bcd60e51b8152602060048201526015602482015274141c9a5e99481d1c985b9cd9995c8819985a5b1959605a1b6044820152606490fd5b6001600160a01b03908116908115611014575f8051602061120783398151915280546001600160a01b031981168417909155167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a3565b604051631e4fbdf760e01b81525f6004820152602490fd5b5f80516020611207833981519152546001600160a01b0316330361104c57565b60405163118cdaa760e01b8152336004820152602490fd5b803b15611098575f8051602061122783398151915280546001600160a01b0319166001600160a01b03909216919091179055565b60405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608490fd5b60ff7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a005460401c161561112257565b604051631afcd79f60e31b8152600490fd5b919290156111965750815115611148575090565b3b156111515790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b8251909150156111a95750805190602001fd5b6040519062461bcd60e51b82528160208060048301528251908160248401525f935b8285106111ed575050604492505f838284010152601f80199101168101030190fd5b84810182015186860160440152938101938593506111cb56fe9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbca2646970667358221220eb80ff5308154ef3544179cadc9925563b274037fefb1eb76c7e1c3aa249952964736f6c63430008160033";
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
