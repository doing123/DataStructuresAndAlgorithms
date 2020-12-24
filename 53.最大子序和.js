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
  // 1.dp：降低空间复杂度
  let len = nums.length;
  let dp = Array(len).fill(0);
  // dp[i] 仅仅和 ap[i - 1] 的状态有关
  let dp0 = nums[0];
  let dp1 = 0;
  let result = dp0;
  for (let i = 1; i < len; i++) {
    // 状态转移方程：状态 + 选择
    dp1 = Math.max(dp0 + nums[i], nums[i]);
    dp0 = dp1;
    // 求最大值
    result = Math.max(result, dp0);
  }

  return result;
};
// @lc code=end
