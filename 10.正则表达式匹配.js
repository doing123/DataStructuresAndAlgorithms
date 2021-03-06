/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  // 2.递归 + 备忘录
  let len1 = s.length;
  let len2 = p.length;
  let memo = new Map();
  return dp(0, 0);

  function dp (i, j) {
    let key = `${i},${j}`;
    if (memo.has(key)) return memo.get(key);
    if (j === len2) return i === len1;

    let result;
    let first = i < len1 && (s[i] === p[j] || p[j] === '.');
    // 特殊匹配
    if (j <= len2 - 2 && p[j + 1] === '*') {
      // 匹配 0 次(跳过 x*) 或 1 次(当前匹配，i加1)
      result = dp(i, j + 2) || (first && dp(i + 1, j));
    } else {
      result = first && dp(i + 1, j + 1);
    }
    memo.set(key, result);
    return result;
  }
};
// @lc code=end
