// Time Complexity: O(n)
// Space Complexity: O(1)

function maximize_profit(prices) {
  let profit = 0;
  let leftPointer = 0;
  let rightPointer = 1;

  while(rightPointer < prices.length) {
    let currentProfit = prices[rightPointer] - prices[leftPointer];
    if (currentProfit > 0) {
      if (currentProfit > profit) {
        profit = currentProfit;
      }

    } else {
      leftPointer = rightPointer;
    }

    rightPointer++;
  }

  return profit;
}
