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
var searchMatrix = function (matrix, target) {
  let row = matrix.length;
  if (row == 0) return false;
  let col = matrix[0].length;
  let left = 0;
  let right = row * col - 1;

  // 优化：二分查找
  let midIndex;
  let midItem;
  while (left <= right) {
    midIndex = Math.floor((right + left) / 2);
    midItem = matrix[Math.floor(midIndex / col)][midIndex % col];
    if (midItem == target) return true;
    if (midItem > target) {
      right = midIndex - 1;
    } else {
      left = midIndex + 1;
    }
  }
  return false;
};
// @lc code=end
