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
  // 3.递归：无穷 for 的情况就是递归的暗示 TODO 最后三个用例不过
  let result = 0;
  // 买
  for (let i = 0, len = prices.length; i < len; i++) {
    // 卖
    for (let j = i + 1; j < len; j++) {
      result = Math.max(
        result,
        maxProfit(prices.slice(j + 1)) + prices[j] - prices[i] // 子集 + 当前买卖股票的收益
      );
    }
  }

  return result;
};
// @lc code=end
