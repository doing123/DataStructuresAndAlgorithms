/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let start = 0;
  let end = 0;
  let max = 0;
  for (let i = 0, len = s.length; i < len; i++) {
    let j = i + 1;
    let len1 = extendStr(s, i, i);
    let len2 = extendStr(s, i, j);
    max = Math.max(len1, len2);
    if (max > end - start) {
      start = i - Math.floor((max - 1) / 2);
      end = i + Math.floor(max / 2);
    }
  }
  return s.substring(start, end + 1);

  function extendStr(s, left, right) {
    while(left >= 0 && right < s.length && s[left] == s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }
};
// @lc code=end
