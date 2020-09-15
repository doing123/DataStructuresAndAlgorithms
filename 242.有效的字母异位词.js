/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // 3.数组
  if (s === t) return true;
  if (s.length !== t.length) return false;
  let sArr = Array.from(new Array(26)).fill(0);
  // let tArr = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    let index = s[i].charCodeAt() - 97;
    sArr[index] += 1;
    index = t[i].charCodeAt() - 97;
    sArr[index] -= 1;
  }
  for (item of sArr) {
    if (item !== 0) return false;
  }
  return true;
};
// @lc code=end
