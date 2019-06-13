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
  /* let res = 0
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      res = nums[i]; count++
    } else {
      nums[i] === res ? count++ : count--
    }
  }

  return res */

  // 位操作 Bit Manipulation
  let res = 0
  let n = Math.floor(nums.length / 2)
  for (let i = 0; i < 32; i++) {
    let ones = 0
    let zeros = 0
    for (let j = 0; j < nums.length; j++) {
      if (ones > n || zeros > n) break
      if ((nums[j] & (1 << i)) !== 0) ones++
      else zeros++
    }
    if (ones > zeros) res |= (1 << i)
  }

  return res
}
