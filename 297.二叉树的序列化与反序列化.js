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
  // 前序遍历
  let result = [];
  traversal(root);
  return result.toString();

  function traversal (root) {
    if (!root) {
      result.push('#');
      return;
    }
    result.push(root.val);

    traversal(root.left);
    traversal(root.right);
  }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let nodes = data.split(',');
  return traversal(nodes);

  function traversal (nodes) {
    if (!nodes.length) {
      return null;
    }
    // 前序遍历，nodes 第一个就是根节点
    let first = nodes.shift();
    if (first === '#') return null;
    let root = new TreeNode(+first);
    root.left = traversal(nodes);
    root.right = traversal(nodes);

    return root;
  }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
