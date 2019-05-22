/*
 * @lc app=leetcode id=985 lang=javascript
 *
 * [985] Sum of Even Numbers After Queries
 */
/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */

 // https://blog.csdn.net/fuxuemingzhu/article/details/87714171
 
var sumEvenAfterQueries = function(A, queries) {
    /* const result = []
    for(let i = 0; i < queries.length; i++) {
      // let index = queries[i][1]
      // let tmp = queries[i][0]
      A[queries[i][1]] += queries[i][0]

      let sum = 0
      for(let j = 0; j < A.length; j++) {
        if(A[j] % 2 === 0) {
          sum += A[j]
        }
      }
      result.push(sum)
    }

    return result */

    const result = []
    let sum = 0
    A.forEach(item => {
      if(item % 2 === 0) sum += item
    })

    queries.forEach(item => {
      if(A[item[1]] % 2 === 0) sum -= A[item[1]]

      A[item[1]] += item[0]
      if(A[item[1]] % 2 === 0) {
        sum += A[item[1]]
      }
      result.push(sum)
    })

    return result
};

