/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  // 思路：构建大顶堆、小顶堆。个数之差最大为1，且保持 大顶堆的元素整体小于小顶堆（即顶部元素为中位数）
  // 如：往小顶堆添加元素，可以通过先往大顶堆添加元素，再取出最大元素添加进小顶堆

  this.large = new PriorityQueue(Number.MAX_VALUE);
  this.small = new PriorityQueue(Number.MAX_VALUE);
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  // 大顶堆的元素整体小于小顶堆
  if (this.large.size() < this.small.size()) {
    // 往大顶堆添加元素，可以通过先往小顶堆添加元素，再取出最小元素（队首）添加进大顶堆
    this.small.add(num);
    this.large.add(this.small.shift());
  } else {
    // 往小顶堆添加元素，可以通过先往大顶堆添加元素，再取出最大元素（队尾）添加进小顶堆
    this.large.add(num);
    this.small.add(this.large.pop());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  // 如果元素不一样多，多的那个堆的堆顶元素就是中位数
  if (this.large.size() < this.small.size()) {
    return this.small.front();
  } else if (this.large.size() > this.small.size()) {
    return this.large.last();
  }

  return (this.small.front() + this.large.last()) / 2;
};

// 优先级队列，升序
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

  last () {
    return this.queue[this.queue.length - 1];
  }

  shift () {
    return this.queue.shift();
  }

  pop () {
    return this.queue.pop();
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end
