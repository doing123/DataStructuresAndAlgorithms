/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] 常数时间插入、删除和获取随机元素
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  this.map = new Map();
  this.arr = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) return false;
  this.map.set(val, this.arr.length);
  this.arr.push(val);
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) return false;
  const index = this.map.get(val);
  if (index == this.arr.length - 1) {
    this.arr.pop();
    this.map.delete(val);
  } else {
    let lastVal = this.arr.pop();
    this.arr[index] = lastVal;
    this.map.set(lastVal, index);
    this.map.delete(val);
  }
  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let len = this.map.size;
  let random = Math.floor(Math.random() * len);
  return this.arr[random];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end
