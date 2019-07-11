/*
 * @lc app=leetcode id=451 lang=javascript
 *
 * [451] Sort Characters By Frequency
 */
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  // 1.map映射，values数组排序，再查找
  /* let map = {}
  for (let i = 0; i < s.length; i++) {
    let str = s[i]
    if (map[str]) {
      map[str]++
    } else {
      map[str] = 1
    }
  }

  let arr = Object.values(map).sort((a, b) => b - a)
  let result = ''
  arr.forEach(item => {
    Object.keys(map).forEach(k => {
      if (map[k] === item) {
        result += k.repeat(item)
        // delete map[k]
        this.map.delete(k)
      }
    })
  })

  return result */

  // 2.TODO:堆排序
  // Test:不通过  Actual: eetr  Expected: eert
  // Submit 又是成功的。神奇了
  let heap = new Heap(s)
  return heap.toString()
}

// 定义 heap
class Heap {
  constructor (str) {
    let map = new Map()
    for (let i = 0; i < str.length; i++) {
      let tmp = str[i]
      if (map.has(tmp)) {
        map.set(tmp, map.get(tmp) + 1)
      } else {
        map.set(tmp, 1)
      }
    }
    this.map = map
    this.data = Array.from(map.values())
  }
  sort () {
    let iArr = this.data
    let n = iArr.length
    if (n <= 1) {
      return iArr
    } else {
      for (let i = Math.floor(n / 2); i >= 0; i--) {
        Heap.maxHeapify(iArr, i, n)
      }
      for (let j = 0; j < n; j++) {
        Heap.swap(iArr, 0, n - 1 - j)
        Heap.maxHeapify(iArr, 0, n - 1 - j - 1)
      }
      return iArr
    }
  }
  toString () {
    let arr = this.sort()
    let str = []
    while (arr.length) {
      let top = arr.pop()
      for (let [k, v] of this.map) {
        if (v === top) {
          str.push(k.repeat(v))
          this.map.delete(k)
          break
        }
      }
    }
    return str.join('')
  }
  // 交换两个元素
  static swap (arr, a, b) {
    if (a === b) {
      return
    }
    [arr[a], arr[b]] = [arr[b], arr[a]]
  }
  // 构建最大堆的过程
  static maxHeapify (Arr, i, size) {
    // 左节点（索引）
    let l = i * 2 + 1
    // 右节点
    let r = i * 2 + 2
    let largest = i
    // 父节点 i 和左节点 l 做比较取最大
    if (l <= size && Arr[l] > Arr[largest]) {
      largest = l
    }
    // 右节点和最大值比较
    if (r <= size && Arr[r] > Arr[largest]) {
      largest = r
    }
    if (largest !== i) {
      Heap.swap(Arr, i, largest)
      Heap.maxHeapify(Arr, largest, size)
    }
  }
}
