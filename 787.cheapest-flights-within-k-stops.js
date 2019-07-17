/*
 * @lc app=leetcode id=787 lang=javascript
 *
 * [787] Cheapest Flights Within K Stops
 */
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, K) {
  // 1. error Time Limit Exceeded
  /* let cheap = (flights, src, dst, k) => {
    let prev = flights.filter(item => item[1] === dst)
    let min = Math.min.apply(null, prev.map(item => {
      if (item[0] === src && k > -1) {
        return item[2]
      } else if (k === 0 && item[0] !== src) {
        return Number.MAX_SAFE_INTEGER
      } else {
        return item[2] + cheap(flights, src, item[0], k - 1)
      }
    }))
    return min
  }

  let min = cheap(flights, src, dst, K)
  return min >= Number.MAX_SAFE_INTEGER ? -1 : min */

  // 2.DFS：深度优先搜素
  let res = Number.MAX_SAFE_INTEGER // 已经全局最便宜价格
  let map = {}
  let visited = new Set() // 访问过的节点集
  visited.add(src)
  for (let i = 0; i < flights.length; i++) {
    let tmp = flights[i]
    if (map[tmp[0]]) {
      map[tmp[0]].push([tmp[1], tmp[2]])
    } else {
      map[tmp[0]] = []
      map[tmp[0]].push([tmp[1], tmp[2]])
    }
  }

  helpers(map, src, dst, K, visited, 0)
  return (res === Number.MAX_SAFE_INTEGER) ? -1 : res

  // @param {*} out：当前累计的价格
  function helpers (map, cur, dst, K, visited, out) {
    if (cur === dst) {
      res = out
      return
    }
    if (K < 0 || !map[cur]) return
    for (let i = 0; i < map[cur].length; i++) {
      let a = map[cur][i]
      // 剪枝处理：已访问过，或者当前价格out加上到达这个结点需要的价格之和大于结果res，直接跳过
      if (visited.has(a[0]) || out + a[1] > res) continue
      visited.add(a[0])
      helpers(map, a[0], dst, K - 1, visited, out + a[1], res)
      visited.delete(a[0])
    }
  }

  // TODO: error NewSpace::Rebalance Allocation failed - JavaScript heap out of memory
  // 3.BFS：广度优先搜索
  /* let res = Number.MAX_SAFE_INTEGER
  let count = 0
  let map = {}
  let queue = [[src, 0]]
  for (let i = 0; i < flights.length; i++) {
    let tmp = flights[i]
    if (map[tmp[0]]) {
      map[tmp[0]].push([tmp[1], tmp[2]])
    } else {
      map[tmp[0]] = []
      map[tmp[0]].push([tmp[1], tmp[2]])
    }
  }

  while (queue.length) {
    for (let i = queue.length; i > 0; i--) {
      let top = queue.pop()
      if (top[0] === dst) {
        res = Math.min(res, top[1])
      }
      if (!map[top[0]]) {
        continue
      }
      for (let j = 0; j < map[top[0]].length; j++) {
        let tmp = map[top[0]][j]
        if (top[1] + tmp[1] > res) continue
        queue.push([tmp[0], top[1] + tmp[1]])
      }
    }
    if (count++ > K) break
  }
  return (res === Number.MAX_SAFE_INTEGER) ? -1 : res */

  // 4.TODO: DP：动态规划
}

// findCheapestPrice(4, [[4, 1, 1], [1, 2, 3], [0, 3, 2], [0, 4, 10], [3, 1, 1], [1, 4, 3]], 2, 1, 1)
// findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 1)
