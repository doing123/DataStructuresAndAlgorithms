/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  // 1.递归 + 备忘录
  let memo = new Map();
  let len = prices.length;

  return dp(0, k); // 从头开始递归

  function dp (start, k) {
    if (start > len) return 0;
    if (k === 0) return 0; // 没有可用交易次数时 返回 0
    let key = `${start},${k}`;
    if (memo.has(key)) return memo.get(key);

    let result = 0;
    let min = prices[start];
    for (let j = start + 1; j < len; j++) {
      min = Math.min(min, prices[j]);
      // 子集：本次买卖之后，j 右移一位，次数 k - 1
      result = Math.max(result, dp(j + 1, k - 1) + prices[j] - min);
    }
    memo.set(key, result);
    return result;
  }
};
// @lc code=end
