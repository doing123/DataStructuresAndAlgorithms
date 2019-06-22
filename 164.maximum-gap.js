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
  let max = 0
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, nums[i + 1] - nums[i])
  }

  return max
}
