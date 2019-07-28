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
  let max = 0
  let len = prices.length
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (prices[j] > prices[i]) {
        max = Math.max(max, prices[j] - prices[i])
      }
    }
  }
  return max
}
