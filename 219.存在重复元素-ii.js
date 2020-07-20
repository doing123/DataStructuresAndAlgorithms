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
  // 1.线性搜索
  for (let i = 0; i < nums.length; i++) {
    let target = nums[i];
    let index = nums.slice(i + 1, i + k + 1).indexOf(target);
    if (index > -1 && index - i <= k) {
      return true;
    }
  }
  return false;
};
// @lc code=end
