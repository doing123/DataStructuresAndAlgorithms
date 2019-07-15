/*
 * @lc app=leetcode id=190 lang=javascript
 *
 * [190] Reverse Bits
 */
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

// https://www.cnblogs.com/grandyang/p/4321355.html
var reverseBits = function (n) {
  let res = 0
  let flag = 1 // 00...00001
  for (let i = 0; i < 32; i++) {
    res = res * 2 + (flag & n) // 按位与: 如果对应的位都为1，那么结果就是1， 如果任意一个位是0 则结果就是0。
    // res = res << 1 + (flag & n) // TODO:不对？？？
    n = n >> 1
  }

  return res
}
