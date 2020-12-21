/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 2.动态规划
  let len = prices.length;
  if (len <= 1) return 0;
  let dp = Array.from({ length: len }, () => {
    return new Array(2); // 0 空仓；1 持有
  });

  // base case
  dp[0][0] = 0;
  dp[0][1] = 0 - prices[0]; // 第一天持有，即买入
  dp[1][0] = Math.max(0, -prices[0] + prices[1]); // 第二天 空仓
  dp[1][1] = Math.max(-prices[0], -prices[1]); // 第二天 持有

  for (let i = 2; i < len; i++) {
    // 空仓： 前一天空仓，今天不买；前一天持有，今天卖
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    // 持有：前一天持有，今天不卖；前两天空仓，今天买
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i]);
  }

  return dp[len - 1][0];
};
// @lc code=end
