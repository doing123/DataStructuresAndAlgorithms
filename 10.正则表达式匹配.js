/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  if (s == null || p == null) return false;
  let len1 = s.length,
    len2 = p.length;
  let dp = Array.apply(null, { length: len1 + 1 }).map(() => {
    return new Array(len2 + 1).fill(false);  // dp[i][j]：表示 s 的前i个字符是否与 p的前j个字符是否匹配
  });

  dp[0][0] = true;// 初始化 s、p 都为空字符串为 true
  for (let j = 2; j < len2 + 1; j++) {
    if (p[j - 1] == '*') dp[0][j] = dp[0][j - 2];
  }
  for (let i = 1; i < len1 + 1; i++) {
    for (let j = 1; j < len2 + 1; j++) {
      if (s[i - 1] == p[j - 1] || p[j - 1] == '.') {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] == '*') {
        if (s[i - 1] == p[j - 2] || p[j - 2] == '.')
          dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j];
        else dp[i][j] = dp[i][j - 2];
      }
    }
  }
  return dp[len1][len2]; // len1长度的s串 是否匹配 len2长度的p串
};
// @lc code=end
