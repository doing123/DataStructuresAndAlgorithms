/*
 * @lc app=leetcode id=292 lang=javascript
 *
 * [292] Nim Game
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  /* if (n % 4 === 0) {
    return false
  } else {
    return true
  } */

  return n % 4 !== 0
}
