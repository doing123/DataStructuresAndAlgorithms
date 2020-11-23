/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;
  let len = prices.length;
  if (len === 0) return 0;
  const dp = Array.from({ length: len }, () => {
    return new Array(2).fill(0);
  });
  dp[0][0] = 0; // 表示第 i 天交易完成手中不持有股票的最大金额数
  dp[0][1] = -prices[0]; // 第 i 天交易完成后手中持有一支股票的最大金额数
  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]); // 当天不持有的情况 = 前一天不持有，或者前一天持有当天卖，取两者大的值
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]); // 当天持有的情况 = 前一天的继续持有，或者前一天没有买卖当天买，取两者大的值
  }
  return dp[len - 1][0];
};
// @lc code=end
