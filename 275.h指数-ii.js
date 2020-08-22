/*
 * @lc app=leetcode.cn id=275 lang=javascript
 *
 * [275] H指数 II
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  // 2.线性查找
  for (let i = 0, len = citations.length; i < len; i++) {
    // 查找 第一篇文章 c = citation[i] 大于或等于 len - i，即 c >= len - i，即 len - i 个文章引用次数至少为 c 次
    if (citations[i] >= len - i) return len - i;
  }
  return 0;
};
// @lc code=end
