/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  let len = T.length;
  let result = new Array(len);
  let stack = []; // 这里放元素索引，而不是元素
  // 调用单调栈的算法模板
  for (let i = len - 1; i >= 0; i--) {
    while (stack.length && T[stack[stack.length - 1]] <= T[i]) {
      stack.pop();
    }
    // 得到索引间距
    result[i] = stack.length ? stack[stack.length - 1] - i : 0;
    stack.push(i); // 索引入栈
  }

  return result;
};
// @lc code=end
