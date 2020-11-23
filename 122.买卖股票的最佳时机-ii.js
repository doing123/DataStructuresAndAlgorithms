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
  // 1.快慢双指针
  let result = 0;
  for (let i = 1, len = prices.length; i < len; i++) {
    for (let j = i; j < len; j++) {
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
