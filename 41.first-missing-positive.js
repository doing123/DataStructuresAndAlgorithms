/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  nums = nums.filter(item => item > 0)
  if (nums.length) {
    nums.sort((a, b) => a - b)
    if (nums[0] !== 1) {
      return 1
    }
    for (let i = 0, len = nums.length - 1; i < len; i++) {
      if (nums[i + 1] - nums[i] > 1) {
        return nums[i] + 1
      }
    }

    return nums.pop() + 1
  } else {
    return 1
  }
}
