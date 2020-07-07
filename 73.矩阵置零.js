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
  // 进一步优化，原地修改，不消耗额外的空间
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        // 列
        for (let k = 0; k < rows; k++) {
          if (matrix[k][j] !== 0) {
            matrix[k][j] = false;
          }
        }
        // 行
        for (let k = 0; k < cols; k++) {
          if (matrix[i][k] !== 0) {
            matrix[i][k] = false;
          }
        }
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === false) {
        matrix[i][j] == 0;
      }
    }
  }
};
// @lc code=end
