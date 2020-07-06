/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  // TODO
  const result = [];
  let count = 0;
  nums.sort((a, b) => a- b);
  calc(count, nums);
  return result;

  function calc(count, nums) {
    if (count == nums.length) {
      result.push([...nums]);
      return;
    }

    const map = new Map();
    for (let i = count; i < nums.length; i++) {
      if (!map.get(nums[i])) {
        map.set(nums[i], true);
        [nums[i], nums[count]] = [nums[count], nums[i]];
        calc(count + 1, nums);
        [nums[i], nums[count]] = [nums[count], nums[i]];
      }
    }
  }
};
// @lc code=end
