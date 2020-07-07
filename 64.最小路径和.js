/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let m = grid.length;
  if (m == 0) return 0;
  let n = grid[0].length;
  const dp = Array.apply(null, { length: m }).map(() => {
    return Array(n).fill(0);
  });
  dp[0][0] = grid[0][0];
  // 初始化第一行
  for (let i = 1; i < n; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }
  // 初始化第一列
  for (let j = 1; j < m; j++) {
    dp[j][0] = dp[j - 1][0] + grid[j][0];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return dp[m - 1][n - 1];
};

// @lc code=end
