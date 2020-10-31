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
  // 1.BFS 广度优先搜索 + 改变颜色
  if (!grid.length || !grid[0].length) return 0;
  let result = 0;
  let row = grid.length;
  let col = grid[0].length;
  let x = [1, -1, 0, 0];
  let y = [0, 0, 1, -1];
  let visited = new Set();
  let queue = [];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === '1' && !visited.has(`${i},${j}`)) {
        result++;
        queue.push([i, j]);
      }

      while (queue.length) {
        const [i, j] = queue.shift();
        if (
          i < 0 ||
          i >= row ||
          j < 0 ||
          j >= col ||
          grid[i][j] === '0' ||
          visited.has(`${i},${j}`)
        ) {
          continue;
        }
        visited.add(`${i},${j}`);
        for (let k = 0; k < 4; k++) {
          queue.push([i + x[k], j + y[k]]);
        }
      }
    }
  }
  return result;
};
// @lc code=end
