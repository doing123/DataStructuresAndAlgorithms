/*
 * @lc app=leetcode id=643 lang=javascript
 *
 * [643] Maximum Average Subarray I
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  if (nums.length < k) return 0
  let max = Number.MIN_SAFE_INTEGER
  for (let i = 0, len = nums.length; i <= len - k; i++) {
    let arr = nums.slice(i, i + k)
    let tmp = arr.reduce((total, item) => {
      return total + item
    })
    max = Math.max(max, tmp / k)
  }
  return max
}

// findMaxAverage([1, 12, -5, -6, 50, 3], 4)
