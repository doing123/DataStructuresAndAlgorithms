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
  // 2.从底层向上层遍历
  let height = triangle.length;
  const dp = new Array(height); // 二维数组
  for (let i = 0; i < height; i++) {
    dp[i] = new Array(i + 1);
  }

  // 从后往前遍历处理：从死到生
  for (let i = height - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (i === height - 1) {
        dp[i][j] = triangle[i][j];
      } else {
        dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
      }
    }
  }
  return dp[0][0];
};
// @lc code=end
