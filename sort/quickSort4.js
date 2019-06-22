export default (arr) => {
  let swap = (arr, i, j) => {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }
  // 找到划分交换位置
  let findIndex = (arr, left, right) => {
    let flag = arr[left]
    let idx = left + 1
    for (let i = idx; i < right; i++) {
      if (arr[i] < flag) {
        swap(arr, idx, i)
        idx++
      }
    }
    swap(arr, left, idx - 1)
    return idx
  }

  let sort = (arr, left, right) => {
    if (left < right) {
      let index = findIndex(arr, left, right)
      sort(arr, left, index - 1)
      sort(arr, index, right)
    }
  }
  sort(arr, 0, arr.length - 1)
  return arr
}
