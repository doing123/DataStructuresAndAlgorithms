/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  // 1.逆波兰式  // TODO 最后一个用例不通
  let stack = []; // 运算符
  let queue = []; // 数字
  let i = 0;
  let len = s.length;
  let result = 0;

  while (i < len) {
    let c = s.charAt(i);
    if (c === ' ') i++;
    else if (['+', '-'].includes(c)) {
      // 栈顶元素为平级，先弹出再入栈
      while (
        stack.length &&
        ['*', '/', '+', '-'].includes(stack[stack.length - 1])
      ) {
        queue.push(stack.pop());
      }
      stack.push(c);
      i++;
    } else if (['*', '/'].includes(c)) {
      // 栈顶元素为平级，先弹出再入栈
      while (stack.length && ['*', '/'].includes(stack[stack.length - 1])) {
        queue.push(stack.pop());
      }
      stack.push(c);
      i++;
    } else if (c === '(') {
      stack.push(c);
      i++;
    } else if (c === ')') {
      // 弹出栈顶元素，直到 '('
      while (stack.length && stack[stack.length - 1] !== '(') {
        queue.push(stack.pop());
      }
      stack.pop();
      i++;
    } else {
      let tmp = c;
      i++;
      while (i < len && isNumber(s.charAt(i))) {
        tmp += s.charAt(i);
        i++;
      }
      queue.push(Number(tmp));
    }
  }

  while (stack.length) {
    queue.push(stack.pop())
  }

  // 第二步，计算
  let evalStack = [];
  while (queue.length) {
    let item = queue.shift();
    switch (item) {
      case '+':
        result = evalStack.pop() + evalStack.pop();
        break;
      case '*':
        result = evalStack.pop() * evalStack.pop();
        break;
      case '-':
        let last = evalStack.pop();
        result = evalStack.pop() - last;
        break;
      case '/':
        let last2 = evalStack.pop();
        result = parseInt(evalStack.pop() / last2);
        break;
      default:
        result = item;
        break;
    }

    evalStack.push(result);
  }

  return result;

  function isNumber (c) {
    c = Number(c);
    return typeof c === 'number' && !isNaN(c);
  }
};

// calculate(' 3/2 ');
// @lc code=end
