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
  // 递归 + 备忘录，参考 买卖股票 iv, TODO 超出时间限制
  let len = prices.length;
  let memo = new Map();
  return dp(0, 2); // 买卖次数限制为 2

  function dp (start, k) {
    if (start > len) return 0;
    if (k === 0) return 0;
    let key = `${start},${k}`;
    if (memo.has(key)) return memo.get(key);

    let result = 0;
    let min = prices[start];
    for (let sell = start + 1; sell < len; sell++) {
      min = Math.min(min, prices[sell]);
      result = Math.max(result, dp(sell + 1, k - 1) + prices[sell] - min);
    }
    memo.set(key, result);
    return result;
  }
};
// @lc code=end
