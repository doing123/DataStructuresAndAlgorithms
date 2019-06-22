/*
 * @lc app=leetcode id=922 lang=javascript
 *
 * [922] Sort Array By Parity II
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  A.sort((a, b) => a - b)
  let result = []
  let odd = 1
  let even = 0
  A.forEach(item => {
    if (item % 2 === 1) {
      result[odd] = item
      odd += 2
    } else {
      result[even] = item
      even += 2
    }
  })

  return result
}
