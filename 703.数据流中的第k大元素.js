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
  // 1.降序排列，插入排序 add 的值
  this.minHeap = nums.sort((a, b) => b - a)
  this.k = k
}

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  let len = this.minHeap.length
  let pos = len
  for (let i = 0; i < len; i++) {
    if (val >= this.minHeap[i]) {
      pos = i
      break
    }
  }
  this.minHeap.splice(pos, 0, val)
  return this.minHeap[this.k - 1]
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end
