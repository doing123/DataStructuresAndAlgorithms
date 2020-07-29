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
  if (len <= 1) return len;
  for (let i = 1; i < len; i++) {
    let count = 1;
    while (i < len && nums[i] > nums[i - 1]) {
      count++;
      i++;
    }
    result = Math.max(count, result);
  }
  return result;
};
// @lc code=end
