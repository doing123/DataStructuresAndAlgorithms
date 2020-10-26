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
  // let result = [];
  // let start = 0;
  // for (let i = 1, len = prices.length; i < len; i++) {
  //   if (prices[i] < prices[i - 1]) {
  //     start = i;
  //   }
  //   if (prices[i] > prices[i + 1] || i == len - 1) {
  //     result.push(prices[i] - prices[start]);
  //   }
  // }
  // // TODO 只考虑到所有交易中收益最高的两次，场景考虑不全
  // return result
  //   .sort((a, b) => b - a)
  //   .slice(0, 2)
  //   .reduce((prev, val) => {
  //     return (prev += val);
  //   }, 0);

  // DESC: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/solution/yi-ge-tong-yong-fang-fa-tuan-mie-6-dao-gu-piao-wen/
  let len = prices.length;
  if (len === 0) return 0;
  let hold1 = -prices[0];
  let hold2 = Number.MIN_SAFE_INTEGER;
  let release1 = Number.MIN_SAFE_INTEGER;
  let release2 = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i < len; i++) {
    let val = prices[i];
    hold1 = Math.max(hold1, -val);
    release1 = Math.max(release1, hold1 + val);
    hold2 = Math.max(hold2, release1 - val);
    release2 = Math.max(release2, hold2 + val);
  }
  return Math.max(0, release2);
};
// @lc code=end
