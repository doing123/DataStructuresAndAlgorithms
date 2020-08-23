/**
 *
 * @param {number[]} arr
 */
/* function heapSort (arr) {
  function swap (arr, a, b) {
    if (a === b) {
      return
    }
    [arr[a], arr[b]] = [arr[b], arr[a]]
  }

  function maxHeapify (arr, index, heapSize) {
    let iMax
    let iLeft
    let iRight
    while (true) {
      iMax = index
      iLeft = 2 * index + 1
      iRight = 2 * (index + 1)

      if (iLeft < heapSize && arr[index] < arr[iLeft]) {
        iMax = iLeft
      }
      if (iRight < heapSize && arr[iMax] < arr[iRight]) {
        iMax = iRight
      }

      if (iMax !== index) {
        swap(arr, iMax, index)
        index = iMax
      } else {
        break
      }
    }
  }

  function buildMaxHeap (arr) {
    let i
    let iParent = Math.floor(arr.length / 2) - 1

    for (let i = iParent; i >= 0; i--) {
      maxHeapify(arr, i, arr.length)
    }
  }

  function sort (arr) {
    buildMaxHeap(arr)

    for (let i = arr.length - 1; i >= 0; i--) {
      swap(arr, 0, i)
      maxHeapify(arr, 0, i)
    }

    return arr
  }

  return sort(arr)
} */

class Heap {
  static swap (arr, a, b) {
    if (a === b) {
      return
    }
    [arr[a], arr[b]] = [arr[b], arr[a]]
  }

  static maxHeapify (arr, index, heapSize) {
    let iMax
    let iLeft
    let iRight
    while (true) {
      iMax = index
      iLeft = index * 2 + 1
      iRight = (index + 1) * 2
      if (iLeft < heapSize && arr[iLeft] > arr[index]) {
        iMax = iLeft
      }
      if (iRight < heapSize && arr[iMax] < arr[iRight]) {
        iMax = iRight
      }

      if (iMax !== index) {
        Heap.swap(arr, index, iMax)
        index = iMax
      } else {
        break
      }
    }
  }

  buildMaxHeap (arr) {
    let i
    let iParent = Math.floor(arr.length / 2) - 1

    // 从最后一个非叶子结点开始，从右至左，从下至上进行调整 构建最大堆
    for (let i = iParent; i >= 0; i--) {
      Heap.maxHeapify(arr, i, arr.length)
    }
  }

  constructor (arr) {
    this.data = arr
  }

  sort () {
    const arr = this.data

    // 将待排序序列构造成一个大顶堆，此时，整个序列的最大值就是堆顶的根节点。
    this.buildMaxHeap(arr)

    // 将堆顶元素与末尾元素进行交换，使末尾元素最大。然后继续调整堆，再将堆顶元素与末尾元素交换，得到第二大元素。如此反复进行交换、重建、交换。
    for (let i = arr.length - 1; i >= 0; i--) {
      Heap.swap(arr, 0, i)
      Heap.maxHeapify(arr, 0, i)
    }
    return arr
  }
}

export default Heap
