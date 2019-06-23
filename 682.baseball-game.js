/*
 * @lc app=leetcode id=682 lang=javascript
 *
 * [682] Baseball Game
 */
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let stack = []
  ops.forEach(item => {
    switch (item) {
      case 'C':
        if (stack.length) {
          stack.pop()
        }
        break
      case 'D':
        let pre = stack.pop()
        stack.push(pre, pre * 2)
        break
      case '+':
        let pre1 = stack.pop()
        let pre2 = stack.pop()
        stack.push(pre2, pre1, pre2 + pre1)
        break
      default:
        stack.push(+item)
        break
    }
  })

  return stack.reduce((total, item) => {
    return total + item
  })
}
