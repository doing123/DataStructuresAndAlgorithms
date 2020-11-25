/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // 3.dp 数组的迭代解法
  const dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;

  // 外层 for 循环遍历所有状态的所有取值
  for (let i = 1; i < dp.length; i++) {
    // 内层 循环 求所有选择的最小值
    for (const coin of coins) {
      // 子问题无解
      if (i - coin < 0) continue;
      dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
    }
  }

  return dp[amount] === amount + 1 ? -1 : dp[amount];
};
// @lc code=end
