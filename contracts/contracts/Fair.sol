// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

/// @title Fairs — simple example contract
contract Fair {
    string public name;
    address public owner;

    constructor(string memory _name) {
        name = _name;
        owner = msg.sender;
    }

    function setName(string memory _name) public {
        require(msg.sender == owner, "Only owner");
        name = _name;
    }
}
