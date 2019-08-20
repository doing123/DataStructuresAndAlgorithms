/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let count = 0
  let map = new Map()
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1)
    } else {
      map.set(s[i], 1)
    }
  }
  if (map.size === 1) {
    return s.length
  }
  let flag = false
  for (let val of map.values()) {
    if (val > 1) {
      if (val % 2 === 1) flag = true
      count += Math.floor(val / 2) * 2
    } else if (!flag) {
      flag = true
    }
  }
  if (flag) count++

  return count
}

// longestPalindrome('abccccdd')
