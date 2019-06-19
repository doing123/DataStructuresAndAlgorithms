import bubbleSortTwoWays from '../../sort/bubbleSort_twoWays'

test('bubbleSort_twoWays', () => {
  expect(bubbleSortTwoWays([3, 1, 2, 6, 5, 3])).toEqual([1, 2, 3, 3, 5, 6])
})
