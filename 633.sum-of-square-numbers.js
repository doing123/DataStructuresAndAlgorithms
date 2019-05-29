/*
 * @lc app=leetcode id=633 lang=javascript
 *
 * [633] Sum of Square Numbers
 */
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  for (let i = Math.floor(Math.sqrt(c)); i >= 0; i--) {
    if (i * i == c) return true
    let d = c - i * i
    let tmp = Math.floor(Math.sqrt(d))
    if (Math.pow(tmp, 2) == d) return true
  }

  return false
};

