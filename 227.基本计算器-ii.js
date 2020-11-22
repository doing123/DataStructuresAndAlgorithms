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
  // 1.利用队列
  let queue = [];
  let n = '';
  let sign = '+';
  for (let i = 0; i <= s.length; i++) {
    if (s[i] === ' ') continue;
    if (/\D/.test(s[i])) {
      switch (sign) {
        case '+':
          queue.push(n);
          break;
        case '-':
          queue.push(-n);
          break;
        case '*':
          queue.push(queue.pop() * n);
          break;
        case '/':
          queue.push(queue.pop() / n | 0); // 取整
          break;
        default:
          break;
      }
      sign = s[i];
      n = '';
    } else {
      n += s[i];
    }
  }

  return queue.reduce((prev, val) => prev + (val | 0), 0)
};

// @lc code=end
