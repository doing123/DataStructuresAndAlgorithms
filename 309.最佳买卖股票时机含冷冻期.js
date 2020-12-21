/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 1.递归 + 备忘录
  let len = prices.length;
  let memo = [];
  return dp(0);

  function dp (start) {
    if (start > len) return 0;
    if (memo[start]) return memo[start];

    let min = prices[start];
    let result = 0;
    for (let sell = start + 1; sell < len; sell++) {
      min = Math.min(min, prices[sell]);
      result = Math.max(result, dp(sell + 2) + prices[sell] - min); // 冷冻期为 1 天，即隔一天才能操作
    }
    memo[start] = result;
    return result;
  }
};
// @lc code=end
