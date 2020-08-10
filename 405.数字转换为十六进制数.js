/*
 * @lc app=leetcode.cn id=405 lang=javascript
 *
 * [405] 数字转换为十六进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  let result = [];
  var map = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ];
  if (num === 0) return '0';
  while (num != 0) {
    result.push(map[num & 0b1111]); // 0b1111 = 15, 即先取余数
    num >>>= 4; // 除以 16 取整
  }
  return result.reverse().join('');
};
// @lc code=end
