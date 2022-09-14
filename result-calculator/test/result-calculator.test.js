import { ResultCalculator } from '../ResultCalculator.js'

// const numbersToUseInTest = [42, 21, 534, 23, 32, 11, 21]
// numbersToUseInTest.map((number) => calculator.setNumberToCollection(number))

describe('ResultCalculator', () => {
  describe('Add data to collection', () => {
    test('Add number as string, should throw an Error', () => {
      const calculator = new ResultCalculator()
      expect(() => calculator.setNumberToCollection('1')).toThrow(Error)
    })

    test('Add a Nan, should throw an Error', () => {
      const calculator = new ResultCalculator()
      expect(() => calculator.setNumberToCollection(NaN)).toThrow(Error)
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

  describe('Read calculated data', () => {
    const calculator = new ResultCalculator()

    // Inject data to collection
    const numbersToUseInTest = [-21, -3, 2, 10, 15, 16, 21, 32, 42, 42, 63, 24]
    numbersToUseInTest.map((number) => calculator.setNumberToCollection(number))

    test('Read all numbers from collection, should return an array', () => {
      expect(calculator.getAllNumbers()).toEqual(numbersToUseInTest)
    })

    test('Highest number should be 534', () => {
      expect(calculator.getHighestNumber()).toEqual(63)
    })

    test('Lowest number should be -21', () => {
      expect(calculator.getLowestNumber()).toEqual(-21)
    })

    test('Mean value should be 144', () => {
      expect(calculator.getMeanValue()).toEqual(20.25)
    })

    test('Mode value should be 42', () => {
      expect(calculator.getModeValue()).toEqual([42])
    })

    test('Median value should be 31.5', () => {
      expect(calculator.getMedianValue()).toEqual(18.5)
    })

    test('Standard deviation value should be close to 21.7030', () => {
      expect(calculator.getStdDeviationValue()).toBeCloseTo(21.7030)
    })

    test('Coefficient of variation value should be close to 1.0717', () => {
      expect(calculator.getCoefficientOfVariationValue()).toBeCloseTo(1.0717)
    })

    test('Erased number collection should return an empty array when reading it.', () => {
      calculator.eraseCollectionData()

      expect(calculator.getAllNumbers()).toEqual([])
    })
  })

  describe('Read normal distribution', () => {
    test('Normal distribution', () => {
      const calculator = new ResultCalculator()
      const numbersToUse = [1, 1, 1, 1, 1, 1, 1, 1]

      numbersToUse.map((number) => calculator.setNumberToCollection(number))

      const testData = calculator.getNormalDistribution()

      expect(testData.mean).toBe(1)
      expect(testData.stdDeviation).toBe(0)
      expect(testData.marginOfError).toBe(0)
      expect(testData.confidenceInterval.upperBound).toBe(1)
      expect(testData.confidenceInterval.lowerBound).toBe(1)
    })

    test('Normal distribution', () => {
      const calculator = new ResultCalculator()
      const numbersToUse = [1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5]

      numbersToUse.map((number) => calculator.setNumberToCollection(number))

      const testData = calculator.getNormalDistribution()

      expect(testData.mean).toBeCloseTo(3)
      expect(testData.stdDeviation).toBeCloseTo(1.297)
      expect(testData.marginOfError).toBeCloseTo(0.583)
      expect(testData.confidenceInterval.upperBound).toBeCloseTo(3.583)
      expect(testData.confidenceInterval.lowerBound).toBeCloseTo(2.416)
      expect(testData.frequencyTable).toEqual({ 1: 3, 2: 4, 3: 5, 4: 4, 5: 3 })
    })
  })
})
