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
  let stack = []
  let arr = path.split('/')
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i]
    if (stack.length && tmp === '..') {
      stack.pop()
    } else if (tmp !== '.' && tmp !== '' && tmp !== '..') {
      stack.push(tmp)
    }
  }
  return `/${stack.join('/')}`
}
