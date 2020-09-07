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
  // 2.遍历
  let len = 0;
  let node = root;
  while (node) {
    len++;
    node = node.next;
  }

  let itemLen = Math.floor(len / k); // 每一项的长度
  let curry = len % k; // 余数，即前 curry 项多一个元素
  let m = 0; // curry 计数
  let result = [];
  let dummyHead = new ListNode(0);
  dummyHead.next = root;
  for (let i = 0; i < k; i++) {
    node = dummyHead;
    let j = 0;
    while (j < itemLen) {
      node = node ? node.next : null;
      j++;
    }
    if (m < curry) {
      node = node ? node.next : null;
      m++;
    }

    result.push(dummyHead.next || null);
    let next = node.next || null;
    if (node) node.next = null;
    dummyHead.next = next;
  }
  return result;
};
// @lc code=end
