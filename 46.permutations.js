/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = []
  fullArrange(nums, nums.length, 0, result)
  return result

  function fullArrange (nums, size, n, result) {
    if (n === size) {
      result.push(nums)
    }
    for (let i = n; i < size; i++) {
      [nums[i], nums[n]] = [nums[n], nums[i]]

      fullArrange(nums.concat(), size, n + 1, result);

      [nums[i], nums[n]] = [nums[n], nums[i]]
    }
  }
}
