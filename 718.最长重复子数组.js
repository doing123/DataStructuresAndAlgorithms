/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
  // 滑动窗口
  let m = A.length;
  let n = B.length;
  let result = 0;

  // 固定A，滑动B
  for (let i = 0; i <= n; i++) {
    let len = Math.min(m, n - i); // 滑动窗口长度 TODO?
    let maxLen = findMaxLen(A, B, 0, i, len); // 窗口左侧A[0],B[i]
    result = Math.max(result, maxLen);
  }

  // 固定B，滑动A
  for (let i = 0; i <= m; i++) {
    let len = Math.min(n, m - i); // 滑动窗口长度
    let maxLen = findMaxLen(A, B, i, 0, len);
    result = Math.max(result, maxLen);
  }

  return result;
};

function findMaxLen(A, B, aStart, bStart, winLen) {
  let result = 0;
  let count = 0; // 公共前缀计数
  for (let i = 0; i < winLen; i++) {
    if (
      A[aStart + i] !== undefined &&
      B[bStart + i] !== undefined &&
      A[aStart + i] === B[bStart + i]
    ) {
      count++;
    } else {
      count = 0;
    }
    result = Math.max(result, count);
  }

  return result;
}
// @lc code=end
