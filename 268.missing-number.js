/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let len = nums.length
  let res = len
  for (let i = 0; i < len; i++) {
    res ^= nums[i] ^ i
  }
  return res
}

missingNumber([3, 0, 1])
