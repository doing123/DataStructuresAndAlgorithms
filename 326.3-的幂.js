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
  // 1.循环
  while (n >= 3) {
    n = n / 3;
  }
  return n == 1;
};
// @lc code=end
