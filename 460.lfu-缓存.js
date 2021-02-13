/*
 * @lc app=leetcode.cn id=460 lang=javascript
 *
 * [460] LFU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.keyToVal = new Map(); // key-value
  this.keyToFreq = new Map(); // key-freq
  this.freqToKeys = new Map(); // freq-key // 保存 频次 freq 对应的 key[]
  this.minFreq = 0; // 记录最小的频次
  this.cap = capacity; // 记录 LFU 缓存的最大容量
  this.increaseFreq = function (key) {
    const freq = this.keyToFreq.get(key);
    /* 更新 KF 表 */
    this.keyToFreq.set(key, freq + 1);
    /* 更新 FK 表 */
    // 将 key 从 freq 对应的列表中删除
    const keyList = this.freqToKeys.get(freq);
    // const index = keyList.findIndex((item) => item === key);
    this.freqToKeys.set(
      freq,
      keyList.filter((item) => item !== key)
    );
    // 将 key 加入 freq + 1 对应的列表中
    if (!this.freqToKeys.has(freq + 1)) {
      this.freqToKeys.set(freq + 1, []);
    }
    this.freqToKeys.get(freq + 1).push(key);
    // 如果 freq 对应的列表空了，移除这个 freq
    if (this.freqToKeys.get(freq).length === 0) {
      this.freqToKeys.delete(freq);
      // 如果这个 freq 恰好是 minFreq，更新 minFreq
      if (freq === this.minFreq) {
        this.minFreq++;
      }
    }
  };

  this.removeMinFreqKey = function () {
    // freq 最小的 key 列表
    const keyList = this.freqToKeys.get(this.minFreq);
    // 其中最先被插入的那个 key 就是该被淘汰的 key
    const deletedKey = keyList.shift();
    /* 更新 FK 表 */
    if (keyList.length === 0) {
      this.freqToKeys.delete(this.minFreq);
      // 问：这里需要更新 minFreq 的值吗？
    }
    /* 更新 KV 表 */
    this.keyToVal.delete(deletedKey);
    /* 更新 KF 表 */
    this.keyToFreq.delete(deletedKey);
  };
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  if (!this.keyToVal.has(key)) {
    return -1;
  }
  // 增加 key 对应的 freq
  this.increaseFreq(key);
  return this.keyToVal.get(key);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (this.cap <= 0) return;

  // 若 key 已存在，修改对应的 val 即可
  if (this.keyToVal.has(key)) {
    this.keyToVal.set(key, value);
    // key 对应的 freq 加一
    this.increaseFreq(key);
    return;
  }
  /*  key 不存在，需要插入 */
  // 容量已满的话需要淘汰一个 freq 最小的 key
  if (this.keyToVal.size >= this.cap) {
    this.removeMinFreqKey();
  }

  /* 插入 key 和 val，对应的 freq 为 1 */
  // 插入 KV 表
  this.keyToVal.set(key, value);
  // 插入 KF 表
  this.keyToFreq.set(key, 1);
  // 插入 FK 表
  if (!this.freqToKeys.get(1)) {
    this.freqToKeys.set(1, []);
  }
  this.freqToKeys.get(1).push(key);

  // 插入新 key 后最小的 freq 肯定是 1
  this.minFreq = 1;
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
