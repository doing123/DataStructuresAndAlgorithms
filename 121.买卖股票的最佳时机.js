/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 3.dp
  let max = 0;
  let len = prices.length;
  if (len === 0) return 0;
  const dp = Array.from({ length: len }, () => {
    return new Array(3).fill(0);
  });
  dp[0][0] = 0; // 没有买卖股票
  dp[0][1] = -prices[0]; // 当天买股票
  dp[0][2] = 0; // 当天卖股票的情况
  for (let i = 1; i < len; i++) {
    dp[i][0] = dp[i - 1][0];
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]); // 当天持有的情况 = 前一天的继续持有，或者前一天没有买卖当天买，取两者大的值
    dp[i][2] = dp[i - 1][1] + prices[i]; // 前一天持有，当天卖
    max = Math.max(max, dp[i][0], dp[i][1], dp[i][2]);
  }
  return max;
};
// @lc code=end
