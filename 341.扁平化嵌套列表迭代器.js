/*
 * @lc app=leetcode.cn id=341 lang=javascript
 *
 * [341] 扁平化嵌套列表迭代器
 */

// @lc code=start
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
  const generator = function * (arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].isInteger()) {
        yield arr[i].getInteger();
      } else {
        yield * generator(arr[i].getList());
      }
    }
  };
  this.iterator = generator(nestedList);
  // 调用迭代器的 next 方法，返回 {value: val, done: true/false}，value 为返回的值，done 表示是否遍历完
  this.nextVal = this.iterator.next();
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  return !this.nextVal.done;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
  const value = this.nextVal.value;
  this.nextVal = this.iterator.next();
  return value;
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
// @lc code=end
