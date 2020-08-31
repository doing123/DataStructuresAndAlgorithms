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
  // 2.两次遍历 + map 保存映射关系
  if (!head) return null;
  let node = head;
  let newHead = new Node();
  let copy = newHead;
  let map = new Map();
  while (node) {
    copy.val = node.val;
    copy.next = node.next ? new Node() : null;
    map.set(node, copy); // 新旧链表节点按次序一一对应
    node = node.next;
    copy = copy.next;
  }

  copy = newHead;
  while (head) {
    copy.random = head.random ? map.get(head.random) : null;
    head = head.next;
    copy = copy.next;
  }

  return newHead;
};
// @lc code=end
