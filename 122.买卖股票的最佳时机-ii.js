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
  let result = 0;
  let start = 0;
  for (let i = 1, len = prices.length; i < len; i++) {
    if (prices[i] < prices[i - 1]) {
      start = i;
    }
    if (prices[i] > prices[i + 1] || i == len - 1) {
      result += prices[i] - prices[start];
    }
  }
  return result;
};
// @lc code=end
