/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) { // 贪心
  // 保存利润
  let count = 0
  for (let i = 0, len = prices.length; i < len; i++) {
    for (let j = i; j < len - 1; j++) { //  TODO:待回顾
      if (prices[j + 1] > prices[j]) { // 如果后面一天的价格大于当前的价格就一直持有
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
