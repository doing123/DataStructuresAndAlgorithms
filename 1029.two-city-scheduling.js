/*
 * @lc app=leetcode id=1029 lang=javascript
 *
 * [1029] Two City Scheduling
 */
/**
 * @param {number[][]} costs
 * @return {number}
 */

 // https://blog.csdn.net/grllery/article/details/89682473
var twoCitySchedCost = function(costs) {
    costs.sort((a, b) => {
      return (a[0] - a[1]) - (b[0] - b[1])
    })
    let len = Math.floor(costs.length / 2)
    let res = 0
    for(let i  = 0; i < len; i++) {
      res += costs[i][0] + costs[i + len][1]
    }

    return res
};

