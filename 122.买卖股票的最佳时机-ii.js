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
  // 1.上涨区间，只买卖一次，省手续费哈
  // let result = 0;
  // let start = 0;
  // for (let i = 1, len = prices.length; i < len; i++) {
  //   if (prices[i] < prices[i - 1]) {
  //     start = i;
  //   }
  //   if (prices[i] > prices[i + 1] || i == len - 1) {
  //     result += prices[i] - prices[start];
  //   }
  // }
  // return result;

  // 2.优化
  // let result = 0;
  // for (let i = 1, len = prices.length; i < len; i++) {
  //   if (prices[i] > prices[i - 1]) {
  //     result += prices[i] - prices[i - 1];
  //   }
  // }
  // return result;

  // 3.
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
