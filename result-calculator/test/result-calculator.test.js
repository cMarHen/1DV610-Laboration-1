import { ResultCalculator } from '../ResultCalculator.js'

const calculator = new ResultCalculator()

const numbersToUseInTest = [42, 21, 534, 23, 32, 11, 21]
numbersToUseInTest.map((number) => calculator.setNumberToCollection(number))

describe('read numbers', () => {
  test('should first read all numbers in the collection', () => {
    const numbersFoundInCollection = calculator.getAllNumbers()

    expect(numbersFoundInCollection).toEqual(expect.arrayContaining(numbersToUseInTest))
  })
})
