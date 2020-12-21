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
  // 3.递归 + 备忘录 TODO 内存超过限制
  let len = prices.length;
  let memo = [];

  return dp(0);

  function dp (start) {
    if (start > len) return 0;
    if (memo[start]) return memo[start];

    let result = 0;
    let curMin = prices[start];
    // 卖
    for (let j = start + 1; j < len; j++) {
      curMin = Math.min(curMin, prices[j]);
      result = Math.max(
        result,
        dp(j + 1) + prices[j] - curMin // 子集 + 当前买卖股票的收益
      );
    }
    memo[start] = result;
    return result;
  }
};
// @lc code=end
