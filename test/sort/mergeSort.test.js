import mergeSort from './../../sort/mergeSort'

test('mergeSort', () => {
  expect(mergeSort([3, 1, 2, 6, 5, 3])).toEqual([1, 2, 3, 3, 5, 6])
})
