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
  // 动态规划
  // 假设每次买股票的时候付手续费
  const dp = Array.from(new Array(prices.length), () => {
    return new Array(2); // 0:不持股，1:持股
  });

  // 第一天
  dp[0][0] = 0; // 不持股的收益
  dp[0][1] = 0 - prices[0] - fee; // 持股的收益
  for (let i = 1; i < prices.length; i++) {
    // 动态方程
    // 不持股：1.前一天不持股；2.前一天持股今天卖了
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    // 持股：1.前一天持股；2.前一天不持股今天买了
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i] - fee);
  }

  return dp[prices.length - 1][0];
};
// @lc code=end
