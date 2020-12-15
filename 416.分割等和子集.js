/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  // 1. 0-1 背包问题
  let sum = nums.reduce((prev, val) => prev + val, 0);
  if (sum % 2 !== 0) return false;
  sum = sum / 2;
  let len = nums.length;

  let dp = Array.from({ length: len + 1 }, () => {
    return new Array(sum + 1).fill(false); // [0][i] 没有可用物品去装，为 false
  });

  // 初始状态
  for (let i = 0; i <= len; i++) {
    dp[i][0] = true; // 容量为0，代表装满了 true
  }

  // [i][j] 表示 前 i 个物品 刚好可以填满容量为 j 的背包
  for (let i = 1; i <= len; i++) {
    for (let j = 1; j <= sum; j++) {
      if (j - nums[i - 1] < 0) {
        // 背包容量不足，不能装入第 i 个物品
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
      }
    }
  }

  return dp[len][sum];
};
// @lc code=end
