/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let rowSet = new Set();
  let colSet = new Set();
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] == 0) {
        rowSet.add(i);
        colSet.add(j);
      }
    }
  }

  // 优化
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (rowSet.has(i) || colSet.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
};
// @lc code=end
