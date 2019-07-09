/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let vector = matrix.length
  // 上下垂直翻转
  for (let i = 0, len = vector / 2; i < len; i++) {
    // 置换上半部分每一列的每一项元素
    for (let j = 0, tmp; j < vector; j++) {
      tmp = matrix[i][j]
      matrix[i][j] = matrix[vector - i - 1][j]
      matrix[vector - i - 1][j] = tmp
    }
  }
  // 对角线翻转
  for (let i = 0; i < vector; i++) {
    for (let j = 0, tmp; j < i; j++) {
      tmp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = tmp
    }
  }

  return matrix
}
