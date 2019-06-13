/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let res = 0
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      res = nums[i]; count++
    } else {
      nums[i] === res ? count++ : count--
    }
  }

  return res
}
