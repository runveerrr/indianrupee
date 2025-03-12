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


pragma solidity ^0.8.28;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract IndianRupee is Initializable, ERC20Upgradeable, OwnableUpgradeable {
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers(); // Prevents use of constructor in proxy pattern
    }

    function initialize() public initializer {
        __ERC20_init("Indian Rupee", "INR");
        __Ownable_init(msg.sender); // Pass deployer address as initial owner
        _mint(msg.sender, 1_000_000_000 * 10 ** decimals()); // Example initial supply
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }
}
