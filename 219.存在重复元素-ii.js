/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  // 2. Map映射
  let map = new Map();
  for(let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return true;
    map.set(nums[i], true);
    map.delete(nums[i - k]);
  }
  return false;
};
// @lc code=end
