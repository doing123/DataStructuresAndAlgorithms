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
var findDuplicates = function (nums) {
  let result = [];
  // 利用索引号,如数字num，将num - 1的位置的数字取相反数，连续两次取相反数会变回来
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;
    // 如果为负，即已经出现过一次了
    if (nums[index] < 0) {
      result.push(index + 1);
    }
    nums[index] = -nums[index];
  }

  return result;
};
// @lc code=end
