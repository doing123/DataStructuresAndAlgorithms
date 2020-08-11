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
  // 3.转换为 4 进制
  return /^10*$/.test(n.toString(4));
};
// @lc code=end
