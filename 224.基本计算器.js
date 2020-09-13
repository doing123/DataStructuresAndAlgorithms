/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  // 2.stack
  let stack = [];
  let len = s.length;
  let sign = 1;
  let i = 0;
  let sum = 0;
  while (i < len) {
    let c = s.charAt(i);
    if (c === ' ') i++;
    else if (c === '-') {
      sign = -1;
      i++;
    } else if (c === '+') {
      sign = 1;
      i++;
    } else if (c === '(') {
      stack.push(sum, sign);
      sum = 0;
      sign = 1;
      i++;
    } else if (c === ')') {
      sum = sum * stack.pop() + stack.pop();
      i++;
    } else {
      let tmp = c;
      i++;
      while (i < len && isNumber(s.charAt(i))) {
        tmp += s.charAt(i);
        i++;
      }
      sum += Number(tmp) * sign;
    }
  }

  return sum;

  function isNumber(c) {
    c = Number(c);
    return typeof c === 'number' && !isNaN(c);
  }
};

// calculate("2 + (10 / 2) * 2");
// @lc code=end
