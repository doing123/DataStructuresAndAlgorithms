/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // 1.暴力 双循环
  let len = nums.length;
  let hasCheck = new Set();
  for (let item of nums) {
    if (hasCheck.has(item)) continue;
    let total = nums.reduce((prev, val) => {
      return prev + (val === item ? 1 : 0);
    }, 0);
    if (total > len / 2) return item;
    hasCheck.add(item);
  }
};
// @lc code=end
