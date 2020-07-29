/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let result = 0;
  let len = nums.length;
  if (len == 0) return 0;
  let count = 1;
  for (let i = 1; i < len; i++) {
    if (nums[i] > nums[i - 1]) {
      count++;
    } else {
      result = Math.max(count, result);
      count = 1;
    }
  }
  result = Math.max(count, result);
  return result;
};
// @lc code=end
