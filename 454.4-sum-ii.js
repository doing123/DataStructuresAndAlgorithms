/*
 * @lc app=leetcode id=454 lang=javascript
 *
 * [454] 4Sum II
 */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
  let res = 0
  let map = {}
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      let key = A[i] + B[j]
      if (!map[key]) {
        map[key] = 1
      } else {
        map[key]++
      }
    }
  }

  for (let i = 0; i < C.length; i++) {
    for (let j = 0; j < D.length; j++) {
      let target = -1 * (C[i] + D[j])
      if (map[target]) {
        res += map[target]
      }
    }
  }

  return res
}

/* let A = [1, 2]
let B = [-2, -1]
let C = [-1, 2]
let D = [0, 2]
fourSumCount(A, B, C, D) */
