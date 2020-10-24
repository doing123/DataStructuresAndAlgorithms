/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  // 2. n 包含1的个数 等于：n & n -1 的个数 + 1
  let result = new Array(num + 1).fill(0);
  for (let i = 1; i <= num; i++) {
    result[i] += result[i & (i - 1)] + 1;
  }
  return result;
};
// @lc code=end
