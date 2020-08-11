/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  // 2.递归
  if (n < 3) {
    return n == 1;
  }
  return isPowerOfThree(n / 3);
};
// @lc code=end
