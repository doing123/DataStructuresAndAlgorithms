/*
 * @lc app=leetcode id=30 lang=javascript
 *
 * [30] Substring with Concatenation of All Words
 */
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  if (!s.length || !words.length) return []

  let res = []
  let n = words.length
  let len = words[0].length
  let map = new Map()
  for (let i = 0; i < n; i++) {
    if (map.get(words[i])) {
      map.set(words[i], map.get(words[i]) + 1)
    } else {
      map.set(words[i], 1)
    }
  }

  for (let i = 0; i <= s.length - n * len; i++) {
    let m = new Map()
    let j = 0
    for (j = 0; j < n; j++) {
      let str = s.substr(i + j * len, len)
      if (!map.get(str)) break
      if (m.get(str)) {
        m.set(str, m.get(str) + 1)
      } else {
        m.set(str, 1)
      }
      if (m.get(str) > map.get(str)) break
    }
    if (j === n) res.push(i)
  }

  return res
}

// findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'good'])
