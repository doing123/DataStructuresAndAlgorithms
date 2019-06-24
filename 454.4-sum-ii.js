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
  // 1.
  /* let res = 0
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

  return res */

  // 2.
  let res = 0
  let len = A.length
  let map1 = {}
  let map2 = {}
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      let key1 = A[i] + B[j]
      if (!map1[key1]) {
        map1[key1] = 1
      } else {
        map1[key1]++
      }

      let key2 = C[i] + D[j]
      if (!map2[key2]) {
        map2[key2] = 1
      } else {
        map2[key2]++
      }
    }
  }

  for (let key in map1) {
    if (map2[-key]) {
      res += map2[-key] * map1[key]
    }
  }

  return res
}
