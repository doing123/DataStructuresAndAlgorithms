/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let result = []
  let tmp
  for (let i = 0; i < nums.length; i++) {
    // tmp = nums.slice()
    // tmp[i] = 1
    tmp = nums.slice(0, i).concat(nums.slice(i + 1))
    result.push(getTotal(tmp))
  }
  return result
}

function getTotal (arr) {
  return arr.reduce((total, item) => {
    return total * item
  })
}
