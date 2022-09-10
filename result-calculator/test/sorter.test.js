import { Sorter } from '../src/Sorter.js'

describe('Sorter', () => {
  const numbersToUseInTest = [42, 21, 534, -21]
  const sorter = new Sorter()
  test('Ascending order should be [-21, 21, 42, 534]', () => {
    const sortedArray = sorter.sortArray(numbersToUseInTest, 1)

    expect(sortedArray).toEqual([-21, 21, 42, 534])
  })

  test('Descending order should be [534, 42, 21, -21]', () => {
    const sortedArray = sorter.sortArray(numbersToUseInTest, 2)

    expect(sortedArray).toEqual([534, 42, 21, -21])
  })
})
