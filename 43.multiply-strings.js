/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let res = ''
  let m = num1.length
  let n = num2.length
  let val = Array(m + n).fill(0)
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      let mul = (num1[i] - 0) * (num2[j] - 0)
      let p1 = i + j
      let p2 = i + j + 1
      let sum = mul + val[p2]
      val[p1] += Math.floor(sum / 10)
      val[p2] = sum % 10
    }
  }

  for (let i = 0; i < val.length; i++) {
    if (res.length || val[i] !== 0) {
      res += val[i].toString()
    }
  }
  return res.length ? res : '0'
}

// multiply('123', '456')
