/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  // 2.布赖恩·克尼根算法
  // 借助 num & (num - 1) 来直接去除 num 的二进制中最右边的 1
  let n = x ^ y; // 异或：不同为1
  let result = 0;
  while (n) {
    n = n & (n - 1);
    result++;
  }
  return result;
};
// @lc code=end
