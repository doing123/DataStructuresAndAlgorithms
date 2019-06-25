/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let closest = nums[0] + nums[1] + nums[2]
  let diff = Math.abs(closest - target)
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      let newDiff = Math.abs(sum - target)
      if (diff > newDiff) {
        diff = newDiff
        closest = sum
      }
      if (sum < target) left++
      else right--
    }
  }

  return closest
}
