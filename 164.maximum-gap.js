/*
 * @lc app=leetcode id=164 lang=javascript
 *
 * [164] Maximum Gap
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  if (nums.length < 2) return 0
  let max = 0
  // 1
  /* nums.sort((a, b) => a - b)
  for (let i = 0, len = nums.length - 1; i < len; i++) {
    max = Math.max(max, nums[i + 1] - nums[i])
  }

  return max */

  // 2
  let len = nums.length - 1
  for (let i = len; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }
    if (i < len) {
      max = Math.max(max, nums[i + 1] - nums[i])
    }
  }
  return Math.max(max, nums[1] - nums[0])
}
