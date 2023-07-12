// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

interface IRC20 {
    function totalSupply() external  view returns (uint256);
    function balanceof(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);

    event Transfer(address indexed from, address indexed to, uint256 value);
}

contract mycrpt is IRC20 {
    string public constant name = "mycpto";
    string public constant symbol = "CGCt";
    uint8 public constant decimals = 0;
     address public owner;

    mapping(address => uint256) balances;
    uint256 totalSupply_ = 1000;

    constructor() {
        balances[msg.sender] = totalSupply_;
         owner = msg.sender;

    }
    function totalSupply() public override view  returns (uint256) {
        return totalSupply_;
    }

    function balanceof(address oner) external override view returns (uint256) {
        return balances[oner];
    }

    function transfer(address recipient, uint256 amount) external override  returns(bool) {
        require(amount <= balances[msg.sender], "Insufficient balance");
        balances[msg.sender] -= amount;
        balances[recipient] += amount;
        emit Transfer(msg.sender, recipient, amount);
        return true;
    }
}
