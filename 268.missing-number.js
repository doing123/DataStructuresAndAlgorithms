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
  // 利用位运算：异或XOR运算， X^X=0, X^0=X
  // 这里nums中的最大值为 len = nums.length, 而遍历到 len - 1, 所以默认res 为 len
  // 当然可以 res = 0， 遍历到 <= len
  let res = 0
  for (let i = 0; i <= len; i++) {
  // let res = len
  // for (let i = 0; i < len; i++) {
    res ^= nums[i] ^ i
  }
  return res
}

missingNumber([3, 0, 1])
