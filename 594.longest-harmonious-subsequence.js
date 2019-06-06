/*
 * @lc app=leetcode id=594 lang=javascript
 *
 * [594] Longest Harmonious Subsequence
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  nums.sort((a, b) => a - b)
  let res = 0
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let key = nums[i]
    if (map.has(key)) {
      map.set(key, map.get(key) + 1)
    } else {
      map.set(key, 1)
    }

    if (map.has(key + 1)) {
      res = Math.max(res, map.get(key) + map.get(key + 1))
    }
    if (map.has(key - 1)) {
      res = Math.max(res, map.get(key) + map.get(key - 1))
    }
  }

  return res
};

