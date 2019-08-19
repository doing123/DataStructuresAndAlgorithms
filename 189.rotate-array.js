/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // 1.
  /* let arr2 = nums.splice(nums.length - k)
  for (let i = arr2.length - 1; i >= 0; i--) {
    nums.unshift(arr2[i])
  } */

  // 2.
  for (var i = nums.length - 1; i >= nums.length - k; i--) {
    var item = nums.pop()
    nums.unshift(item)
  }
}
