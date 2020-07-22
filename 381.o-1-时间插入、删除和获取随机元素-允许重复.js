/*
 * @lc app=leetcode.cn id=381 lang=javascript
 *
 * [381] O(1) 时间插入、删除和获取随机元素 - 允许重复
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function () {
  this.map = new Map();
  this.list = [];
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
  this.list.push(val);
  if (this.map.has(val)) {
    const set = this.map.get(val);
    set.add(this.list.length - 1);
    return false;
  } else {
    const set = new Set();
    set.add(this.list.length - 1);
    this.map.set(val, set);
    return true;
  }
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
  if (this.list.length && this.map.has(val) && this.map.get(val).size) {
    // 要移除的值存储在list中的index(多个任选一个)
    const set = this.map.get(val);
    const arr = Array.from(set);
    const index = arr.pop(); // 值的索引
    set.delete(index);

    if (index == this.list.length - 1) {
      this.list.pop();
    } else {
      const lastVal = this.list.pop();
      // 最后一个值对应的 set
      this.map.get(lastVal).delete(this.list.length);
      this.map.get(lastVal).add(index);
      this.list.splice(index, 1, lastVal);
    }

    return true;
  }
  return false;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {
  const random = Math.floor(Math.random() * this.list.length);
  return this.list[random];
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end
