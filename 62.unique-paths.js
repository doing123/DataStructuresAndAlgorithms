/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // 1.动态规划：Dynamic Programming
  // 二维数组：dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
  // 一维数组，一行行的刷新
  /* let dp = Array(n).fill(1)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[j] += dp[j - 1]
    }
  }

  return dp[n - 1] */

  // 2.数学组合的解法：机器人总共走了m + n - 2步，其中m - 1步向右走，n - 1步向下走，
  // 那么总共不同的方法个数就相当于在步数里面m - 1和n - 1中较小的那个数的取法，实际上是一道组合数的问题
  // ???
  let num = 1
  let denom = 1
  let small = m > n ? n : m
  for (let i = 1; i < small; i++) {
    num *= m + n - 1 - i
    denom *= i
  }
  return num / denom

  // 3.动态规划：递归  Time Limit Exceeded
  /* return helper(1, 1, m, n)

  function helper (row, col, m, n) {
    if (row === m || col === n) {
      return 1
    }
    if (row > m || col > n) {
      return 0
    }
    return helper(row + 1, col, m, n) + helper(row, col + 1, m, n)
  } */
}
