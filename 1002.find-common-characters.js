/*
 * @lc app=leetcode id=1002 lang=javascript
 *
 * [1002] Find Common Characters
 */
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  let arr = []
  for(let i = 0; i < A.length; i++) {
    let set = new Set(A[i].split(''))
    set.forEach((val, key) => {
      let index = val.charCodeAt() - 97
      if(arr[index] == undefined) {
        arr[index] = 0
      }
      arr[index]++
    })
  }

  let res = []
  arr.forEach((item, i) => {
    if(item == A.length) res.push(String.fromCharCode(i + 97))
  })

  // todo: 字符串中重复的字符
  

  return res

  // TODO: 2.二维数组实现
};

