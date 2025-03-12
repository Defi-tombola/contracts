import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface HouseInterface extends utils.Interface {
    functions: {
        "collectFee(address,address,uint256)": FunctionFragment;
        "distributePrize(address,address,uint256)": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "lotteryProvider()": FunctionFragment;
        "owner()": FunctionFragment;
        "proxiableUUID()": FunctionFragment;
        "recoverERC20(address,uint256)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setLotteryProvider(address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "collectFee" | "distributePrize" | "initialize" | "lotteryProvider" | "owner" | "proxiableUUID" | "recoverERC20" | "renounceOwnership" | "setLotteryProvider" | "transferOwnership" | "upgradeTo" | "upgradeToAndCall"): FunctionFragment;
    encodeFunctionData(functionFragment: "collectFee", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "distributePrize", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "initialize", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "lotteryProvider", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "recoverERC20", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setLotteryProvider", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "collectFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "distributePrize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lotteryProvider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recoverERC20", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLotteryProvider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    events: {
        "AdminChanged(address,address)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "Deposited(address,address,uint256)": EventFragment;
        "FeeDistributed(address,address,uint256)": EventFragment;
        "Initialized(uint64)": EventFragment;
        "LotteryProviderUpdated(address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "PrizeDistributed(address,address,uint256)": EventFragment;
        "Recover(address,uint256)": EventFragment;
        "Upgraded(address)": EventFragment;
        "Withdrawn(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Deposited"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FeeDistributed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LotteryProviderUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PrizeDistributed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Recover"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}
export interface AdminChangedEventObject {
    previousAdmin: string;
    newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<[
    string,
    string
], AdminChangedEventObject>;
export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;
export interface BeaconUpgradedEventObject {
    beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<[
    string
], BeaconUpgradedEventObject>;
export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;
export interface DepositedEventObject {
    user: string;
    token: string;
    amount: BigNumber;
}
export type DepositedEvent = TypedEvent<[
    string,
    string,
    BigNumber
], DepositedEventObject>;
export type DepositedEventFilter = TypedEventFilter<DepositedEvent>;
export interface FeeDistributedEventObject {
    owner: string;
    token: string;
    amount: BigNumber;
}
export type FeeDistributedEvent = TypedEvent<[
    string,
    string,
    BigNumber
], FeeDistributedEventObject>;
export type FeeDistributedEventFilter = TypedEventFilter<FeeDistributedEvent>;
export interface InitializedEventObject {
    version: BigNumber;
}
export type InitializedEvent = TypedEvent<[BigNumber], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface LotteryProviderUpdatedEventObject {
    lottery_provider: string;
}
export type LotteryProviderUpdatedEvent = TypedEvent<[
    string
], LotteryProviderUpdatedEventObject>;
export type LotteryProviderUpdatedEventFilter = TypedEventFilter<LotteryProviderUpdatedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface PrizeDistributedEventObject {
    winner: string;
    token: string;
    amount: BigNumber;
}
export type PrizeDistributedEvent = TypedEvent<[
    string,
    string,
    BigNumber
], PrizeDistributedEventObject>;
export type PrizeDistributedEventFilter = TypedEventFilter<PrizeDistributedEvent>;
export interface RecoverEventObject {
    token_address: string;
    token: BigNumber;
}
export type RecoverEvent = TypedEvent<[string, BigNumber], RecoverEventObject>;
export type RecoverEventFilter = TypedEventFilter<RecoverEvent>;
export interface UpgradedEventObject {
    implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export interface WithdrawnEventObject {
    user: string;
    token: string;
    amount: BigNumber;
}
export type WithdrawnEvent = TypedEvent<[
    string,
    string,
    BigNumber
], WithdrawnEventObject>;
export type WithdrawnEventFilter = TypedEventFilter<WithdrawnEvent>;
export interface House extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: HouseInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        collectFee(token: PromiseOrValue<string>, lottery_owner: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        distributePrize(token: PromiseOrValue<string>, winner: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initialize(_lotteryProvider: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        lotteryProvider(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
        recoverERC20(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setLotteryProvider(_lotteryProvider: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    collectFee(token: PromiseOrValue<string>, lottery_owner: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    distributePrize(token: PromiseOrValue<string>, winner: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initialize(_lotteryProvider: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    lotteryProvider(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
    recoverERC20(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setLotteryProvider(_lotteryProvider: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        collectFee(token: PromiseOrValue<string>, lottery_owner: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        distributePrize(token: PromiseOrValue<string>, winner: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        initialize(_lotteryProvider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        lotteryProvider(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
        recoverERC20(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setLotteryProvider(_lotteryProvider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        "BeaconUpgraded(address)"(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
        "Deposited(address,address,uint256)"(user?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, amount?: null): DepositedEventFilter;
        Deposited(user?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, amount?: null): DepositedEventFilter;
        "FeeDistributed(address,address,uint256)"(owner?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, amount?: null): FeeDistributedEventFilter;
        FeeDistributed(owner?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, amount?: null): FeeDistributedEventFilter;
        "Initialized(uint64)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "LotteryProviderUpdated(address)"(lottery_provider?: PromiseOrValue<string> | null): LotteryProviderUpdatedEventFilter;
        LotteryProviderUpdated(lottery_provider?: PromiseOrValue<string> | null): LotteryProviderUpdatedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "PrizeDistributed(address,address,uint256)"(winner?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, amount?: null): PrizeDistributedEventFilter;
        PrizeDistributed(winner?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, amount?: null): PrizeDistributedEventFilter;
        "Recover(address,uint256)"(token_address?: PromiseOrValue<string> | null, token?: null): RecoverEventFilter;
        Recover(token_address?: PromiseOrValue<string> | null, token?: null): RecoverEventFilter;
        "Upgraded(address)"(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
        Upgraded(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
        "Withdrawn(address,address,uint256)"(user?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, amount?: null): WithdrawnEventFilter;
        Withdrawn(user?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, amount?: null): WithdrawnEventFilter;
    };
    estimateGas: {
        collectFee(token: PromiseOrValue<string>, lottery_owner: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        distributePrize(token: PromiseOrValue<string>, winner: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initialize(_lotteryProvider: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        lotteryProvider(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
        recoverERC20(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setLotteryProvider(_lotteryProvider: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        collectFee(token: PromiseOrValue<string>, lottery_owner: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        distributePrize(token: PromiseOrValue<string>, winner: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initialize(_lotteryProvider: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        lotteryProvider(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        recoverERC20(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setLotteryProvider(_lotteryProvider: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
