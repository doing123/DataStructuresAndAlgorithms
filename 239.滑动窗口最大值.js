/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // 2.滑动窗口 + 双端队列
  let len = nums.length
  class SlideWindow {
    constructor () {
      this.data = []
    }

    push (val) {
      let data = this.data
      while (data.length && data[data.length - 1] < val) {
        data.pop()
      }
      data.push(val)
    }

    pop (val) {
      let data = this.data
      if (data.length && data[0] === val) {
        data.shift()
      }
    }

    max () {
      return this.data[0]
    }
  }

  let result = []
  let instance = new SlideWindow()
  for (let i = 0; i < len; i++) {
    if (i < k - 1) {
      instance.push(nums[i])
    } else {
      instance.push(nums[i])
      result.push(instance.max())
      instance.pop(nums[i - k + 1])
    }
  }
  return result
}
// @lc code=end
