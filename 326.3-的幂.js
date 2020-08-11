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
  // 3.转为 3 进制
  /**
   * 1 1
   * 2 2
   * 3 10
   * 4 11
   * 6 20
   * 9 100
   * 27 1000
   */
  return /^10*$/.test(n.toString(3));
};
// @lc code=end
