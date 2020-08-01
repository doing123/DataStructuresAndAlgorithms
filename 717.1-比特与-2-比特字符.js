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
  // 只与最后一个元素0的前面的连续1的个数有关系。
  let last1Count = 0;
  for (let i = bits.length - 2; i >= 0; i--) {
    if (bits[i] === 1) {
      last1Count++;
    } else {
      break;
    }
  }
  return last1Count % 2 === 0;
};
// @lc code=end
