import insertSort from '../../sort/insertSort'

test('insertSort', () => {
  expect(insertSort([3, 1, 2, 6, 5, 3])).toEqual([1, 2, 3, 3, 5, 6])
})
