import { ResultCalculator } from '../ResultCalculator.js'

// const numbersToUseInTest = [42, 21, 534, 23, 32, 11, 21]
// numbersToUseInTest.map((number) => calculator.setNumberToCollection(number))

describe('ResultCalculator', () => {
  describe('Add data to collection', () => {
    test('Add number as string, should throw an Error', () => {
      const calculator = new ResultCalculator()
      expect(() => calculator.setNumberToCollection('1')).toThrow(Error)
    })

    test('Add string of characters, should throw an Error', () => {
      const calculator = new ResultCalculator()
      expect(() => calculator.setNumberToCollection('test')).toThrow(Error)
    })

    test('Add positive number, should not throw an Error', () => {
      const calculator = new ResultCalculator()
      expect(() => calculator.setNumberToCollection(42)).not.toThrow()
    })

    test('Add negative number, should not throw an Error', () => {
      const calculator = new ResultCalculator()
      expect(() => calculator.setNumberToCollection(-42)).not.toThrow()
    })

    test('Add decimal number, should not throw an Error', () => {
      const calculator = new ResultCalculator()
      expect(() => calculator.setNumberToCollection(42.42)).not.toThrow()
    })
  })

  describe('Read numbers', () => {
    const calculator = new ResultCalculator()

    // Inject data to collection
    const numbersToUseInTest = [42, 21, 534, -21]
    numbersToUseInTest.map((number) => calculator.setNumberToCollection(number))

    test('Read all numbers from collection, should return an array', () => {
      expect(calculator.getAllNumbers()).toEqual(numbersToUseInTest)
    })

    test('Highest number should be 534', () => {
      expect(calculator.getHighestNumber()).toEqual(534)
    })

    test('Lowest number should be -21', () => {
      expect(calculator.getLowestNumber()).toEqual(-21)
    })

    test('Average value should be 144', () => {
      expect(calculator.getMeanValue()).toEqual(144)
    })

    test('Mean value should be 31.5', () => {
      expect(calculator.getMedianValue()).toEqual(31.5)
    })

    test('Erased number collection should return an empty array when reading it.', () => {
      calculator.emptyNumberCollection()

      expect(calculator.getAllNumbers()).toEqual([])
    })
  })
})
