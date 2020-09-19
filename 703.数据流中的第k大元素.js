/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第K大元素
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.pq = new PriorityQueue()
  this.k = k
  for (let i = 0; i < nums.length; i++) {
    this.pq.add(nums[i])
    if (this.pq.size() > k) {
      this.pq.del()
    }
  }
}

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.pq.add(val)
  if (this.pq.size() > this.k) {
    this.pq.del()
  }
  return this.pq.front()
}

// ------------------------构造最小优先队列------------------
class PriorityQueue {
  constructor () {
    this.queue = []
  }
  add (val) {
    // 插入元素，升序
    let added = false
    for (let i = 0; i < this.queue.length; i++) {
      if (val < this.queue[i]) {
        this.queue.splice(i, 0, val)
        added = true
        break
      }
    }
    if (!added) {
      this.queue.push(val)
    }
  }
  del () {
    this.queue.shift()
  }
  size () {
    return this.queue.length
  }
  front () {
    return this.queue[0]
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end
