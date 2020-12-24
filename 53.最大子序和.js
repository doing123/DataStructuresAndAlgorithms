/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 1.dp
  let len = nums.length;
  let dp = Array(len).fill(0);
  dp[0] = nums[0]; // base case
  for (let i = 1; i < len; i++) {
    // 状态转移方程：状态 + 选择
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  }

  return Math.max(...dp);
};
// @lc code=end
