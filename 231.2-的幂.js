/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  // 1. n % 2
  while (n > 1) {
    if (n % 2) return false;
    n /= 2;
  }
  return n > 0;
};
// @lc code=end
