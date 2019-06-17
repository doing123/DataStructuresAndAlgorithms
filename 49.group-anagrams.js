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
  /* let res = []
  let map = {}
  for (let i = 0; i < strs.length; i++) {
    let str = strs[i].split('').sort().join('')
    if (!map[str]) map[str] = []
    map[str].push(strs[i])
  }

  for (let key in map) {
    res.push(map[key])
  }

  return res */

  let res = []
  let map = {}
  for (let i = 0; i < strs.length; i++) {
    let arr = new Array(26).fill(0)
    let str = strs[i]
    let tmp = ''
    for (let c = 0; c < str.length; c++) {
      arr[str[c].charCodeAt() - 97]++
    }
    for (let j = 0; j < arr.length; j++) {
      tmp += arr[j]
    }
    if (!map[tmp]) map[tmp] = []
    map[tmp].push(str)
  }

  for (let key in map) {
    res.push(map[key])
  }

  return res
}
