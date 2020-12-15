/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    let s1 = palindrome(s, i, i);
    let s2 = palindrome(s, i, i + 1);
    result = result.length > s1.length ? result : s1;
    result = result.length > s2.length ? result : s2;
  }
  return result;

  function palindrome (s, i, j) {
    // 防止越界
    while (i >= 0 && j < s.length && s[i] === s[j]) {
      i--; // 向两边展开
      j++;
    }
    return s.substr(i + 1, j - i - 1);
  }
};
// @lc code=end
