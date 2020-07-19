/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      return nums[i + 1];
    }
  }
  return nums[0];
};
// @lc code=end
