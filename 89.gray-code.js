/*
 * @lc app=leetcode id=89 lang=javascript
 *
 * [89] Gray Code
 */
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  if (n === 0) return [0]
  let make = (n) => {
    if (n === 1) {
      return ['0', '1']
    } else {
      let prev = make(n - 1)
      let result = []
      let max = Math.pow(2, n) - 1
      for (let i = 0; i < prev.length; i++) {
        result[i] = `0${prev[i]}`
        result[max - i] = `1${prev[i]}`
      }
      return result
    }
  }
  return make(n).map(item => parseInt(item, 2))
}

// grayCode(2)
