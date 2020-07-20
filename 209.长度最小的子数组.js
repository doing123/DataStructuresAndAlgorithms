/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let len = nums.length;
  let min = Number.MAX_SAFE_INTEGER;

  // 滑动窗口
  let total = 0;
  let left = 0;
  let right = 0;
  while (right <= len) {
    total += nums[right];
    while (total >= s) {
      min = Math.min(min, right - left + 1);
      total -= nums[left];
      left++;
    }
    right++;
  }

  return min == Number.MAX_SAFE_INTEGER ? 0 : min;
};
// @lc code=end
