pragma solidity ^0.8.0;

contract UserAuthentication {
    mapping(address => bool) private users;

    function register() public {
        require(!users[msg.sender], 'User already registered');
        users[msg.sender] = true;
    }

    function isRegistered(address user) public view returns (bool) {
        return users[user];
    }
}