/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  let res = parseInt(str)
  if (res < Math.pow(-2, 31)) {
    res = Math.pow(-2, 31)
  }
  if (res > Math.pow(2, 31) - 1) {
    res = Math.pow(2, 31) - 1
  }

  return isNaN(res) ? 0 : res
}
