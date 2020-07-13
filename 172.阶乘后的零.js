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
    n = Math.floor(n / 5); // TODO 没理解
    count += n;
  }
  return count;
};
// @lc code=end
