/*
 * @lc app=leetcode id=707 lang=javascript
 *
 * [707] Design Linked List
 */
/**
 * Initialize your data structure here.
 */
var Node = function(val = 0) {
  this.val = val
  this.next = null
}

var MyLinkedList = function() {
  // TODO:
  this.head = null
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  let i = 0
  let node = this.head
  while(node) {
    if(i === index) {
      return node.val
    }
    node = node.next
    i++
  }
  return -1
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  const node = new Node(val)
  if(this.head) {
    node.next = this.head
  }
  this.head = node
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let node = this.head
    let newNode = new Node(val)
    while(node) {
      if(!node.next) break
      node = node.next
    }
    node.next = newNode
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  let i = 0
  let newNode = new Node(val)
  let node = this.head
  if(index < 0) index = 0 // index < 0 默认添加到 head
  if(index == 0) this.addAtHead(val)
  while(node) {
    if(i === index - 1) {
      newNode.next = node.next
      node.next = newNode
      break
    }
    node = node.next
    i++
  }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  let i = 0
  let node = this.head
  if(index < 0) return
  if(index == 0) {
    this.head = this.head.next
  }
  while(node && node.next) {
    if(index == 0) {
      this.head = node.next
      break
    }
    if(i === index - 1) {
      node.next = node.next.next
      break
    }
    node = node.next
    i++
  }
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

