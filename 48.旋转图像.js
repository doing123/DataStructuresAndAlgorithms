/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let len = matrix.length;
  // 上下垂直翻转
  for (let i = 0, tmp; i < len / 2; i++) {
    for (let j = 0; j < len; j++) {
      tmp = matrix[i][j];
      matrix[i][j] = matrix[len - i - 1][j];
      matrix[len - i - 1][j] = tmp;
    }
  }

  // 对角线翻转
  for (let i = 0, tmp; i < len; i++) {
    for (let j = 0; j < i; j++) {
      tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
    }
  }
};
// @lc code=end
