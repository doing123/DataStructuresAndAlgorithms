/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  nums = nums.sort((a, b) => a - b)
  let result = [[]]
  for(let i = 0; i < nums.length; i++) {
    let len = result.length
    for(let j = 0; j < len; j++) {
      // result[j]： 对象引用
      const tmp = Array.from(result[j])
      result.push(tmp)
      result[result.length - 1].push(nums[i])
    }
  }

  return result
};

