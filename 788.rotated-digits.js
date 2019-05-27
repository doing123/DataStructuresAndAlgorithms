/*
 * @lc app=leetcode id=788 lang=javascript
 *
 * [788] Rotated Digits
 */
/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function (N) {
  let res = 0
  for (let i = 1; i <= N; i++) {
    if (check(String(i))) ++res
  }

  return res

  function check(k) {
    let flag = false
    for (let i = 0; i < k.length; i++) {
      let str = k[i]
      if (str == '3' || str == '4' || str == '7') return false
      if (str == '2' || str == '5' || str == '6' || str == '9') flag = true
    }
    return flag
  }
};

