/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  // 1.dp
  let n = coins.length;
  const dp = Array.from({ length: n + 1 }, () => {
    return new Array(amount + 1).fill(0);
  });

  // base case
  // dp[0][i] 不使用任何硬币面值，就无法凑出任何金额
  for (let i = 0; i <= n; i++) {
    dp[i][0] = 1; // 目标金额为 0，“无为而治”是唯一的解法
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= amount; j++) {
      // 硬币面值索引 要减 1
      if (j - coins[i - 1] >= 0) {
        // 有足够的空间：可以选择装入 或者 不装
        dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]];
      } else {
        // 背包空间不足
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[n][amount];
};
// @lc code=end
