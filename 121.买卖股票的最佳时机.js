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
  // 1.双循环，暴力求解
  let max = 0;
  let len = prices.length;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      max = Math.max(max, prices[j] - prices[i]);
    }
  }
  return max;
};
// @lc code=end
