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
  // 2.滑动窗口，使用 set 效率更高
  let window = {};
  let result = 0;
  let left = 0;
  let right = 0;
  let len = s.length;
  while (right < len) {
    let c = s[right];
    right++;
    // 更新窗口数据
    if (!window[c]) window[c] = 0;
    window[c]++;

    // 判断收缩窗口
    while (window[c] > 1) {
      let d = s[left];
      left++;
      // 更新窗口数据
      window[d]--;
    }

    result = Math.max(result, right - left);
  }

  return result;
};
// @lc code=end
