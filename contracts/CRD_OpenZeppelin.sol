// SPDX-License-Identifier: The MIT Licence.
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


// ----------------------------------------------------------------------------
// 'CRD' token contract
//
// Symbol      : CRD
// Name        : CardinalPecks
// Total supply: 1000000
// Decimals    : 18
//
// Enjoy.
//
// ----------------------------------------------------------------------------

contract CRD_OpenZeppelin is ERC20{
    constructor() ERC20("CardinalPecks", "CRD") {
        _mint(msg.sender, 1000000);
    }
}

