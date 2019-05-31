/*
 * @lc app=leetcode id=896 lang=javascript
 *
 * [896] Monotonic Array
 */
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  let inc = true
  let dec = true
  for(let i = 0; i < A.length - 1; i++) {
    inc = inc && (A[i] <= A[i + 1])
    dec = dec && (A[i] >= A[i + 1])
  }

  return inc || dec
};

