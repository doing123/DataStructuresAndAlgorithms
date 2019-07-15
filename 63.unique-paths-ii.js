/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  // 1. error:Time Limit Exceeded
  /* let m = obstacleGrid.length
  let n = obstacleGrid[0].length

  let dp = (m, n) => {
    if (obstacleGrid[m - 1][n - 1] === 1 || obstacleGrid[0][0] === 1) {
      return 0
    }
    if (m === 2 && n === 2) {
      return (obstacleGrid[1][1] === 1 || obstacleGrid[1][0] + obstacleGrid[0][1] === 2) ? 0 : (obstacleGrid[1][0] === 1 || obstacleGrid[0][1] === 1) ? 1 : 2
    } else if (m < 2 || n < 2) {
      if (m < 2) {
        return obstacleGrid[m - 1].includes(1) ? 0 : 1
      } else {
        for (let i = 0; i < m; i++) {
          if (obstacleGrid[i][0] === 1) {
            return 0
          }
        }
        return 1
      }
    } else {
      return dp(m - 1, n) + dp(m, n - 1)
    }
  }
  return dp(m, n) */

  // 2.二维数组
  /* let m = obstacleGrid.length
  let n = obstacleGrid[0].length
  if (m === 0 || n === 0 || obstacleGrid[0][0] === 1) {
    return 0
  }
  let dp = [] // (m+1)*(n+1):考虑当i或j为0时，减1可能会出错
  for (let i = 0; i <= m; i++) {
    dp[i] = Array(n + 1).fill(0)
  }
  dp[0][1] = 1
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (obstacleGrid[i - 1][j - 1] !== 0) continue
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }
  return dp[m][n] */

  // 3.一维数组 TODO:待理解
  let m = obstacleGrid.length
  let n = obstacleGrid[0].length
  if (m === 0 || n === 0 || obstacleGrid[0][0] === 1) {
    return 0
  }
  let dp = Array(n).fill(0)
  dp[0] = 1
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[j] = 0
      } else if (j > 0) {
        dp[j] += dp[j - 1]
      }
    }
  }
  return dp[n - 1]
}

// uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]])
