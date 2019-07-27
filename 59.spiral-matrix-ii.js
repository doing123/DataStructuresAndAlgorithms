/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let res = Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    res[i] = []
  }
  let up = 0
  let down = n - 1
  let left = 0
  let right = n - 1
  let val = 1
  while (true) {
    for (let j = left; j <= right; j++) {
      res[up][j] = val++
    }
    if (++up > down) break

    for (let i = up; i <= down; i++) {
      res[i][right] = val++
    }
    if (--right < left) break

    for (let j = right; j >= left; j--) {
      res[down][j] = val++
    }
    if (--down < up) break

    for (let i = down; i >= up; i--) {
      res[i][left] = val++
    }
    if (++left > right) break
  }

  return res
}
