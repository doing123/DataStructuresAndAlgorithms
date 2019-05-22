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
var sumEvenAfterQueries = function(A, queries) {
    const result = []
    for(let i = 0; i < queries.length; i++) {
      let index = queries[i][1]
      let tmp = queries[i][0]
      A[index] += tmp

      let sum = 0
      for(let j = 0; j < A.length; j++) {
        if(A[j] % 2 === 0) {
          sum += A[j]
        }
      }
      result.push(sum)
    }

    return result
};

