/*
 * @lc app=leetcode id=633 lang=javascript
 *
 * [633] Sum of Square Numbers
 */
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  /* for (let i = Math.floor(Math.sqrt(c)); i >= 0; i--) {
    if (i * i == c) return true
    let d = c - i * i
    let tmp = Math.floor(Math.sqrt(d))
    if (Math.pow(tmp, 2) == d) return true
  }

  return false */

  /* const set = new Set()
  for(let i = 0; i <= Math.floor(Math.sqrt(c)); i++) {
    set.add(i * i)
    if(set.has(c - i * i)) return true
  }  

  return false  */

  let a = 0
  let b = Math.floor(Math.sqrt(c))
  while (a <= b) {
    let tmp = a * a + b * b
    if (tmp == c) return true
    else if (tmp < c) a++
    else b--
  }

  return false
};

