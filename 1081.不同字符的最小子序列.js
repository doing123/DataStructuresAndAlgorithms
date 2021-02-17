/*
 * @lc app=leetcode.cn id=1081 lang=javascript
 *
 * [1081] 不同字符的最小子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function (s) {
  let countMap = {}; // 字符计数
  for (const c of s) {
    if (countMap[c] === undefined) {
      countMap[c] = 0;
    }
    countMap[c]++;
  }

  let result = [];
  let inResult = {};
  for (const c of s) {
    countMap[c]--;
    if (inResult[c]) continue;

    while (result.length && result[result.length - 1] > c) {
      if (countMap[result[result.length - 1]] === 0) break;
      let top = result.pop();
      inResult[top] = false;
    }

    inResult[c] = true;
    result.push(c);
  }

  return result.join('');
};
// @lc code=end
