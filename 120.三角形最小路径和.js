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

  // 2.从底层向上层遍历
  let height = triangle.length;
  let dp = new Array(height);
  for (let i = 0; i < height; i++) {
    let width = triangle[i];
    dp[i] = new Array(width);
  }

  // 从倒数第二层开始
  for (let i = height - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (i == height - 1) {
        dp[i][j] = triangle[i][j];
      } else {
        dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
      }
    }
  }

  return dp[0][0];
};
// @lc code=end
