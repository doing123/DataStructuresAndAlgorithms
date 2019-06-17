/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  // 1.高贵的回溯，递归
  /* const dict = {}
  dict['2'] = ['a', 'b', 'c']
  dict['3'] = ['d', 'e', 'f']
  dict['4'] = ['g', 'h', 'i']
  dict['5'] = ['j', 'k', 'l']
  dict['6'] = ['m', 'n', 'o']
  dict['7'] = ['p', 'q', 'r', 's']
  dict['8'] = ['t', 'u', 'v']
  dict['9'] = ['w', 'x', 'y', 'z']

  let target = []
  for (let i = 0; i < digits.length; i++) {
    target.push(dict[digits[i]])
  }

  return combinations(target)

  function combinations (arr) { // 从后往前合并
    let newArr = arr.slice(0)
    if (newArr.length === 0) {
      return []
    } else {
      let res = []
      const top = newArr.shift()
      const ret = combinations(newArr)
      if (ret.length === 0) {
        res = top
      } else {
        for (let i = 0; i < top.length; i++) {
          for (let j = 0; j < ret.length; j++) {
            res.push(top[i] + ret[j])
          }
        }
      }

      return res
    }
  } */

  // 2.递归
  /* if (digits.length === 0) return []
  let res = []
  let dict = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  letterCombinationsDFS(digits, dict, 0, '', res)
  return res

  function letterCombinationsDFS (digits, dict, level, out, res) {
    if (level === digits.length) {
      res.push(out)
      return
    }
    let str = dict[digits[level] - 0]
    for (let i = 0; i < str.length; i++) {
      letterCombinationsDFS(digits, dict, level + 1, out + str[i], res)
    }
  } */

  // 3.迭代 iterative
  if (digits.length === 0) return []
  let res = ['']
  let dict = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  for (let i = 0; i < digits.length; i++) {
    let arr = []
    let str = dict[digits[i] - 0]
    for (let j = 0; j < str.length; j++) {
      for (let k = 0; k < res.length; k++) {
        arr.push(res[k] + str[j])
      }
    }
    res = arr
  }

  return res
}
