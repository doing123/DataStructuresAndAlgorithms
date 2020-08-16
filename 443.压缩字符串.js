/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  for (let i = 0; i < chars.length; ) {
    let j = i + 1;
    while (j < chars.length && chars[j] == chars[i]) {
      j++;
    }
    let distance = j - i;
    let arr = distance.toString().split('');
    if (distance > 1) {
      chars.splice(i + 1, distance - 1, ...arr);
      i += arr.length;
    }
    i++;
  }

  return chars.length;
};
// @lc code=end
