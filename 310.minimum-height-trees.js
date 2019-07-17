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
  let adj = new Array(n) // 建立图，二维数组 adj
  for (let i = 0; i < adj.length; i++) {
    adj[i] = [] // 保存了 i 节点可以到达的所有节点
  }
  let queue = []
  for (let i = 0; i < edges.length; i++) {
    let edge = edges[i]
    adj[edge[0]].push(edge[1])
    adj[edge[1]].push(edge[0])
  }

  for (let i = 0; i < n; i++) {
    if (adj[i].length === 1) {
      queue.push(i) // 将所有只有一个连接边的节点（叶节点）都存入到一个队列queue中
    }
  }

  while (n > 2) {
    let size = queue.length
    n -= size
    // 遍历每一个叶节点，通过图来找到和其相连的节点，并且在其相连节点的集合中将该叶节点删去，
    // 如果删完后此节点也也变成一个叶节点了，加入队列中，再下一轮删除
    // 节点数小于等于2时候停止，此时剩下的一个或两个节点就是我们要求的最小高度树的根节点
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
