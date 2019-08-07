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
  // 1.求乘积
  /* let result = []
  let tmp
  for (let i = 0; i < nums.length; i++) {
    // tmp = nums.slice()
    // tmp[i] = 1
    tmp = nums.slice(0, i).concat(nums.slice(i + 1))
    result.push(getTotal(tmp))
  }
  return result */

  // 2.其前面所有数字的乘积，同时也知道后面所有的数乘积，二者相乘
  let len = nums.length
  let head = Array(len).fill(1)
  let tail = Array(len).fill(1)
  let res = Array(len)
  for (let i = 0; i < len - 1; i++) {
    head[i + 1] = head[i] * nums[i]
  }
  for (let i = len - 1; i > 0; i--) {
    tail[i - 1] = tail[i] * nums[i]
  }
  for (let i = 0; i < len; i++) {
    res[i] = head[i] * tail[i]
  }

  return res
}

// productExceptSelf([1, 2, 3, 4])

function getTotal (arr) {
  return arr.reduce((total, item) => {
    return total * item
  })
}
