/*
 * @lc app=leetcode id=581 lang=javascript
 *
 * [581] Shortest Unsorted Continuous Subarray
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let res = 0
  let start = -1
  let n = nums.length
  for (let i = 1; i < n; i++) {
    if (nums[i] < nums[i - 1]) {
      let j = i
      while (j > 0 && nums[j] < nums[j - 1]) {
        [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]]
        j--
      }
      if (start === -1 || start > j) {
        start = j
      }
      res = i - start + 1
    }
  }
  return res
}
