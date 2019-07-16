import Heap from '../../sort/heapSort'

test('heapSort', () => {
  const heap = new Heap([3, 1, 2, 6, 5, 3])
  expect(heap.sort()).toEqual([1, 2, 3, 3, 5, 6])
})
