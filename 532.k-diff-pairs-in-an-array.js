/*
 * @lc app=leetcode id=532 lang=javascript
 *
 * [532] K-diff Pairs in an Array
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  // 1.使用哈希表
  /* let res = 0
  let len = nums.length
  let map = new Map()
  for (let i = 0; i < len; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 1)
    }
  }

  for (let [key, val] of map.entries()) {
    if (k === 0 && val > 1) res++
    if (k > 0 && nums.includes(key + k)) res++
  }

  return res */

  // 2.双指针
  let res = 0
  let len = nums.length
  let j = 0
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len; i++) {
    j = Math.max(j, i + 1)
    while (j < len && nums[j] - nums[i] < k) j++
    if (j < len && nums[j] - nums[i] === k) res++
    while (i < len - 1 && nums[i] === nums[i + 1]) i++
  }
  return res
}
