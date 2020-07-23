/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  let set = new Set();
  let result = [];
  for(let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      result.push(nums[i]);
      continue;
    }
    set.add(nums[i]);
  }
  return result;
};
// @lc code=end
