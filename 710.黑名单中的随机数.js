/*
 * @lc app=leetcode.cn id=710 lang=javascript
 *
 * [710] 黑名单中的随机数
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number[]} blacklist
 */
var Solution = function (N, blacklist) {
  // 思路：把黑名单数字移到数组尾部，如果黑名单在区间[0, sz)内，映射区间 [sz, N)中非黑名单占用的位置
  this.sz = N - blacklist.length;
  this.map = {}; // 映射黑名单的数字在区间 [sz, N)的位置
  // 初始化，用于判断数字是否在黑名单内
  for (let b of blacklist) {
    this.map[b] = 666;
  }

  let last = N - 1;
  for (const b of blacklist) {
    // 如果 b 已经在区间 [sz, N)，可以直接忽略
    if (b >= this.sz) continue;
    // 跳过所有黑名单中的数字，即找到 区间 [sz, N) 中，可以映射为非黑名单的位置
    while (this.map[last]) {
      last--;
    }

    this.map[b] = last;
    last--;
  }
};

/**
 * @return {number}
 */
Solution.prototype.pick = function () {
  let index = Math.floor(Math.random() * this.sz);
  // 这个索引命中了黑名单，需要被映射到其他位置
  if (this.map[index]) {
    return this.map[index];
  }

  // 若没命中黑名单，则直接返回
  return index;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(N, blacklist)
 * var param_1 = obj.pick()
 */
// @lc code=end
