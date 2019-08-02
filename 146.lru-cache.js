/*
 * @lc app=leetcode id=146 lang=javascript
 *
 * [146] LRU Cache
 */
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  // 最近最少使用的放在链表的尾部，超出长度删除
  this._capacity = capacity
  this._count = 0
  this._head = null
  this._tail = null
  this._hashTable = {}
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this._hashTable[key]) {
    const { value } = this._hashTable[key]
    const { prev, next } = this._hashTable[key]
    if (prev) prev.next = next
    if (next) next.prev = prev || next.prev // 或：考虑当前key在head时的临界点

    if (this._tail === this._hashTable[key]) {
      this._tail = prev || this._hashTable[key]
    }

    this._hashTable[key].prev = null
    if (this._head !== this._hashTable[key]) {
      this._hashTable[key].next = this._head
      this._head.prev = this._hashTable[key]
    }

    this._head = this._hashTable[key]

    return value
  }

  return -1
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this._hashTable[key]) {
    this._hashTable[key].value = value
    this.get(key)
  } else {
    this._hashTable[key] = { key, value, prev: null, next: null }
    if (this._head) {
      this._head.prev = this._hashTable[key]
      this._hashTable[key].next = this._head
    }

    this._head = this._hashTable[key]

    if (!this._tail) {
      this._tail = this._hashTable[key]
    }

    this._count += 1
  }

  if (this._count > this._capacity) {
    let removeKey = this._tail.key

    if (this._tail.prev) {
      this._tail.prev.next = null
      this._tail = this._tail.prev
      this._hashTable[removeKey].prev = null
    }

    delete this._hashTable[removeKey]

    this._count -= 1
  }
}

// const cache = new LRUCache(2 /* capacity */)

/* cache.put(1, 1)
cache.put(2, 2)
cache.get(2) // returns 1
cache.put(3, 3) // evicts key 2
cache.get(2) // returns -1 (not found)
cache.put(4, 4) // evicts key 1
cache.get(1) // returns -1 (not found)
cache.get(3) // returns 3
cache.get(4) // returns 4 */
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
