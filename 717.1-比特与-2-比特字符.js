/*
 * @lc app=leetcode.cn id=717 lang=javascript
 *
 * [717] 1比特与2比特字符
 */

// @lc code=start
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  // 当成个队列, 碰到 0, 就出列一个, 碰到1就出列两个
  while (bits.length > 1) {
    if (bits[0] === 1) {
      bits.shift();
      bits.shift();
    } else {
      bits.shift();
    }
  }
  return bits.length === 1;
};
// @lc code=end
