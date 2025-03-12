"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// PLUGINS
require("@gelatonetwork/web3-functions-sdk/hardhat-plugin");
require("@matterlabs/hardhat-zksync-solc");
require("@matterlabs/hardhat-zksync-verify");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@typechain/hardhat");
require("hardhat-deploy");
require("hardhat-abi-exporter");
// ================================= TASKS =========================================
// Process Env Variables
const dotenv = __importStar(require("dotenv"));
dotenv.config({ path: __dirname + "/.env" });
// Libraries
// Process Env Variables
const ALCHEMY_ID = process.env.ALCHEMY_ID;
const INFURA_ID = process.env.INFURA_ID;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
// ================================= CONFIG =========================================
const config = {
    w3f: {
        rootDir: "./web3-functions",
        debug: false,
        networks: ["mumbai", "goerli", "baseGoerli"], //(multiChainProvider) injects provider for these networks
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {},
        monadtestnet: {
            url: "https://testnet-rpc.monad.xyz",
            chainId: 10143,
            accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
        },
        // Prod
        avalanche: {
            url: "https://api.avax.network/ext/bc/C/rpc",
            chainId: 43114,
            accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
        },
        arbitrum: {
            chainId: 42161,
            url: "https://arb1.arbitrum.io/rpc",
            accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
        },
        arbsepolia: {
            chainId: 421614,
            url: `https://sepolia-rollup.arbitrum.io/rpc`,
            accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
        },
        base: {
            url: `https://mainnet.base.org`,
            chainId: 8453,
            accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
        },
        bsc: {
            chainId: 56,
            url: "https://bsc-dataseed.binance.org/",
            accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
        },
        ethereum: {
            chainId: 1,
            url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_ID}`,
            accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
        },
        fantom: {
            chainId: 250,
            url: `https://rpcapi.fantom.network/`,
            accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
        },
        gnosis: {
            chainId: 100,
            url: `https://gnosis-mainnet.public.blastapi.io`,
            accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
        },
        linea: {
            url: `https://linea-mainnet.infura.io/v3/${INFURA_ID}`,
            chainId: 59144,
            accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
        },
        optimism: {
            chainId: 10,
            url: "https://mainnet.optimism.io",
            accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
        },
        osepolia: {
            chainId: 11155420,
            url: `https://sepolia.optimism.io`,
            accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
        },
        polygon: {
            chainId: 137,
            url: "https://rpc-mainnet.maticvigil.com",
            accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
        },
        polygonzk: {
            url: "https://zkevm-rpc.com",
            chainId: 1101,
            accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
        },
        zksync: {
            zksync: true,
            url: "https://mainnet.era.zksync.io",
            chainId: 324,
            accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
            verifyURL: "https://zksync2-mainnet-explorer.zksync.io/contract_verification",
        },
        // Staging
        arbgoerli: {
            chainId: 421613,
            url: `https://arb-goerli.g.alchemy.com/v2/${ALCHEMY_ID}`,
            accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
        },
        baseGoerli: {
            chainId: 84531,
            url: "https://goerli.base.org",
            accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
        },
        geloptestnet: {
            chainId: 42069,
            url: `https://rpc.op-testnet.gelato.digital`,
            accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
        },
        goerli: {
            chainId: 5,
            url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_ID}`,
            accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
        },
        mumbai: {
            chainId: 80001,
            url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_ID}`,
            accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
        },
        sepolia: {
            chainId: 11155111,
            url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_ID}`,
            accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
        },
        unreal: {
            chainId: 18231,
            url: `https://rpc.unreal.gelato.digital`,
            accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
        },
        zkatana: {
            chainId: 1261120,
            url: "https://rpc.zkatana.gelato.digital",
            accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
        },
    },
    // sourcify: {
    //   enabled: true,
    //   apiUrl: "https://sourcify-api-monad.blockvision.org",
    //   browserUrl: "https://testnet.monadexplorer.com"
    // },
    solidity: {
        compilers: [
            {
                version: "0.8.22",
                settings: {
                    optimizer: { enabled: true },
                    viaIR: true,
                },
            },
        ],
    },
    typechain: {
        outDir: "typechain",
        target: "ethers-v5",
    },
    abiExporter: {
        path: './abi',
        format: 'json',
        clear: true,
        flat: false,
        runOnCompile: true,
    },
};
exports.default = config;
