/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let max = 0;
  let row = grid.length;
  let col = grid[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 0) continue;
      max = Math.max(max, calArea(grid, i, j, row, col));
    }
  }
  return max;
};

function calArea(grid, i, j, row, col) {
  if (i < 0 || i >= row || j < 0 || j >= col || grid[i][j] === 0) return 0;
  let count = 1;
  grid[i][j] = 0;
  count += calArea(grid, i - 1, j, row, col);
  count += calArea(grid, i + 1, j, row, col);
  count += calArea(grid, i, j - 1, row, col);
  count += calArea(grid, i, j + 1, row, col);
  return count;
}
// @lc code=end
