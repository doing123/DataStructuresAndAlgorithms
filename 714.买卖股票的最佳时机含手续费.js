/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  // 2.递归 + 备忘录 TODO 超出时间限制
  let len = prices.length;
  let memo = [];
  return dp(0); // 不限次数，但每次买的时候需要手续费

  function dp (start) {
    if (start > len) return 0;
    if (memo[start]) return memo[start];

    let min = prices[start];
    let result = 0;
    for (let sell = start + 1; sell < len; sell++) {
      min = Math.min(min, prices[sell]);
      result = Math.max(result, dp(sell + 1) + prices[sell] - min - fee);
    }
    memo[start] = result;
    return result;
  }
};
// @lc code=end
