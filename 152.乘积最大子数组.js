/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  // 2.dp
  let len = nums.length;
  const dp = Array.from({ length: len }, () => {
    return new Array(2).fill(0); // 长度为2，0位保存最大值，1保存最小值
  });
  dp[0][0] = nums[0]; // 保存最大值
  dp[0][1] = nums[0]; // 最小
  let result = nums[0];
  let temp1, temp2;
  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];
    temp1 = dp[i - 1][0] * num;
    temp2 = dp[i - 1][1] * num;
    // 对于i来说，i - 1的最优解可能是最大值，也可能是最小值
    dp[i][1] = Math.min(temp1, temp2, nums[i]);
    dp[i][0] = Math.max(temp1, temp2, nums[i]);
    result = Math.max(result, dp[i][0]);
  }

  return result;
};
// @lc code=end
