pragma solidity ^0.8.0;

contract TradingEngine {
    struct Trade {
        address trader;
        uint256 amount;
        uint256 price;
    }

    Trade[] public trades;

    function executeTrade(uint256 amount, uint256 price) public {
        trades.push(Trade(msg.sender, amount, price));
    }

    function getTrades() public view returns (Trade[] memory) {
        return trades;
    }
}