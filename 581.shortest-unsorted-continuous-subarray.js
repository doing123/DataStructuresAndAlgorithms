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
  // 1.
  /* let res = 0
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
  return res */

  // 2.
  let arr = nums.slice()
  let i = 0
  let n = nums.length
  let j = n - 1
  arr.sort((a, b) => a - b)

  while (i < n && nums[i] === arr[i]) i++
  while (j > i && nums[j] === arr[j]) j--
  return j - i + 1
}
