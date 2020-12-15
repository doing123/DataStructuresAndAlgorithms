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
  // 3.dp + 状态压缩
  let sum = 0;
  for (let num of nums) sum += num;
  // 以下两种情况不存在合法的子集划分
  if (sum < S || (sum + S) % 2 === 1) return 0;
  return subsets(nums, (sum + S) / 2);

  // 计算 nums 中有几个子集的和为 sum
  function subsets (nums, sum) {
    let len = nums.length;
    let dp = new Array(sum + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i <= len; i++) {
      // j 从后往前遍历
      for (let j = sum; j >= 0; j--) {
        if (j >= nums[i - 1]) {
          // 两种选择的结果之和
          dp[j] = dp[j] + dp[j - nums[i - 1]];
        }
      }
    }

    return dp[sum];
  }
};
// @lc code=end
