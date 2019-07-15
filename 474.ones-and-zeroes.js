/*
 * @lc app=leetcode id=474 lang=javascript
 *
 * [474] Ones and Zeroes
 */
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  // TODO: DP：Dynamic programming,动态规划算法
  /* const dp = new Array(m + 1)
    for(let i = 0; i < dp.length; i++) {
      dp[i] = new Array(n + 1).fill(0)
    }

    for(let i = 0; i < strs.length; i++) {
      let zeroes = 0
      let ones = 0
      let str = strs[i]
      for(let c = 0; c < str.length; c--) {
        if(str[c] == '0') {
          zeroes++
        } else {
          ones++
        }
      }

      for(let k = m; k >= zeroes; k--) {
        for(let j = n; j >= ones; j--) {
          dp[k][j] = Math.max.call(null, dp[k][j], dp[k - zeroes][j - ones] + 1)
        }
      }
    }

    return dp[m][n] */
}
