/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第K大元素
 */

// @lc code=start
/**
 * 交换数组元素
 * @param {number[]} arr 数组
 * @param {number} a 元素1
 * @param {number} b 元素2
 */
function swap (arr, a, b) {
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  // TODO 第一个元素空着 ? 不为null,就验证不通过？？？
  this.minHeap = []
  this.k = k
  // 所有元素都添加到最小堆
  for (let i = 0; i < nums.length; i++) {
    this.add(nums[i])
  }
}

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.minHeap.length < this.k) {
    // 最小堆没满，放到最小堆
    this.minHeap.push(val)
    // 上浮最新的元素，维护堆的秩序
    this.up(this.minHeap.length - 1)
  } else {
    if (val > this.minHeap[0]) {
      // 新的元素比最小堆堆顶大，替换最小堆堆顶
      this.minHeap[0] = val
      // 下沉这个元素，维护堆的秩序
      this.down(0)
    }
    // 否则直接丢弃这个元素
  }
  return this.minHeap[0]
}
/**
 * 最小堆的上浮操作
 * @param {number} idx 要上浮的元素下标
 */
KthLargest.prototype.up = function (idx) {
  let parent = idx >>> 1
  if (parent >= 0 && this.minHeap[parent] > this.minHeap[idx]) {
    swap(this.minHeap, parent, idx)
    // 递归上浮
    this.up(parent)
  }
}
/**
 * 最小堆的下沉操作
 * @param {number} idx 要下沉的元素下标
 */
KthLargest.prototype.down = function (idx) {
  let to = idx
  // 和左子元素比较
  let left = idx * 2 + 1
  if (left < this.minHeap.length && this.minHeap[left] < this.minHeap[to]) {
    to = left
  }
  // 和右子元素比较
  let right = idx * 2 + 2
  if (right < this.minHeap.length && this.minHeap[right] < this.minHeap[to]) {
    to = right
  }
  if (to !== idx) {
    swap(this.minHeap, to, idx)
    // 递归下沉
    this.down(to)
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end
