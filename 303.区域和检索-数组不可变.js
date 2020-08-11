/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  // 前缀和的应用
  this.prevSum = new Array(nums.length + 1);
  this.prevSum[0] = 0;
  for (let i = 1; i <= nums.length; i++) {
    this.prevSum[i] = this.prevSum[i - 1] + nums[i - 1];
  }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  if (i == 0) return this.prevSum[j + 1];
  return this.prevSum[j + 1] - this.prevSum[i];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
// @lc code=end
