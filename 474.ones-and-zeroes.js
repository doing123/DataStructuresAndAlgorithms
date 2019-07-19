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
  // 二维的 DP 数组
  // dp[i][j]：表示有 i 个0和 j 个1时能组成的最多字符串个数
  const dp = new Array(m + 1)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n + 1).fill(0)
  }

  for (let i = 0; i < strs.length; i++) {
    let zeroes = 0
    let ones = 0
    let str = strs[i]
    for (let c = 0; c < str.length; c++) {
      if (str[c] === '0') {
        zeroes++
      } else {
        ones++
      }
    }

    for (let k = m; k >= zeroes; k--) {
      for (let j = n; j >= ones; j--) {
        // dp[i - zeros][j - ones]表示当前的i和j减去zeros和ones之前能拼成字符串的个数，
        // 那么加上当前的zeros和ones就是当前dp[i][j]可以达到的个数，我们跟其原有数值对比取较大值即可
        dp[k][j] = Math.max.call(null, dp[k][j], dp[k - zeroes][j - ones] + 1)
      }
    }
  }

  return dp[m][n]
}

findMaxForm(['10', '0001', '111001', '1', '0'], 5, 3)
