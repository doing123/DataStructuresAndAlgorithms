/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let res = []
  let map = {}
  for (let i = 0; i < strs.length; i++) {
    let str = strs[i].split('').sort().join('')
    if (!map[str]) map[str] = []
    map[str].push(strs[i])
  }

  for (let key in map) {
    res.push(map[key])
  }

  return res
}
