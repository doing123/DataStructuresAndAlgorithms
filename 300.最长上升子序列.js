/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // 1.动态规划
  let len = nums.length;
  if (len <= 1) return len;
  let dp = new Array(len).fill(1);
  for (let i = 0; i < len; i++) {
    // 状态转移方程：
    // 定义状态要有两个意识：1.最后一步是什么；2.化为子问题
    // 以nums[i]结尾，不断的去找前面比自己小的
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
};
// @lc code=end
