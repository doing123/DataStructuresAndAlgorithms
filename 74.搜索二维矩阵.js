/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    const len = matrix[i].length;
    if (target <= matrix[i][len -1] && matrix[i].includes(target)) {
      return true;
    }
  }
  return false;
};
// @lc code=end
