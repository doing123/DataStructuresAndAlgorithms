/*
 * @lc app=leetcode.cn id=729 lang=javascript
 *
 * [729] 我的日程安排表 I
 */

// @lc code=start

var MyCalendar = function () {
  this.map = new Map();
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  // TODO 没理解
  for (let [key, value] of this.map) {
    if (key[0] < end && start < key[1]) {
      return false;
    }
  }
  this.map.set([start, end], true);
  return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end
