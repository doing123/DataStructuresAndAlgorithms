/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  // 解法二：位操作技巧
  // n & n - 1: 去除最后一个 1
  let count = 0;
  while (n !== 0) {
    count++;
    n &= n - 1;
  }
  return count;
};
// @lc code=end
