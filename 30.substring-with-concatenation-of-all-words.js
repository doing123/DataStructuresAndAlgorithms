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
  let result = []
  let len = words.length
  let recursive = (r, _arr) => {
    if (r.length === len) {
      result.push(r)
    } else {
      _arr.forEach((item, index) => {
        let tmp = [].concat(_arr)
        tmp.splice(index, 1)
        recursive(r.concat(item), tmp)
      })
    }
  }
  recursive([], words)

  return result.map(item => {
    return s.indexOf(item.join(''))
  }).filter(item => item !== -1).sort()
}
