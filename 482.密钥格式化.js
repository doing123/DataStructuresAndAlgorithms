/*
 * @lc app=leetcode.cn id=482 lang=javascript
 *
 * [482] 密钥格式化
 */

// @lc code=start
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function (S, K) {
  // 3.顺序插入
  S = S.toUpperCase().replace(/-/g, '');
  let index = S.length % K;
  let s1 = S.slice(0, index);
  let s2 = S.slice(index);
  let count = s2.length / K;

  let result = [];
  for (let i = 0; i < count; i++) {
    // result.push(s2.substr(i * K, K)); // substr: 从起始索引号提取字符串中指定数目的字符。
    result.push(s2.substring(i * K, (i + 1) * K)); // substring: 提取字符串中两个指定的索引号之间的字符。
  }
  if (s1) {
    result.unshift(s1);
  }

  return result.join('-');
};
// @lc code=end
