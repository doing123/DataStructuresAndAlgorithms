/*
 * @lc app=leetcode.cn id=808 lang=javascript
 *
 * [808] 分汤
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var soupServings = function (N) {
  // TODO 理解
  N = Math.floor(N / 25) + (N % 25 > 0 ? 1 : 0);
  if (N >= 500) return 1;

  const dp = Array.from(new Array(N + 1), () => new Array(N + 1).fill(0));

  for (let i = 0; i <= N; i++) {
    for (let j = 0; j <= N; j++) {
      let ans = 0;
      if (i == 0) ans = 1; // 三种临界条件
      if (i == 0 && j == 0) ans = 0.5;
      if (i > 0 && j > 0) {
        ans =
          0.25 *
          (dp[M(i - 4)][j] +
            dp[M(i - 3)][M(j - 1)] +
            dp[M(i - 2)][M(j - 2)] +
            dp[M(i - 1)][M(j - 3)]);
      }
      dp[i][j] = ans;
    }
  }

  return dp[N][N];

  function M(x) {
    return Math.max(0, x);
  }
};
// @lc code=end
