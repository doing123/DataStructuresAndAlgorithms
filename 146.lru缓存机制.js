/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.list = []; // 最近使用放在队首
  this.limit = capacity;
  this.map = {};
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  var index;
  if ((index = this.list.indexOf(key)) > -1) {
    this.list.splice(index, 1);
    this.list.unshift(key);
  }
  return this.map[key] || -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // key 存在，直接替换value值，且更新到队首
  if (this.map[key]) {
    this.map[key] = value; // 更新 value
    let index = this.list.indexOf(key);
    this.list.splice(index, 1); // 不可直接使用返回的值，因为返回值是数组
    this.list.unshift(key);
    return;
  }

  // 队列已满，删除最后一个
  if (this.list.length === this.limit) {
    const target = this.list.pop();
    delete this.map[target];
  }
  // 加入队首
  this.list.unshift(key);
  this.map[key] = value;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
