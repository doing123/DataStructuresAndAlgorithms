/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // 1.DFS 深度优先搜索 + 改变颜色
  if (!grid.length || !grid[0].length) return 0;
  let result = 0;
  let row = grid.length;
  let col = grid[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == '1') {
        helper(i, j, row, col);
        result++;
      }
    }
  }
  return result;

  function helper(i, j, row, col) {
    if (i < 0 || j < 0 || i >= row || j >= col || grid[i][j] === '0') {
      return;
    }
    grid[i][j] = '0';
    helper(i - 1, j, row, col);
    helper(i + 1, j, row, col);
    helper(i, j - 1, row, col);
    helper(i, j + 1, row, col);
  }
};
// @lc code=end
