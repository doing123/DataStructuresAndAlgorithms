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
  // 3.并查集 TODO 没吃透
  if (!grid.length || !grid[0].length) return 0;
  let row = grid.length;
  let col = grid[0].length;
  let x = [1, -1, 0, 0];
  let y = [0, 0, 1, -1];
  let result = 0;
  let parents = new Array(row * col);

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === '1') {
        result++;
        parents[i * col + j] = i * col + j; // parent指向自身
      }
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === '1') {
        for (let k = 0; k < 4; k++) {
          let m = i + x[k];
          let n = j + y[k];
          if (m >= 0 && m < row && n >= 0 && n < col && grid[m][n] === '1') {
            union(i * col + j, m * col + n);
          }
        }
      }
    }
  }

  return result;

  function union (p, q) {
    let rootP = find(p);
    let rootQ = find(q);
    if (rootQ === rootP) return;
    parents[rootP] = rootQ;
    result--;
  }

  function find (i) {
    while (i !== parents[i]) {
      parents[i] = parents[parents[i]];
      i = parents[i];
    }
    return i;
  }
};
// @lc code=end
