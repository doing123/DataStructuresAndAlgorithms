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
  // 3.dp
  let sum = 0;
  for (let num of nums) sum += num;
  // 以下两种情况不存在合法的子集划分
  if (sum < S || (sum + S) % 2 === 1) return 0;
  return subsets(nums, (sum + S) / 2);

  // 计算 nums 中有几个子集的和为 sum
  function subsets (nums, sum) {
    let len = nums.length;
    // 表示，若只在前 i 个物品中选择，若当前背包的容量为 j，则最多有 x 种方法可以恰好装满背包。
    let dp = Array.from({ length: len + 1 }, () => {
      return new Array(sum + 1).fill(0);
    });
    for (let i = 0; i <= len; i++) {
      dp[i][0] = 1; // 如果背包的最大载重为 0，「什么都不装」就是唯一的一种装法。
    }

    for (let i = 1; i <= len; i++) {
      for (let j = 0; j <= sum; j++) {
        if (j >= nums[i - 1]) {
          // 两种选择的结果之和
          dp[i][j] = dp[i - 1][j] + dp[i - 1][j - nums[i - 1]];
        } else {
          dp[i][j] = dp[i - 1][j];
        }
      }
    }

    return dp[len][sum];
  }
};
// @lc code=end
