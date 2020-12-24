/*
 * @lc app=leetcode.cn id=673 lang=javascript
 *
 * [673] 最长递增子序列的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  // 1.一维数组 dp
  let len = nums.length;
  let dp = new Array(len).fill(1);
  let record = Array(len).fill(1); // 表示以nums[i]结尾的LIS的组合的个数

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          record[i] = record[j];
        } else if (dp[j] + 1 === dp[i]) {
          record[i] += record[j];
        }
      }
    }
  }

  let max = Math.max(...dp); // 最大递增子序列的长度
  let count = 0;
  for (let i = 0; i < len; i++) {
    if (dp[i] === max) {
      count += record[i];
    }
  }
  return count;
};
// @lc code=end
