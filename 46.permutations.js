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
  // TODO:待深入理解
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

// permute([1, 2, 3])
