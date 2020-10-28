/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  // 1.dp
  let m = word1.length;
  let n = word2.length;
  const dp = Array.from({ length: m + 1 }, () => {
    return new Array(n + 1);
  });
  for (let i = 0; i < m + 1; i++) {
    dp[i][0] = i;
  }
  for (let i = 0; i < n + 1; i++) {
    dp[0][i] = i;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // dp[i][j] word1前i个字符、word2前j个字符相等时最小步数
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }

  return dp[m][n];
};
// @lc code=end
