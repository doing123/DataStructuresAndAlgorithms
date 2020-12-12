/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let map = new Map();
  let window = {};
  for (let c of p) {
    if (!map.has(c)) map.set(c, 0);
    map.set(c, map.get(c) + 1);
  }

  let result = [];
  let count = 0; // 计数
  let left = 0;
  let right = 0;
  let len1 = s.length;
  let len2 = p.length;
  while (right < len1) {
    let c = s[right];
    right++;
    // 更新窗口数据
    if (map.has(c)) {
      if (!window[c]) window[c] = 0;
      window[c]++;
      if (window[c] === map.get(c)) count++;
    }

    // 收缩窗口
    while (right - left >= len2) {
      if (count === map.size) {
        result.push(left);
      }
      let c = s[left];
      left++;
      if (map.has(c)) {
        if (window[c] === map.get(c)) count--;
        window[c]--;
      }
    }
  }

  return result;
};
// @lc code=end
