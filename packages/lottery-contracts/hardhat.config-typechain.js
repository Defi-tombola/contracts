"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typechainConfig = void 0;
require("@typechain/hardhat");
const dotenv_1 = __importDefault(require("dotenv"));
require("hardhat-deploy");
require("hardhat-abi-exporter");
dotenv_1.default.config();
exports.typechainConfig = {
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
exports.default = exports.typechainConfig;
