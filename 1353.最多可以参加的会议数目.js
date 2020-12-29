/*
 * @lc app=leetcode.cn id=1353 lang=javascript
 *
 * [1353] 最多可以参加的会议数目
 */

// @lc code=start
/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function (events) {
  // 1.贪心：超出时间限制
  events.sort((a, b) => a[1] - b[1]); // 结束日期升序，结束早的优先参加
  let visited = new Set(); // 记录参加会议的日期
  for (let event of events) {
    let start = event[0];
    let end = event[1];
    for (let i = start; i <= end; i++) {
      if (!visited.has(i)) {
        visited.add(i);
        break; // 参加了改会议，只参加一次
      }
    }
  }

  return visited.size;
};
// @lc code=end
