/*
 * @lc app=leetcode id=71 lang=javascript
 *
 * [71] Simplify Path
 */
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  // 1.利用栈：/ 分割成数组
  /* let stack = []
  let arr = path.split('/')
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i]
    if (stack.length && tmp === '..') {
      stack.pop()
    } else if (tmp !== '.' && tmp !== '' && tmp !== '..') {
      stack.push(tmp)
    }
  }
  return `/${stack.join('/')}` */

  // 2.单指针遍历
  let stack = []
  let i = 0
  while (i < path.length) {
    while (path[i] === '/' && i < path.length) {
      i++
    }
    if (i === path.length) break

    let start = i
    while (path[i] !== '/' && i < path.length) {
      i++
    }
    let end = i
    // substring：提取两个指定索引之间的字符。 同 slice
    // substr：从起始索引提取指定数目的字符
    let str = path.substring(start, end)
    if (str === '..') {
      if (stack.length) stack.pop()
    } else if (str !== '.') {
      stack.push(str)
    }
  }
  return '/' + stack.join('/')
}
