/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  for (const token of tokens) {
    if (['+', '-', '*', '/'].includes(token)) {
      let last = null;
      switch (token) {
        case '+':
          stack.push(stack.pop() + stack.pop());
          break;
        case '-':
          last = stack.pop();
          stack.push(stack.pop() - last);
          break;
        case '*':
          stack.push(stack.pop() * stack.pop());
          break;
        case '/':
          last = stack.pop();
          stack.push((stack.pop() / last) | 0);
          break;
        default:
          break;
      }
    } else {
      stack.push(+token);
    }
  }

  return stack.pop();
};
// @lc code=end
