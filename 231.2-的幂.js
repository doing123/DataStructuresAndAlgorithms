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
  // 3.位运算：利用 n & n - 1 打掉最后一位 1
  // 2的幂特点：转为二进制 只有一个 1
  // 如： 16 => 10000  1 => 1  4 => 100
  return n > 0 && (n & (n - 1)) === 0;
};
// @lc code=end
