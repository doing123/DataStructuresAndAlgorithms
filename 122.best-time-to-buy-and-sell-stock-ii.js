/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 保存利润
  let count = 0
  for (let i = 0, len = prices.length; i < len; i++) {
    for (let j = i; j < len - 1; j++) { //  TODO:待回顾
      if (prices[j + 1] > prices[j]) {
        count += prices[j + 1] - prices[j]
        i = j
      } else {
        i = j
        break
      }
    }
  }
  return count
}
