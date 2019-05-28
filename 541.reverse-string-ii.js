/*
 * @lc app=leetcode id=541 lang=javascript
 *
 * [541] Reverse String II
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  let len = s.length
  let n = Math.floor(len / k)
  for(let i = 0; i <= n; i++) {
    if(i % 2 === 0) {
      if(i * k + k < len) {
        let str = s.substring(i * k, i * k + k)
        str = str.split('').reverse().join('')
        s = s.substring(0, i * k) + str + s.substr(i * k + k)
      } else {
        let str = s.substring(i * k)
        str = str.split('').reverse().join('')
        s = s.substring(0, i * k) + str
      }
    }
  }

  return s
};

