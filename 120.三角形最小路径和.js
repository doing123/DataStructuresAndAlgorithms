/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  // 1.递归，42/43，一个用例不通过
  // let len = triangle.length;
  // let min = Number.MAX_SAFE_INTEGER;
  // recursive(triangle[0][0], 0, 1); // 初始和为0，从第一行开始
  // return min;
  // // 之前和的累加、列、行
  // function recursive(sum, col, row) {
  //   if (row == len) {
  //     min = Math.min(min, sum);
  //     return;
  //   }
  //   recursive(sum + triangle[row][col], col, row + 1);
  //   recursive(sum + triangle[row][col + 1], col + 1, row + 1);
  // }
};
// @lc code=end
