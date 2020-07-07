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

  // 不另生成 dp[][]数组
  // 初始化第一行
  for (let i = 1; i < n; i++) {
    grid[0][i] += grid[0][i - 1];
  }
  // 初始化第一列
  for (let j = 1; j < m; j++) {
    grid[j][0] += grid[j - 1][0];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }

  return grid[m - 1][n - 1];
};

// @lc code=end
