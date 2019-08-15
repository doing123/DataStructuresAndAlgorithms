/*
 * @lc app=leetcode id=941 lang=javascript
 *
 * [941] Valid Mountain Array
 */
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
  let len = A.length
  if (len < 3) return false

  // 只有一个山峰，用双指针，分别从两边往中间爬，判断最终两个指针是否指向同一个值而且在范围内
  let head = 0
  let tail = len - 1
  while (head + 1 < len && A[head + 1] > A[head]) {
    head++
  }
  while (tail - 1 >= 0 && A[tail - 1] > A[tail]) {
    tail--
  }

  return head === tail && head > 0 && tail < len - 1
}
