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
  this.prevSum = [];
  let sum = 0;
  nums.forEach((item) => {
    let tmp = sum + item;
    this.prevSum.push(tmp);
    sum = tmp;
  });
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  if (i == 0) return this.prevSum[j];
  return this.prevSum[j] - this.prevSum[i - 1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
// @lc code=end
