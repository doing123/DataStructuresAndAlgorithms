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
  let res = []
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

  return res
  // TODO: 2.二维数组实现
}

// commonChars(['bella', 'label', 'roller'])
