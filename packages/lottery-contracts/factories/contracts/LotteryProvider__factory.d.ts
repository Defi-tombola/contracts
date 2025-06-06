import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { LotteryProvider, LotteryProviderInterface } from "../../contracts/LotteryProvider";
type LotteryProviderConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LotteryProvider__factory extends ContractFactory {
    constructor(...args: LotteryProviderConstructorParams);
    deploy(_operatorAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LotteryProvider>;
    getDeployTransaction(_operatorAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LotteryProvider;
    connect(signer: Signer): LotteryProvider__factory;
    static readonly bytecode = "0x60a0346100da57601f61218638819003918201601f19168301916001600160401b038311848410176100de578084926020946040528339810103126100da57516001600160a01b038116908190036100da5730608052801561009557600380546001600160a01b03191691909117905560405161209390816100f382396080518181816114180152818161150601526117980152f35b60405162461bcd60e51b815260206004820152601860248201527f496e76616c6964206f70657261746f72206164647265737300000000000000006044820152606490fd5b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe60806040526004361015610011575f80fd5b5f803560e01c806313a6b85c1461192c5780633659cfe6146117735780634f1ef286146114c857806352d1902d1461140657806354fd4d50146113bd578063619fcef31461130f578063715018a6146112a857806375ce7fff1461126c5780637d45019d14610fa45780637f2a8a8014610f205780638129fc1c14610dfe5780638980f11f14610c9d5780638da5cb5b14610c69578063915c72c714610be0578063b3f6b99a14610696578063c4f8f27b1461066c578063e7f43c6814610643578063e8741b60146103ac578063f2fde38b1461037f578063fa30ac671461012c5763ff9b3acf14610101575f80fd5b346101295780600319360112610129576002546040516001600160a01b039091168152602090f35b80fd5b5034610129576040366003190112610129576004356024906024359163ffffffff908184169384810361037b5783865260209260048452604087206002810193845461017d60ff8260401c16611d2a565b838061018d8782858c1c16611e42565b9216911611610336576001916001600160801b036101b2600183015460801c8b611e5a565b82546002546040516323b872dd60e01b81523360048201526001600160a01b039182166024820152929093166044830152899082908416818f816064810103925af190811561032b578c916102fe575b50156102c85760039182018b5b8b8782161061027d578c8c8c7f2d3924e319d5bc8c71d87ceb03b6a4563995df1411ac3eb694f96023b5cb55c88d6102718e6102508f8f8354861c16611e42565b67ffffffff0000000082549160201b169067ffffffff000000001916179055565b6040519384523393a380f35b8154600160401b8110156102b557879161029d8289809401865585611c3b565b815490881b908733831b921b1916179055011661020f565b634e487b7160e01b8e526041600452858efd5b60405162461bcd60e51b815260048101899052600e60248201526d14185e5b595b9d0819985a5b195960921b6044820152606490fd5b61031e9150893d8b11610324575b6103168183611b15565b810190611c50565b5f610202565b503d61030c565b6040513d8e823e3d90fd5b60405162461bcd60e51b815260048101879052601c60248201527f4e6f7420656e6f756768207469636b65747320617661696c61626c65000000006044820152606490fd5b5f80fd5b5034610129576020366003190112610129576103a961039c611a81565b6103a4611e78565b611dd1565b80f35b5034610129576020908160031936011261012957600435916103cc611e78565b8282526004815263ffffffff8060026040852001541615610605578383526004825260ff600260408520015460401c16156105c85761041e90848452600483526002604085200154831c161515611d93565b604051928184015280835261043283611af9565b8154600160401b8110156105b45761048d9360018201845561045382611bed565b505061045e82611bed565b81549060031b9060ff6001831b921b191617905560405194859183858401526040808401526060830190611bc8565b03906104a1601f1992838101875286611b15565b6364e62126194201428111610554576003900460018101908181116105a0574660010361056857600501809111610554579461054e917fd91fc3685b930310b008ec37d2334870cab88a023ed8cc628a2e2ccd4e55d2029596935b604051610529878201928784526040808401528261051d6060820188611bc8565b03908101835282611b15565b5190209087526001855260408720556040805194859485528401526040830190611bc8565b0390a180f35b634e487b7160e01b85526011600452602485fd5b600201809111610554579461054e917fd91fc3685b930310b008ec37d2334870cab88a023ed8cc628a2e2ccd4e55d2029596936104fc565b634e487b7160e01b86526011600452602486fd5b634e487b7160e01b83526041600452602483fd5b60405162461bcd60e51b81526004810183905260156024820152744c6f7474657279206973206e6f742061637469766560581b6044820152606490fd5b60405162461bcd60e51b8152600481018390526016602482015275131bdd1d195c9e48191bd95cc81b9bdd08195e1a5cdd60521b6044820152606490fd5b50346101295780600319360112610129576003546040516001600160a01b039091168152602090f35b50346101295760203660031901126101295760406020916004358152600183522054604051908152f35b503461037b57604036600319011261037b576024803567ffffffffffffffff9182821161037b573660238301121561037b5781600401359280841161037b578383019382850136811161037b576003546001600160a01b03969087163303610bac5785604091031261037b5760448501359083821161037b578461071c92870101611b89565b9384519160209286019060408785840193031261037b57838701519660408101519086821161037b57019282603f8501121561037b57848401519161076083611b37565b9461076e6040519687611b15565b838652868601946040858301011161037b5761079a938560406107919301611ba7565b87369201611b53565b838151910120865f526001845260405f20541460ff6107b888611bed565b90549060031b1c1615610b68576107cd578780f35b6040518381019060043582523060408201524660608201528760808201526080815260a081019581871090871117610b5557908491866040525190209280518101031261037b5751928181527fba2f82d6db5b53d6132f8ec6580bbb1fbdb2b180babfbfe3556ce277716cc0db833392a2825f5260048252600260405f2001805460ff8160401c1615610b185760ff60401b1916905560405193837fe1856052347be3ef0e173fa8575a7753569daca7dc6c4c34eaf4df02143c7c8f5f80a2835f526004835260405f209460028601549060ff8260401c16610ad75750831c63ffffffff169182156108bf8115611d93565b610ac3576108d38389920660038801611c3b565b90549060031b1c169460048101866001600160601b0360a01b82541617905560018101549261091b6001600160801b03918280610913838960801c611e5a565b169616611e5a565b1691828403938411610ab0575087600254168882541690803b1561037b57604051637f32b35160e11b81526001600160a01b0392831660048201529188166024830152604482018590525f908290606490829084905af18015610aa557610a92575b5088888060025416925416915f8051602061201e833981519152928a84541690823b15610a8e5760405163328dc65b60e11b81526001600160a01b03918216600482015291166024820152604481018590529082908290606490829084905af18015610a8357610a63575b5050907f06c5efeff5c320943d265dc4e5f1af95ad523555ce0c1957e367dda5514572df84610a4b997fadf5557d73276c2e92ffbef8f837ff484b31dd14a5f9ae61f5d956009ae617dc969594541692604051908152a2604051908152a3611bed565b60ff82549160031b1b191690555f8080808080808780f35b610a71909594939295611aad565b610a7f57909192885f6109e8565b8880fd5b6040513d84823e3d90fd5b8380fd5b610a9d919950611aad565b5f975f61097d565b6040513d5f823e3d90fd5b634e487b7160e01b5f9081526011600452fd5b50634e487b7160e01b5f9081526012600452fd5b62461bcd60e51b815260048101859052601c838201527f4c6f7474657279206d75737420626520636c6f736564206669727374000000006044820152606490fd5b60405162461bcd60e51b81526004810185905260168188015275131bdd1d195c9e48185b1c9958591e4818db1bdcd95960521b6044820152606490fd5b86634e487b7160e01b5f5260416004525ffd5b60405162461bcd60e51b815260048101859052601c818801527f726571756573742066756c66696c6c6564206f72206d697373696e67000000006044820152606490fd5b60405162461bcd60e51b815260206004820152600d818701526c37b7363c9037b832b930ba37b960991b6044820152606490fd5b3461037b57602036600319011261037b576004355f52600460205260e060405f2060018060a01b039060ff8282541692600183015492600281015491600463ffffffff92015416936040519586526001600160801b038116602087015260801c604086015280821660608601528160201c16608085015260401c16151560a083015260c0820152f35b3461037b575f36600319011261037b575f8051602061201e833981519152546040516001600160a01b039091168152602090f35b3461037b57604036600319011261037b57610cb6611a81565b60243590610cc2611e78565b6001600160a01b03908116918215610dc1578015610d7c5760446020925f8051602061201e83398151915254165f604051958694859363a9059cbb60e01b8552600485015260248401525af1908115610aa5575f91610d5d575b5015610d2457005b60405162461bcd60e51b815260206004820152601160248201527015da5d1a191c985dd85b0819985a5b1959607a1b6044820152606490fd5b610d76915060203d602011610324576103168183611b15565b81610d1c565b60405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206d7573742062652067726561746572207468616e20300000006044820152606490fd5b60405162461bcd60e51b8152602060048201526015602482015274496e76616c696420746f6b656e206164647265737360581b6044820152606490fd5b3461037b575f36600319011261037b577ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805460ff8160401c16159067ffffffffffffffff811680159081610f18575b6001149081610f0e575b159081610f05575b50610ef35767ffffffffffffffff198116600117835581610ed4575b50610e85611f3f565b610e8d611f3f565b610e9633611dd1565b610e9c57005b60ff60401b1981541690557fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2602060405160018152a1005b68ffffffffffffffffff19166801000000000000000117825582610e7c565b60405163f92ee8a960e01b8152600490fd5b90501584610e60565b303b159150610e58565b839150610e4e565b3461037b57602036600319011261037b57610f39611a81565b610f41611e78565b6001600160a01b03168015610f67576001600160601b0360a01b60025416176002555f80f35b60405162461bcd60e51b8152602060048201526015602482015274496e76616c696420686f757365206164647265737360581b6044820152606490fd5b3461037b5760a036600319011261037b57610fbd611a97565b604435906001600160801b03821680920361037b576064356001600160801b03811680910361037b576084359163ffffffff831680930361037b57611000611e78565b6004355f52600460205263ffffffff600260405f2001541661122e5760405161102881611ac1565b5f815260405191610100830183811067ffffffffffffffff82111761121a5760405260018060a01b031682528260208301528460408301528360608301525f6080830152600160a083015260c08201525f60e08201526004355f52600460205260405f2060018060a01b03825116906001600160601b0360a01b91828254161781556001600160801b036020840151166001600160801b0319604085015160801b161760018201556002810163ffffffff60608501511663ffffffff1982541617815561111c63ffffffff608086015116829067ffffffff0000000082549160201b169067ffffffff000000001916179055565b60a0840151815460ff60401b191690151560401b60ff60401b1617905560c0830151805190600383019067ffffffffffffffff831161121a57600160401b831161121a5781548383558084106111f4575b50602001905f5260205f205f5b8381106111d757505050506004019160e060018060a01b039101511690825416179055604051928352602083015260408201527f751d18dce70b3ed02a74f47b7ffd12dfc46b0db86b79faa3478359b906c8cd60606060043592a2005b82516001600160a01b03168183015560209092019160010161117a565b825f528360205f2091820191015b81811061120f575061116d565b5f8155600101611202565b634e487b7160e01b5f52604160045260245ffd5b60405162461bcd60e51b81526020600482015260166024820152754c6f747465727920616c72656164792065786973747360501b6044820152606490fd5b3461037b57602036600319011261037b576004355f5481101561037b5760ff611296602092611bed565b9190546040519260031b1c1615158152f35b3461037b575f36600319011261037b576112c0611e78565b5f8051602061201e83398151915280546001600160a01b031981169091555f906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b3461037b57604036600319011261037b57611328611a97565b6004355f52600460205260405f2061134960ff600283015460401c16611d2a565b6003908101805490925f926001600160a01b039182169190845b8463ffffffff8216106113815760208663ffffffff60405191168152f35b838361138d838a611c3b565b905490851b1c16146113a8575b6113a390611d6a565b611363565b946113b56113a391611d6a565b95905061139a565b3461037b575f36600319011261037b576114026040516113dc81611af9565b60058152640312e302e360dc1b6020820152604051918291602083526020830190611bc8565b0390f35b3461037b575f36600319011261037b577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316300361145d5760206040515f8051602061203e8339815191528152f35b60405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608490fd5b604036600319011261037b576114dc611a81565b60243567ffffffffffffffff811161037b576114fc903690600401611b89565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116919061153530841415611c68565b6115515f8051602061203e833981519152938285541614611cc9565b611559611e78565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff16156115915750505061158f90611eb0565b005b8316604051926352d1902d60e01b84526020938481600481865afa5f9181611744575b506116155760405162461bcd60e51b815260048101869052602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b6064820152608490fd5b939293036116ed5761162684611eb0565b7fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b5f80a28151158015906116e5575b61165b57005b61158f925f806040519461166e86611add565b602786527f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c85870152660819985a5b195960ca1b60408701528481519101845af4903d156116dc573d6116c081611b37565b906116ce6040519283611b15565b81525f81943d92013e611f80565b60609250611f80565b506001611655565b60405162461bcd60e51b815260048101839052602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b6064820152608490fd5b9091508581813d831161176c575b61175c8183611b15565b8101031261037b575190876115b4565b503d611752565b3461037b5760208060031936011261037b5761178d611a81565b906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166117c530821415611c68565b6117e15f8051602061203e833981519152918383541614611cc9565b6117e9611e78565b604051916117f683611ac1565b5f83527f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615611830575050505061158f90611eb0565b8416906040516352d1902d60e01b81528481600481865afa5f91816118fd575b506118b15760405162461bcd60e51b815260048101869052602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b6064820152608490fd5b939293036116ed576118c284611eb0565b7fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b5f80a28151158015906118f65761165b57005b505f611655565b9091508581813d8311611925575b6119158183611b15565b8101031261037b57519087611850565b503d61190b565b3461037b5760208060031936011261037b576004359061194a611e78565b815f526004815260405f20600281019160ff835460401c1615611a3d575f90600380840190600194859160018201925b6119b1575b875460ff60401b19168855887f3ba941cbd45d2da3474dd0873285e380e709781b14f2ac4a5e07f1a2832df0b45f80a2005b8354861015611a385781546001600160a01b03908116969086906119d58388611c3b565b905490851b1c166044865460801c915f6040519b8c94859363a9059cbb60e01b8552600485015260248401525af1908115610aa55788978892611a1b575b50019561197a565b611a3190883d8a11610324576103168183611b15565b508b611a13565b61197f565b6064906040519062461bcd60e51b82526004820152601960248201527f4c6f747465727920697320616c726561647920636c6f736564000000000000006044820152fd5b600435906001600160a01b038216820361037b57565b602435906001600160a01b038216820361037b57565b67ffffffffffffffff811161121a57604052565b6020810190811067ffffffffffffffff82111761121a57604052565b6060810190811067ffffffffffffffff82111761121a57604052565b6040810190811067ffffffffffffffff82111761121a57604052565b90601f8019910116810190811067ffffffffffffffff82111761121a57604052565b67ffffffffffffffff811161121a57601f01601f191660200190565b929192611b5f82611b37565b91611b6d6040519384611b15565b82948184528183011161037b578281602093845f960137010152565b9080601f8301121561037b57816020611ba493359101611b53565b90565b5f5b838110611bb85750505f910152565b8181015183820152602001611ba9565b90602091611be181518092818552858086019101611ba7565b601f01601f1916010190565b905f54821015611c27575f8052601f8260051c7f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56301921690565b634e487b7160e01b5f52603260045260245ffd5b8054821015611c27575f5260205f2001905f90565b9081602091031261037b5751801515810361037b5790565b15611c6f57565b60405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608490fd5b15611cd057565b60405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608490fd5b15611d3157565b60405162461bcd60e51b8152602060048201526011602482015270131bdd1d195c9e481a5cc818db1bdcd959607a1b6044820152606490fd5b63ffffffff809116908114611d7f5760010190565b634e487b7160e01b5f52601160045260245ffd5b15611d9a57565b60405162461bcd60e51b815260206004820152600f60248201526e4e6f207061727469636970616e747360881b6044820152606490fd5b6001600160a01b03908116908115611e2a575f8051602061201e83398151915280546001600160a01b031981168417909155167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a3565b604051631e4fbdf760e01b81525f6004820152602490fd5b91909163ffffffff80809416911601918211611d7f57565b9190916001600160801b0380809416911602918216918203611d7f57565b5f8051602061201e833981519152546001600160a01b03163303611e9857565b60405163118cdaa760e01b8152336004820152602490fd5b803b15611ee4575f8051602061203e83398151915280546001600160a01b0319166001600160a01b03909216919091179055565b60405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608490fd5b60ff7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a005460401c1615611f6e57565b604051631afcd79f60e31b8152600490fd5b91929015611fe25750815115611f94575090565b3b15611f9d5790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b825190915015611ff55750805190602001fd5b60405162461bcd60e51b815260206004820152908190612019906024830190611bc8565b0390fdfe9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbca2646970667358221220a8944c04fdd5230d795a08a50c255647530353a412dd8ff6f78e967335f8012e64736f6c63430008160033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_operatorAddr";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
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
            readonly name: "collector";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "FeeCollected";
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
            readonly internalType: "bytes32";
            readonly name: "lottery_id";
            readonly type: "bytes32";
        }];
        readonly name: "LotteryCanceled";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "lottery_id";
            readonly type: "bytes32";
        }];
        readonly name: "LotteryClosed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "requester";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "rNumber";
            readonly type: "uint256";
        }];
        readonly name: "LotteryNumberGenerated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "lottery_id";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "ticket_price";
            readonly type: "uint128";
        }, {
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "fee_amount_per_ticket";
            readonly type: "uint128";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "max_tickets";
            readonly type: "uint32";
        }];
        readonly name: "LotteryOpened";
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
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "lottery_id";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "buyer";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "tickets";
            readonly type: "uint32";
        }];
        readonly name: "TicketBought";
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
            readonly internalType: "bytes32";
            readonly name: "lottery_id";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "winner";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "WinnerPaid";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "lottery_id";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint32";
            readonly name: "ticket_count";
            readonly type: "uint32";
        }];
        readonly name: "buyTicket";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "lottery_id";
            readonly type: "bytes32";
        }];
        readonly name: "cancelLottery";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "lottery_id";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "_entrance_token_address";
            readonly type: "address";
        }, {
            readonly internalType: "uint128";
            readonly name: "_ticket_price";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "_fee_amount_per_ticket";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint32";
            readonly name: "_max_tickets";
            readonly type: "uint32";
        }];
        readonly name: "createLottery";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
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
        readonly inputs: readonly [];
        readonly name: "getOperator";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "house";
        readonly outputs: readonly [{
            readonly internalType: "contract IHouse";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly name: "lotteries";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "entrance_token_address";
            readonly type: "address";
        }, {
            readonly internalType: "uint128";
            readonly name: "fee_amount_per_ticket";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "ticket_price";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint32";
            readonly name: "max_tickets";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "sold_tickets";
            readonly type: "uint32";
        }, {
            readonly internalType: "bool";
            readonly name: "is_active";
            readonly type: "bool";
        }, {
            readonly internalType: "address";
            readonly name: "winner";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "lottery_id";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "participant";
            readonly type: "address";
        }];
        readonly name: "numberOfTicketsByAddress";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
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
            readonly name: "token_address";
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
            readonly internalType: "bytes32";
            readonly name: "lottery_id";
            readonly type: "bytes32";
        }];
        readonly name: "requestCloseLottery";
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
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_houseAddrs";
            readonly type: "address";
        }];
        readonly name: "setHouse";
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
    }, {
        readonly inputs: readonly [];
        readonly name: "version";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): LotteryProviderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LotteryProvider;
}
export {};
