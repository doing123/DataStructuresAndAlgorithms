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
      if (grid[i][j] === '1') {
        result++;
        helper(i, j);
      }
    }
  }
  return result;

  function helper (i, j) {
    if (i < 0 || i >= row || j < 0 || j >= col || grid[i][j] === '0') {
      return;
    }
    grid[i][j] = '0';
    helper(i - 1, j);
    helper(i + 1, j);
    helper(i, j - 1);
    helper(i, j + 1);
  }
};
// @lc code=end
