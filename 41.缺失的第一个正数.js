/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let i = 1;
  while (i < Number.MAX_VALUE) {
    if (!nums.includes(i)) {
      return i;
    }
    i++;
  }
};
// @lc code=end
