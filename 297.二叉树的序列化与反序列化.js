/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  // 4.层级遍历
  if (!root) return '';
  let result = [];
  let queue = [root];
  while (queue.length) {
    let first = queue.shift();
    if (!first) {
      result.push('#');
      continue;
    }
    result.push(first.val);
    queue.push(first.left);
    queue.push(first.right);
  }

  return result.toString();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data) return null;
  const nodes = data.split(',');
  let first = nodes.shift();
  let root = new TreeNode(+first);
  let queue = [root];

  while (queue.length) {
    // 队列中存的都是父节点
    let parent = queue.shift();

    // 父节点对应的左侧子节点的值
    let left = nodes.shift();
    if (left === '#') {
      parent.left = null;
    } else {
      parent.left = new TreeNode(+left);
      queue.push(parent.left);
    }

    // 父节点对应的右侧子节点的值
    let right = nodes.shift();
    if (right === '#') {
      parent.right = null;
    } else {
      parent.right = new TreeNode(+right);
      queue.push(parent.right);
    }
  }

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
