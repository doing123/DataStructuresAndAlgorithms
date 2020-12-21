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
  // 1.线性查找
  let result = 0;
  for (let i = 1, len = prices.length; i < len; i++) {
    if (prices[i] > prices[i - 1]) {
      result += prices[i] - prices[i - 1]
    }
  }

  return result;
};
// @lc code=end
