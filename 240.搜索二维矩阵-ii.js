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
  // 2.二分查找
  for (item of matrix) {
    if (item[0] > target) return false;
    let left = 0;
    let right = item.length - 1;
    while (left <= right) {
      let mid = (left + right) >>> 1;
      if (item[mid] === target) return true;
      if (item[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return false;
};
// @lc code=end
