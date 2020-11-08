/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // 6.优先级队列
  let pq = new PriorityQueue(k);
  for (let i = 0; i < nums.length; i++) {
    pq.add(nums[i]);
  }

  return pq.front();
};

class PriorityQueue {
  constructor (k) {
    this.limit = k;
    this.queue = [];
  }

  add (val) {
    let added = false;
    // 升序
    for (let i = 0; i < this.queue.length; i++) {
      if (val < this.queue[i]) {
        this.queue.splice(i, 0, val);
        added = true;
        break;
      }
    }
    if (!added) {
      this.queue.push(val);
    }

    if (this.queue.length > this.limit) {
      this.del();
    }
  }

  size () {
    return this.queue.length;
  }

  del () {
    this.queue.shift();
  }

  front () {
    return this.queue[0];
  }
}
// @lc code=end
