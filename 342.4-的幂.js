/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  // 5.运算符
  return (Math.log10(n) / Math.log10(4)) % 1 == 0;
};
// @lc code=end
