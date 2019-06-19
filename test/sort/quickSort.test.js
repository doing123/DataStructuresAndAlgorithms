import quickSort from '../../sort/quickSort'

test('quickSort', () => {
  expect(quickSort([9, 3, 7, 6, 8, 1, 2, 4, 6, 5, 3]))
    .toEqual([1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9])
})
