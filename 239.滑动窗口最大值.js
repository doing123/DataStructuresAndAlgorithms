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
  // 1.暴力法
  let n = nums.length;
  if (n == 0) return [];
  let res = [];
  for (let i = 0; i < n - k + 1; i++) {
    // TODO 使用数组就超时，遍历就OK？？？
    let max = Number.MIN_SAFE_INTEGER;
    for (let j = i; j < i + k; j++) {
      max = Math.max(max, nums[j]);
    }
    res.push(max);
  }
  return res;
};
// @lc code=end
