/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let slow = 0;
  let fast = 0;
  while (fast < nums.length) {
    if (nums[slow] !== nums[fast]) {
      slow++;
      // 维护 nums[0..slow] 无重复
      nums[slow] = nums[fast];
    }
    fast++;
  }
  // 数组长度为 slow 索引 + 1
  return slow + 1;
};
// @lc code=end
