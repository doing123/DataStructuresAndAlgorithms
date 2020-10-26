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
  // 1.循环：线性连续遍历，优化
  let result = 0;
  for (let i = 1; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      if (prices[j] > prices[j - 1]) {
        result += prices[j] - prices[j - 1];
        i = j;
      } else {
        i = j;
        break;
      }
    }
  }
  return result;
};
// @lc code=end
