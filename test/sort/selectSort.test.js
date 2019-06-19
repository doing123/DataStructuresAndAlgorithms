import selectSort from '../../sort/selectSort'

test('selectSort', () => {
  expect(selectSort([3, 1, 2, 6, 5, 3])).toEqual([1, 2, 3, 3, 5, 6])
})
