/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  // intervals.push(newInterval);
  // if (intervals.length <= 1) return intervals;
  // intervals.sort((a, b) => a[0] - b[0]);
  // let result = [intervals[0]];
  // for (let i = 0; i < intervals.length; i++) {
  //   const pop = result.pop();
  //   if (pop[1] >= intervals[i][0]) {
  //     if (pop[1] >= intervals[i][1]) {
  //       result.push([pop[0], pop[1]]);
  //     } else {
  //       result.push([pop[0], intervals[i][1]]);
  //     }
  //   } else {
  //     result.push(pop, intervals[i]);
  //   }
  // }
  // return result;

  if (intervals.length == 0) return [newInterval];
  intervals.sort((a, b) => a[0] - b[0]);
  const len = intervals.length;
  const result = [];
  let i = 0;
  let [start, end] = newInterval;
  while (i < len && start > intervals[i][1]) {
    result.push(intervals[i]);
    i++;
  }
  while (i < len && end >= intervals[i][0]) {
    start = Math.min(start, intervals[i][0]);
    end = Math.max(end, intervals[i][1]);
    i++;
  }
  result.push([start, end]);
  while (i < len) {
    result.push(intervals[i]);
    i++;
  }

  return result;
};
// @lc code=end
