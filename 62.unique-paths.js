/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // 动态规划：Dynamic Programming
  // 二维数组：dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
  // 一维数组，一行行的刷新
  let dp = Array(n).fill(1)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[j] += dp[j - 1]
    }
  }

  return dp[n - 1]
}
