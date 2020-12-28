/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  // 区间调度问题：贪心
  // 求 最多不重叠区间
  let len = intervals.length;
  if (!len) return 0;
  return len - intervalScheduling(intervals);

  function intervalScheduling (intervals) {
    intervals.sort((a, b) => {
      return a[1] - b[1]; // end 升序排列
    });
    let count = 1; // 至少一个区间不相交
    let end = intervals[0][1]; // 排序后的第一个区间
    for (let item of intervals) {
      let start = item[0];
      if (start >= end) {
        count++;
        end = item[1];
      }
    }
    return count;
  }
};
// @lc code=end
