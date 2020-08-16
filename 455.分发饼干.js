/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let i = 0; // 孩子数组 g 的指针
  let result = 0;
  for (let j = 0; j < s.length; j++) { // 饼干数组
    if (i < g.length && g[i] <= s[j]) {
      result++;
      i++;
    }
  }
  return result;
};
// @lc code=end
