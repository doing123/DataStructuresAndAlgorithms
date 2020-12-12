/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let countMap = {};
  let window = {};
  for (let c of t) {
    if (!countMap[c]) countMap[c] = 0;
    countMap[c]++;
  }

  let needCount = Object.keys(countMap).length;
  let minLen = Number.MAX_VALUE; // 求的最小子串长度
  let start = 0;
  let left = 0;
  let right = 0;
  let len = s.length;
  let count = 0; // 计数窗口中已包含的可用字符
  while (right <= len) {
    let c = s[right];
    right++;
    // 是 t 中所需字符，窗口内的数据进行一系列更新
    if (countMap[c]) {
      if (!window[c]) window[c] = 0;
      window[c]++;
      if (window[c] === countMap[c]) count++;
    }

    // 判断左侧窗口是否要收缩
    while (count === needCount) {
      // 更新最小覆盖子串
      if (right - left < minLen) {
        start = left;
        minLen = right - left;
      }
      // 移出 window 左侧第一个字符
      let d = s[left];
      left++;
      // 是 t 中所需字符，窗口内的数据进行一系列更新
      if (countMap[d]) {
        if (window[d] === countMap[d]) count--;
        window[d]--;
      }
    }
  }

  // 返回最小覆盖子串
  return minLen === Number.MAX_VALUE ? '' : s.substr(start, minLen);
};
// @lc code=end
