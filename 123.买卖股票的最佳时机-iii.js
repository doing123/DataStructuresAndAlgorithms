/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let result = [];
  let start = 0;
  for (let i = 1, len = prices.length; i < len; i++) {
    if (prices[i] < prices[i - 1]) {
      start = i;
    }
    if (prices[i] > prices[i + 1] || i == len - 1) {
      result.push(prices[i] - prices[start]);
    }
  }
  // TODO 只考虑到所有交易中收益最高的两次，场景考虑不全
  return result
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((prev, val) => {
      return (prev += val);
    }, 0);
};
// @lc code=end
