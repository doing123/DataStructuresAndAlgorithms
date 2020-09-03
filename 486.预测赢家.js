/*
 * @lc app=leetcode.cn id=486 lang=javascript
 *
 * [486] 预测赢家
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
  // 1.迭代
  function helper(start, end) {
    if (start === end) return nums[start];
    const left = nums[start] - helper(start + 1, end);
    const right = nums[end] - helper(start, end - 1);
    return Math.max(left, right);
  }
  return helper(0, nums.length - 1) >= 0;
};
// @lc code=end
