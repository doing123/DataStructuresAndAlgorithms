/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // 1.二维数组转为一维数组 超时
  let arr = matrix.flat();
  return arr.indexOf(target) > -1 ? true : false;
};
// @lc code=end
