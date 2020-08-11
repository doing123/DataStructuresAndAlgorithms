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
  // 4.循环迭代
  if (n < 1) return false;
  while (n % 4 == 0) {
    n /= 4;
  }
  return n == 1;
};
// @lc code=end
