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
  // 1.
  /* if (nums.length < k) return 0
  let max = Number.MIN_SAFE_INTEGER
  for (let i = 0, len = nums.length; i <= len - k; i++) {
    let arr = nums.slice(i, i + k)
    let tmp = arr.reduce((total, item) => {
      return total + item
    })
    max = Math.max(max, tmp / k)
  }
  return max */

  // 2.计算子数组之和的常用方法应该是建立累加数组
  let len = nums.length
  let sums = nums.slice()
  for (let i = 1; i < len; i++) {
    sums[i] = sums[i - 1] + nums[i]
  }
  let max = sums[k - 1]
  for (let i = k; i < len; i++) {
    max = Math.max(max, sums[i] - sums[i - k])
  }
  return max / k
}

// findMaxAverage([1, 12, -5, -6, 50, 3], 4)
