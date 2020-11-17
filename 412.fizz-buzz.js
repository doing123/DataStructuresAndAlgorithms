/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  // 2.
  let result = [];
  for (let i = 1; i <= n; i++) {
    let str = '';
    if (i % 3 === 0) {
      str += 'Fizz';
    }
    if (i % 5 === 0) {
      str += 'Buzz';
    }
    result.push(str || i.toString());
  }

  return result;
};
// @lc code=end
