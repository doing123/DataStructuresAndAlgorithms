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
  for (let i = 0; i < len - 1; i++) {
    let end = i + 1;
    let total = nums[i];
    while (total < s && end < len) {
      total += nums[end];
      end++;
    }
    if (total >= s) {
      min = Math.min(min, end - i);
    }
  }

  return min == Number.MAX_SAFE_INTEGER ? 0 : min;
};
// @lc code=end
