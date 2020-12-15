/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
  // 1.回溯
  let result = 0;
  backtrack(0, S);
  return result;

  function backtrack (i, rest) {
    // base case
    if (i === nums.length) {
      if (rest === 0) {
        result++;
      }
      return;
    }
    // 给 nums[i] 选择 - 号
    rest += nums[i];
    // 穷举 nums[i+1]
    backtrack(i + 1, rest);
    // 撤销选择
    rest -= nums[i];

    // 给 nums[i] 选择 + 号
    rest -= nums[i];
    backtrack(i + 1, rest);
    rest += nums[i];
  }
};
// @lc code=end
