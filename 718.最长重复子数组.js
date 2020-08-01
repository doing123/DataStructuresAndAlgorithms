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
  // 53/54 cases passed
  let result = 0;
  for (let i = 0; i < A.length; i++) {
    let index = B.indexOf(A[i]);
    while (index > -1) {
      let count = 0;
      let j = i;
      let k = index;
      while (A[j] === B[k] && j < A.length && k < B.length) {
        count++;
        j++;
        k++;
      }
      result = Math.max(count, result);
      index = B.indexOf(A[i], index + 1); // B中可能有多个元素等于A[i]的值
    }
  }

  return result;
};
// @lc code=end
