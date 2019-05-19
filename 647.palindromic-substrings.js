/*
 * @lc app=leetcode id=647 lang=javascript
 *
 * [647] Palindromic Substrings
 */
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  if(!s) return 0
  let result = 0

  function compare(s, i, j) {
    while(i >= 0 && j < s.length && s[i] === s[j]) {
      i--
      j++
      result++
    }
  }

  for(let i = 0; i < s.length; i++) {
    compare(s, i, i)
    compare(s, i, i + 1)
  }
  
  return result
};

