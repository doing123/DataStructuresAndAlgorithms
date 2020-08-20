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
  // 2.二分查找
  let left = 0;
  let right = A.length - 1;
  while (left < right) {
    let mid = (left + right) >>> 1;
    if (A[mid] > A[mid + 1] && A[mid] > A[mid - 1]) {
      // 封顶
      return mid;
    } else if (A[mid] > A[mid - 1] && A[mid] < A[mid + 1]) {
      // 递增，封顶在 右侧
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};
// @lc code=end
