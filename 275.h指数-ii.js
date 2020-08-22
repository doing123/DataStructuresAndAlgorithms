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
  // 1.二分查找 TODO
  let len = citations.length;
  let left = 0;
  let right = len;
  while (left < right) {
    // let mid = (left + right) >>> 1;
    let mid = Math.ceil((left + right + 1) >> 1);
    if (citations[len - mid] >= mid) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return left;
};
// @lc code=end
