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
    const IndianRupee = await ethers.getContractFactory("IndianRupee");

    console.log("Deploying Indian Rupee Token as an upgradeable contract...");

    // Deploying Proxy
    const inr = await upgrades.deployProxy(IndianRupee, [], {
        initializer: "initialize"
    });

    await inr.waitForDeployment();

    console.log("Indian Rupee Token deployed at:", await inr.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
