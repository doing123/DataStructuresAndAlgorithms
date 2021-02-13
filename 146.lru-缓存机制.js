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
  // 最近最少使用的放在链表的头部，超出长度删除
  this.capacity = capacity;
  this.hashTable = {}; // map 保证  O(1) 时间复杂度
  this.cache = new DoubleList();

  // 将某个 key 提升为最近使用的
  this.makeRecently = function (key) {
    const node = this.hashTable[key];
    // 先从链表中删除这个节点，再插入到队尾
    this.cache.remove(node);
    this.cache.addLast(node);
  };

  // 添加最近使用的元素
  this.addRecently = function (key, value) {
    const node = new Node(key, value);
    // 插入到队尾，并在 hashTable 中添加 key 的映射
    this.cache.addLast(node);
    this.hashTable[key] = node;
  };

  // 删除某一个 key
  this.deleteKey = function (key) {
    const node = this.hashTable[key];
    // 先从链表中删除这个节点，再 映射中删除
    this.cache.remove(node);
    delete this.hashTable[key];
  };

  // 删除最久未使用的元素
  this.removeLeastRecently = function (key) {
    // 链表头部的第一个元素就是最久未使用的
    const node = this.cache.removeFirst();
    // 同时从 map 中删除它的 key
    delete this.hashTable[node.key];
  };
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.hashTable[key]) {
    this.makeRecently(key);
    return this.hashTable[key].value;
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
    this.deleteKey(key);
    // 新插入的数据为最近使用的数据
    this.addRecently(key, value);
    return;
  }
  if (this.capacity === this.cache.size) {
    // 删除最久未使用的元素
    this.removeLeastRecently();
  }

  // 添加为最近使用的元素
  this.addRecently(key, value);
};

class Node {
  constructor (k, v) {
    this.key = k;
    this.value = v;
    this.prev = null;
    this.next = null;
  }
}

class DoubleList {
  constructor () {
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }

  // 在链表尾部添加节点 x，时间 O(1)
  addLast (x) {
    this.tail.prev.next = x;
    x.prev = this.tail.prev;
    x.next = this.tail;
    this.tail.prev = x;

    this.size++;
  }

  // 删除链表中的 x 节点（x 一定存在）
  // 由于是双链表且给的是目标 Node 节点，时间 O(1)
  remove (x) {
    x.prev.next = x.next;
    x.next.prev = x.prev;
    this.size--;
  }

  // 删除链表中第一个节点，并返回该节点，时间 O(1)
  removeFirst () {
    if (this.head.next === this.tail) return null;
    const first = this.head.next;
    this.remove(first);
    return first;
  }

  // 返回链表长度，时间 O(1)
  size () {
    return this.size;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
