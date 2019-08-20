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
  // 1.map
  /* let count = 0
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
  let flag = 0
  for (let val of map.values()) {
    if (val % 2 === 0) {
      count += val
    } else {
      count += val - 1
      flag = 1
    }
  }

  return count + flag */

  // 2.a到z是从97到122，A到Z是从65到90，中间相隔58个数
  let arr = new Array(58).fill(0)
  for (let i = 0; i < s.length; i++) {
    arr[s[i].charCodeAt() - 65]++
  }
  let count = 0
  let single = 0
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] % 2 === 0) {
      count += arr[j]
    } else {
      count += arr[j] - 1
      single = 1
    }
  }

  return count + single
}

// longestPalindrome('AAAAAA')
