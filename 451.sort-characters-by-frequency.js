/*
 * @lc app=leetcode id=451 lang=javascript
 *
 * [451] Sort Characters By Frequency
 */
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let map = {}
  for (let i = 0; i < s.length; i++) {
    let str = s[i]
    if (map[str]) {
      map[str]++
    } else {
      map[str] = 1
    }
  }

  let arr = Object.values(map).sort((a, b) => b - a)
  let result = ''
  arr.forEach(item => {
    Object.keys(map).forEach(k => {
      if (map[k] === item) {
        result += k.repeat(item)
        delete map[k]
      }
    })
  })

  return result
}

frequencySort('tree')
