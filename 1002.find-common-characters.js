/*
 * @lc app=leetcode id=1002 lang=javascript
 *
 * [1002] Find Common Characters
 */
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
  // 1.取出第一个字符，遍历之后所有
  /* let res = []
  let top = A.shift()
  top = top.split('')
  top.forEach(item => {
    let flag = true
    for (let i = 0; i < A.length; i++) {
      let index = A[i].indexOf(item)

      if (index > -1) {
        A[i] = A[i].substring(0, index) + A[i].substring(index + 1)
      } else {
        flag = false
      }
    }
    if (flag) {
      res.push(item)
    }
  })

  return res */

  // 2.二维数组实现
  let len = A.length
  let cc = []
  for (let i = 0; i < len; i++) {
    cc[i] = new Array(26).fill(0)
    for (let j = 0; j < A[i].length; j++) {
      let str = A[i][j].charCodeAt() - 97
      cc[i][str]++
    }
  }

  let res = []
  for (let i = 0; i < 26; i++) {
    let minCount = 10000
    for (let j = 0; j < len; j++) {
      minCount = Math.min(minCount, cc[j][i])
    }

    for (let j = 0; j < minCount; j++) {
      res.push(String.fromCharCode(i + 97))
    }
  }

  return res
}

// commonChars(['bella', 'label', 'roller'])
