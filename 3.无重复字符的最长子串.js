/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let fast = 0; // 快指针
  let set = new Set();
  let result = 0;
  for (let i = 0, len = s.length; i < len; i++) {
    while (fast < len && !set.has(s[fast])) {
      set.add(s[fast]);
      fast++;
    }
    result = Math.max(result, set.size);
    set.delete(s[i]);
  }

  return result;
};
// @lc code=end
