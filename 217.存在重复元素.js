/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // 2.set
  let set = new Set();
  for (let i = 0, len = nums.length; i < len; i++) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
  }
  return false;
};
// @lc code=end
