/*
 * @lc app=leetcode id=796 lang=javascript
 *
 * [796] Rotate String
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
  // substr 从起始索引号提取字符串中指定数目的字符
  // substring 提取字符串中两个指定的索引号之间的字符
  
  if(A.length !== B.length) return false
  let i = 0
  while(i < A.length) {
    A = A.substring(1) + A.substr(0, 1)
    if(A === B) return true
    i++
  }
  return A === B
};

