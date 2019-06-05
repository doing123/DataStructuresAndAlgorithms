/*
 * @lc app=leetcode id=447 lang=javascript
 *
 * [447] Number of Boomerangs
 */
/**
 * @param {number[][]} points
 * @return {number}
 */

// https://blog.csdn.net/awawfwfw/article/details/53081423?utm_source=blogxgwz4
var numberOfBoomerangs = function (points) {
  let result = 0
  for (let i = 0;i < points.length;i++) {
    let x = points[i][0]
    let y = points[i][1]
    const map = new Map()
    for (let j = 0;j < points.length;j++) {
      let x1 = points[j][0]
      let y1 = points[j][1]
      const dist = (x1 - x) * (x1 - x) + (y1 - y) * (y1 - y)
      // const dist = Math.pow((x1 - x), 2) + Math.pow((y1 - y), 2)
      if (map.has(dist)) {
        map.set(dist, map.get(dist) + 1)
      } else {
        map.set(dist, 1)
      }
    }
    for (let val of map.values()) {
      result += val * (val - 1)
    }
  }

  return result
};

