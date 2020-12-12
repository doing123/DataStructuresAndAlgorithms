/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  // 3.动态规划
  let m = text1.length;
  let n = text2.length;
  let dp = Array.from({ length: m + 1 }, () => {
    return new Array(n + 1).fill(0); // 初始值 0 base case
  });

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 指针从 1 开始，但字符下标从 0 开始， 故减 1
      if (text1[i - 1] === text2[j - 1]) {
        // 都在 lcs 中
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        // 至少有一个不在 lcs 中
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }

  return dp[m][n];
};
// @lc code=end
