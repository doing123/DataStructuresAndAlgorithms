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
  // 2.保存最大值、最小值
  // 即：固定卖出时间，向前穷举买入的时间，寻找 买入 最小的那天
  let max = 0;
  let len = prices.length;
  if (len === 0) return 0;
  let min = prices[0];
  for (let i = 1; i < len; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;
};
// @lc code=end
