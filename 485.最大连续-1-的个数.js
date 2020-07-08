/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续1的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let res = 0;
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      j = 0;
      continue;
    }
    j++;
    res = Math.max(res, j);
  }

  return res;
};
// @lc code=end
