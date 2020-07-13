/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  var count = 0;
  while (n >= 5) {
    count += (n / 5) | 0; // TODO 没理解
    n /= 5;
  }
  return count;
};
// @lc code=end
