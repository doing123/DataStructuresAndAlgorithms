/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (nums.length < 2) return nums
  let partition = -1
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      partition = i
      break
    }
  }
  if (partition === -1) {
    nums.reverse()
    return nums
  } else {
    for (let i = nums.length - 1; i > partition; i--) {
      if (nums[i] > nums[partition]) {
        [nums[i], nums[partition]] = [nums[partition], nums[i]]
        break
      }
    }
  }
  let left = partition + 1
  let right = nums.length - 1
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]]
    left++
    right--
  }

  return nums
}
