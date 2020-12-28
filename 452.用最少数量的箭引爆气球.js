/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  // 区间调度：贪心
  // 求最多无重叠区间个数，临界值可相同
  let len = points.length;
  if (!len) return 0;
  return intervalScheduling(points);

  function intervalScheduling (intervals) {
    intervals.sort((a, b) => a[1] - b[1]); // end 升序排列
    let count = 1;
    let end = intervals[0][1];
    for (let item of intervals) {
      let start = item[0];
      if (start > end) {
        count++;
        end = item[1];
      }
    }
    return count;
  }
};
// @lc code=end
