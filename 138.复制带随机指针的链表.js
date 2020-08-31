/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  // 1.先复制节点，再遍历链表匹配随机指针
  let node = head;
  let newHead = new Node();
  let copy = newHead;
  while (node) {
    copy.next = new Node(node.val);
    copy = copy.next;
    node = node.next;
  }

  node = head;
  copy = newHead.next;

  // 处理随机指针
  while (node) {
    if (node.random) {
      copy.random = getRandom(head, newHead.next, node.random);
    }
    node = node.next;
    copy = copy.next;
  }

  return newHead.next;

  function getRandom(head, copy, random) {
    while (head) {
      if (head == random) return copy;
      head = head.next;
      copy = copy.next;
    }
    return null;
  }
};
// @lc code=end
