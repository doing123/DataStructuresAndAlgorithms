/*
 * @lc app=leetcode id=859 lang=javascript
 *
 * [859] Buddy Strings
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */

 // https://blog.csdn.net/Mix2411238068/article/details/86690570
var buddyStrings = function(A, B) {
    // 判断长度是否都大于1且相等
    if (A.length <= 1 || B.length <=1 || A.length !== B.length){
      return false;
  }
  // 判断A === B 的情况
  if (A===B){
      let C = [...new Set(A.split(''))];// 简单的数组去重操作，有兴趣的小伙伴可以深入了解一下Set
      return (C.length !== A.length);
  }
  // 判断A!==B的情况
  // 首先在这里说明一下为什么不在最初的时候将AB分解为数组
  // 在JS里我们能用=== 比较的只有值类型的数据，而对于引用类型的数据，我们这样比较通常是比较
  // 指针，与我们的本意相悖。若一开始就转化为数组，则A===B 的情况就不会发生了（即判断
  // 不了）。
   A = A.split('');
   B = B.split('');
  let arr = [];
  for (let i=0;i<A.length;i++){
      if (A[i] !== B[i]){
          arr.push(A[i]);
          arr.push(B[i]);
      }
  }
  // 数组中插入的是不同的项，判断是否长度为4（即2对），且不同项是否对应相等
   return (arr.length === 4 && arr[0] === arr[3] && arr[1] === arr[2]);
};

