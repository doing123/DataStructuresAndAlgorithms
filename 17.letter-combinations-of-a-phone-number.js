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

  function combinations (arr) {
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
}
