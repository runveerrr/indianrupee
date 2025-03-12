// SPDX-License-Identifier: MIT

// ASCII HEADER START
//
// ██╗███╗░░██╗██████╗░██╗░█████╗░███╗░░██╗  ██████╗░██╗░░░██╗██████╗░███████╗███████╗
// ██║████╗░██║██╔══██╗██║██╔══██╗████╗░██║  ██╔══██╗██║░░░██║██╔══██╗██╔════╝██╔════╝
// ██║██╔██╗██║██║░░██║██║███████║██╔██╗██║  ██████╔╝██║░░░██║██████╔╝█████╗░░█████╗░░
// ██║██║╚████║██║░░██║██║██╔══██║██║╚████║  ██╔══██╗██║░░░██║██╔═══╝░██╔══╝░░██╔══╝░░
// ██║██║░╚███║██████╔╝██║██║░░██║██║░╚███║  ██║░░██║╚██████╔╝██║░░░░░███████╗███████╗
// ╚═╝╚═╝░░╚══╝╚═════╝░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝  ╚═╝░░╚═╝░╚═════╝░╚═╝░░░░░╚══════╝╚══════╝
//
// ░░██╗██╗███╗░░██╗██████╗░██╗░░
// ░██╔╝██║████╗░██║██╔══██╗╚██╗░
// ██╔╝░██║██╔██╗██║██████╔╝░╚██╗
// ╚██╗░██║██║╚████║██╔══██╗░██╔╝
// ░╚██╗██║██║░╚███║██║░░██║██╔╝░
// ░░╚═╝╚═╝╚═╝░░╚══╝╚═╝░░╚═╝╚═╝░░
//
//  Indian Rupee (INR) - Polygon Network
//  © 2025 Indian Rupee Token. All rights reserved.
//

const { ethers, upgrades } = require("hardhat");

async function main() {
    console.log("Upgrading Indian Rupee Token...");

    const IndianRupeeV2 = await ethers.getContractFactory("IndianRupeeV2");

    const proxyAddress = "0x78Da0A2Db3A0887580A1776Ba41e4230b5E46EC9";

    console.log("Proxy address:", proxyAddress);

    const upgraded = await upgrades.upgradeProxy(proxyAddress, IndianRupeeV2);

    console.log("Indian Rupee Token upgraded at:", upgraded.target);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
