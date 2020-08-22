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
  // 3.二分查找
  let len = citations.length;
  let left = 0;
  let right = len - 1;
  while (left <= right) {
    let mid = left + ((right - left) >>> 1);
    // 引用次数：item = citations[mid]，引用次数高于 item 的文章数量是 n-i-1，加上当前文章，有n-i个文章引用次数至少大于 item
    if (citations[mid] == len - mid) return len - mid;
    if (citations[mid] > len - mid) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return len - left;
};
// @lc code=end
