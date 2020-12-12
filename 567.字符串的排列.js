/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let countMap = new Map();
  for (let c of s1) {
    if (!countMap.has(c)) countMap.set(c, 0);
    countMap.set(c, countMap.get(c) + 1);
  }
  let window = {};

  let count = 0; // 计数窗口已经包含的可用字符的个数，重复的字符计数 一次
  let left = 0;
  let right = 0;
  let len1 = s1.length;
  let len2 = s2.length;
  while (right <= len2) {
    let c = s2[right]; // 要加入窗口中的字符
    right++;
    // 是 s1 所需要的字符，更新窗口的数据
    if (countMap.has(c)) {
      if (!window[c]) window[c] = 0;
      window[c]++;
      if (window[c] === countMap.get(c)) count++; // 为了重复的字符计数 一次
    }

    // 判断是否收缩左侧窗口，即 达到长度要求
    while (right - left >= len1) {
      // 是否是合法的字符
      if (count === countMap.size) {
        return true;
      }

      let c = s2[left];
      left++;
      // 是 s1 所需要的字符，更新窗口的数据
      if (countMap.has(c)) {
        if (window[c] === countMap.get(c)) count--;
        window[c]--;
      }
    }
  }

  return false;
};
// @lc code=end
