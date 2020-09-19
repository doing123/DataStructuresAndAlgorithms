/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // 1.子数组里取最大值
  let result = [];
  let len = nums.length;
  for (let i = 0; i <= len - k; i++) {
    let sub = nums.slice(i, i + k);
    result.push(Math.max(...sub));
  }
  return result;
};
// @lc code=end
