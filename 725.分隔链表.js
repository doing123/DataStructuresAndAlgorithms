/*
 * @lc app=leetcode.cn id=725 lang=javascript
 *
 * [725] 分隔链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (root, k) {
  // 1.利用栈
  const list = [];
  let node = root;
  while (node) {
    list.push(node);
    node = node.next;
  }

  let len = list.length;
  let resLen = Math.floor(len / k);
  let curry = len % k;
  let m = 0;
  let result = [];
  for (let i = 0; i < k; i++) {
    let arr = [];
    let j = 0;
    while (j < resLen) {
      arr.push(list.shift() || null);
      j++;
    }
    if (m < curry) {
      arr.push(list.shift() || null);
      m++;
    }
    let last = arr[arr.length - 1];
    if (last) last.next = null;
    result.push(arr.shift() || null);
  }
  return result;
};
// @lc code=end
