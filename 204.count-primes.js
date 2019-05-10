/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 */
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    // let result = 0
    // const arr = new Array(n).fill(true)

    // for(let i = 2; i < n; i++) {
    //     if(arr[i]) {
    //         result++
    //         for(let j = 2; i * j < n; j++) {
    //             arr[i * j] = false
    //         }
    //     }
    // }

    // return result

    let count = 0
    const dict = []
    const len = Math.floor(Math.sqrt(n))

    for(let i = 2; i <= len; i++) {
        for(let j = 2; i * j <= n; j++) {
            dict[i * j] = true
        }
    }
    
    for(let i = 2; i < n; i++) {
        if(!dict[i]) count++
    }

    return count
};

