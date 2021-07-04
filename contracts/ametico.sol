// amet ICO

// Version of compiler
pragma solidity ^0.6.1;

contract amet_ico {
    // Introducing the maximum number of amet available for sale
    uint public max_amets = 1000000;
    // Introducing the USD to Amet conversion rate 
    uint public usd_to_amet = 1000;
    
    // Introducing the total number of amet that have been bought by the investors
    uint public total_amet_bought = 0;
    
    // Mapping from the investor address to its equity in Amet and USD
    mapping(address => uint) equity_amets;
    mapping(address => uint) equity_usd;
    
    // Checking if an invetor can buy Amets 
    modifier can_buy_amets(uint usd_invested) {
        require(usd_invested * usd_to_amet + total_amet_bought <= max_amets, "Cannot Buy");
        _;
    }
    
    // Getting the equity in Amets of an investor
    function equity_in_amets(address investor) external view returns(uint) {
        return equity_amets[investor];
    }
    
    // Getting the equity in USD of an investor
    function equity_in_usd(address investor) external view returns(uint) {
        return equity_usd[investor];
    }
    
    // Buying Amets
    function buy_amets(address investor, uint usd_invested) external
    can_buy_amets(usd_invested) {
        uint amets_bought = usd_invested * usd_to_amet;
        equity_amets[investor] += amets_bought;
        equity_usd[investor] = equity_amets[investor] / usd_to_amet;
        total_amet_bought += amets_bought;
    }
    
    // Selling Amets
    function sell_amets(address investor, uint amets_sold) external {
        equity_amets[investor] -= amets_sold;
        equity_usd[investor] = equity_amets[investor] / usd_to_amet;
        total_amet_bought -= amets_sold;
    }
    
}