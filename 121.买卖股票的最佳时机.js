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
  // 双循环，暴力破解
  // let max = 0;
  // for (let i = 0, len = prices.length; i < len; i++) {
  //   for (let j = i + 1; j < len; j++) {
  //     if (prices[j] > prices[i]) {
  //       max = Math.max(max, prices[j] - prices[i]);
  //     }
  //   }
  // }
  // return max;

  let len = prices.length;
  if (len == 0) return 0;
  let max = 0;
  let min = prices[0];
  for (let i = 1; i < len; i++) {
    max = Math.max(max, prices[i] - min);
    min = Math.min(min, prices[i]);
  }

  return max;
};
// @lc code=end
