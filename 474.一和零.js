/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  // 1.递归 + 备忘录
  let len = strs.length;
  let map = new Map();

  return dp(0, m, n, 0);

  function dp (index, m, n, count) {
    let key = `${index},${m},${n},${count}`;
    if (map.has(key)) return map.get(key);
    if (index === len) {
      map.set(key, count);
      return count;
    }

    let zeroes = 0;
    let ones = 0;
    for (let c of strs[index]) {
      if (c === '0') {
        zeroes++;
      } else {
        ones++;
      }
    }

    let result = 0;
    // 可以选择当前，可以选或不选
    if (zeroes <= m && ones <= n) {
      result = Math.max(
        dp(index + 1, m, n, count),
        dp(index + 1, m - zeroes, n - ones, count + 1)
      );
    } else {
      // 剩余 0 或 1 不能满足选择当前项
      result = dp(index + 1, m, n, count);
    }
    map.set(key, result);
    return result;
  }
};
// @lc code=end
