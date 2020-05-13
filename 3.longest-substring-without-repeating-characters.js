/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let result = 0;
  let set = new Set();
  let before = 0;
  for (var i = 0, len = s.length; i < len; i++) {
    while (before < len && !set.has(s[before])) {
      set.add(s[before]);
      before++;
    }
    result = Math.max(result, set.size);
    set.delete(s[i]);
  }
  return result;
};
// @lc code=end
