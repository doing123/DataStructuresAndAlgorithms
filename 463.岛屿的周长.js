/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        result += isValid(i, j + 1, grid.length, grid[0].length);
        result += isValid(i, j - 1, grid.length, grid[0].length);
        result += isValid(i + 1, j, grid.length, grid[0].length);
        result += isValid(i - 1, j, grid.length, grid[0].length);
      }
    }
  }

  return result;

  function isValid(r, c, row, col) {
    if (r < 0 || r >= row || c < 0 || c >= col) return 1; // 数组越界
    if (grid[r][c] == 1) return 0; // 两块相邻的岛屿不加算周长
    return 1;
  }
};
// @lc code=end
