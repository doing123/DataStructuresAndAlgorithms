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
  // 2.递归
  if (n < 4) return n == 1;
  return isPowerOfFour(n / 4);
};
// @lc code=end
