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
  // 1.
  /* let arr = Array(26).fill(0)
  for (let i = 0; i < tasks.length; i++) {
    // 'A'.charCodeAt() // 65
    arr[tasks[i].charCodeAt() - 65]++
  }
  arr.sort((a, b) => a - b)
  let i = 25
  let mx = arr[25]
  let len = tasks.length
  while (i >= 0 && arr[i] === mx) i--
  return Math.max(len, (mx - 1) * (n + 1) + 25 - i) */

  // 2.
  let mx = 0
  let mxCnt = 0
  let arr = Array(26).fill(0)
  for (let i = 0; i < tasks.length; i++) {
    arr[tasks[i].charCodeAt() - 65]++
    let tmp = arr[tasks[i].charCodeAt() - 65]
    if (mx === tmp) {
      mxCnt++
    } else if (mx < tmp) {
      mx = tmp
      mxCnt = 1
    }
  }
  let partCnt = mx - 1
  let partLen = n - (mxCnt - 1)
  let emptySlots = partCnt * partLen
  let taskLeft = tasks.length - mx * mxCnt
  let idles = Math.max(0, emptySlots - taskLeft)
  return tasks.length + idles
}
