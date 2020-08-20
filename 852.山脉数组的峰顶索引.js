/*
 * @lc app=leetcode.cn id=852 lang=javascript
 *
 * [852] 山脉数组的峰顶索引
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function (A) {
  // 1.线性查找
  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] > A[i + 1]) {
      return i;
    }
  }
  return A.length - 1;
};
// @lc code=end
