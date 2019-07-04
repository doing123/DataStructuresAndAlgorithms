/*
 * @lc app=leetcode id=621 lang=javascript
 *
 * [621] Task Scheduler
 */
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  let arr = Array(26).fill(0)
  for (let i = 0; i < tasks.length; i++) {
    // 'A'.charCodeAt() // 65
    arr[tasks[i].charCodeAt() - 65]++
  }
  arr.sort((a, b) => a - b)
  let i = 25
  let mx = arr[25]
  let len = tasks.length
  while (i >= 0 && arr[i] === mx) i--
  return Math.max(len, (mx - 1) * (n + 1) + 25 - i)
}
