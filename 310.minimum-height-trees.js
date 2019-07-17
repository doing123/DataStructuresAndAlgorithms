/*
 * @lc app=leetcode id=310 lang=javascript
 *
 * [310] Minimum Height Trees
 */
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  if (n === 1) return [0]
  let res = []
  let adj = new Array(n)
  for (let i = 0; i < adj.length; i++) {
    adj[i] = []
  }
  let queue = []
  for (let i = 0; i < edges.length; i++) {
    let edge = edges[i]
    adj[edge[0]].push(edge[1])
    adj[edge[1]].push(edge[0])
  }

  for (let i = 0; i < n; i++) {
    if (adj[i].length === 1) {
      queue.push(i)
    }
  }

  while (n > 2) {
    let size = queue.length
    n -= size
    for (let i = 0; i < size; i++) {
      let top = queue.shift()
      for (let j = 0; j < adj[top].length; j++) {
        let tmp = adj[top][j]
        let index = adj[tmp].findIndex(item => {
          return item === top
        })
        adj[tmp].splice(index, 1)
        if (adj[tmp].length === 1) queue.push(tmp)
      }
    }
  }

  while (queue.length) {
    res.push(queue.shift())
  }

  return res
}

findMinHeightTrees(4, [[1, 0], [1, 2], [1, 3]])
