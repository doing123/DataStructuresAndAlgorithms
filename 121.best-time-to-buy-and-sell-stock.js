/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 1.
  /* let max = 0
  let len = prices.length
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (prices[j] > prices[i]) {
        max = Math.max(max, prices[j] - prices[i])
      }
    }
  }
  return max */

  // 2.min变量来保存当前时刻的最小值，最大收益值则是不断用当前值减去最小值，不断的更新min值以及最大收益值
  let len = prices.length
  if (!len) return 0
  let res = 0
  let min = prices[0]
  for (let i = 1; i < len; i++) {
    res = Math.max(res, prices[i] - min)
    min = Math.min(min, prices[i])
  }
  return res
}
