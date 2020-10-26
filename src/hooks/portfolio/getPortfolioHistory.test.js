import {sumHistories} from './getPortfolioHistory'

const array1 = [[0, 1], [1, 2]]
const array2 = [[1, 2], [3, 4]]
const array3 = [array1, array2]
test('Summation function works correctly', () => {
  expect(sumHistories(array3)).toBe([[1, 3], [3, 6]])
})