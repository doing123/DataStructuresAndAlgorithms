/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  // 2.递归 + 备忘录
  let m = word1.length;
  let n = word2.length;
  let map = new Map();
  return dp(m - 1, n - 1);

  function dp (i, j) {
    if (i < 0) return j + 1; // 一个走完，直接返回另一个字符串剩余的长度
    if (j < 0) return i + 1;
    let key = `${i},${j}`;
    if (map.has(key)) return map.get(key);
    let result;
    if (word1[i] === word2[j]) {
      result = dp(i - 1, j - 1);
    } else {
      // 取插入、删除、替换三者的最小值
      result = Math.min(dp(i, j - 1), dp(i - 1, j), dp(i - 1, j - 1)) + 1;
    }

    map.set(key, result);
    return result;
  }
};
// @lc code=end
