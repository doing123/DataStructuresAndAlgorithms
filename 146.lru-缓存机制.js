/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  // 双向链表(删除快速) + hash 表(读取快)
  // 最近最少使用的放在链表的尾部，超出长度删除
  this.capacity = capacity;
  this.head = null; // 链表的头部；
  this.tail = null; // 尾部
  this.hashTable = {}; // map 保证  O(1) 时间复杂度
  this.count = 0; // 计数，超出容量删除
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.hashTable[key]) {
    const { value, prev, next } = this.hashTable[key];
    if (prev) prev.next = next;
    if (next) next.prev = prev || next.prev; // 或：考虑该 key 指向的节点也是 head 的临界情况

    // 如果该 key 对应的节点是双向链表最后一个
    if (this.tail === this.hashTable[key]) {
      this.tail = prev || this.hashTable[key];
    }

    this.hashTable[key].prev = null; // 至此，已从双向链表中取出该节点

    if (this.head !== this.hashTable[key]) {
      this.hashTable[key].next = this.head;
      this.head.prev = this.hashTable[key];
    }

    this.head = this.hashTable[key];
    return value;
  }

  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.hashTable[key]) {
    this.hashTable[key].value = value;
    this.get(key);
  } else {
    this.hashTable[key] = { key, value, prev: null, next: null };
    if (this.head) {
      this.head.prev = this.hashTable[key];
      this.hashTable[key].next = this.head;
    }

    this.head = this.hashTable[key];

    if (!this.tail) {
      this.tail = this.hashTable[key]; // 第一次存储节点
    }

    this.count++;

    // 判断是否超出容量，超出删除链表尾部节点（即是最近最少使用的节点）
    if (this.count > this.capacity) {
      const { key, prev } = this.tail;
      prev.next = null;
      this.tail.prev = null;
      this.tail = prev;

      delete this.hashTable[key];
      this.count--;
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
