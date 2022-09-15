import { Calculator } from '../src/Calculator.js'

describe('Calculator', () => {
  describe('Calculate descriptive statistics', () => {
    const calculator = new Calculator()

    // Inject data to collection
    const numbersToUseInTest = [-21, -3, 2, 10, 15, 16, 21, 32, 42, 42, 63, 24]

    test('Calculate Highest number should be 534', () => {
      expect(calculator.calculateHighestNumber(numbersToUseInTest)).toEqual(63)
    })

    test('Calculate Lowest number should be -21', () => {
      expect(calculator.calculateLowestNumber(numbersToUseInTest)).toEqual(-21)
    })

    test('Calculate Mean value should be 144', () => {
      expect(calculator.calculateMeanValue(numbersToUseInTest)).toEqual(20.25)
    })

    test('Calculate Mode value should be 42', () => {
      expect(calculator.calculateModeValue(numbersToUseInTest)).toEqual([42])
    })

    test('Calculate Median value should be 31.5', () => {
      expect(calculator.calculateMedianValue(numbersToUseInTest)).toEqual(18.5)
    })

    test('Calculate Standard deviation value should be close to 21.7030', () => {
      expect(calculator.calculateStandardDeviation(numbersToUseInTest)).toBeCloseTo(21.7030)
    })

    test('Calculate Coefficient of variation value should be close to 1.0717', () => {
      expect(calculator.calculateCoefficientOfVariation(numbersToUseInTest)).toBeCloseTo(1.0717)
    })
  })

  describe('Calculate with invalid data', () => {
    const calculator = new Calculator()
    const emptyArray = []
    test('calculateMeanValue with empty array should throw an Error', () => {
      expect(() => calculator.calculateMeanValue(emptyArray)).toThrow()
    })
    test('calculateHighestNumber with empty array should throw an Error', () => {
      expect(() => calculator.calculateHighestNumber(emptyArray)).toThrow()
    })
    test('calculateLowestNumber with empty array should throw an Error', () => {
      expect(() => calculator.calculateLowestNumber(emptyArray)).toThrow()
    })
    test('calculateMedianValue with empty array should throw an Error', () => {
      expect(() => calculator.calculateMedianValue(emptyArray)).toThrow()
    })
    test('calculateModeValue with empty array should throw an Error', () => {
      expect(() => calculator.calculateModeValue(emptyArray)).toThrow()
    })
    test('calculateStandardDeviation with empty array should throw an Error', () => {
      expect(() => calculator.calculateStandardDeviation(emptyArray)).toThrow()
    })
    test('calculateFrequency with empty array should throw an Error', () => {
      expect(() => calculator.calculateFrequency(emptyArray)).toThrow()
    })
    test('summarizeNormalDistributionData with empty array should throw an Error', () => {
      expect(() => calculator.summarizeNormalDistributionData(emptyArray)).toThrow()
    })
    test('calculateCoefficientOfVariation with empty array should throw an Error', () => {
      expect(() => calculator.calculateCoefficientOfVariation(emptyArray)).toThrow()
    })
  })

  describe('Calculate a normal distribution data', () => {
    test('Passing decimal numbers should return correct calculations', () => {
      const calculator = new Calculator()
      const numbersWithDecimalsToUse = [1.432, 2.4, 3.75, 3.75, 2.334, 4.874, 3.25]

      const expectedObject = {
        mean: 3.11,
        stdDeviation: 1.06,
        standardError: 0.40,
        marginOfError: 0.79,
        confidenceInterval: { upperBound: 3.90, lowerBound: 2.33 },
        frequencyTable: { 1.432: 1, 2.4: 1, 3.75: 2, 2.334: 1, 4.874: 1, 3.25: 1 }
      }

      const objectToTest = calculator.summarizeNormalDistributionData(numbersWithDecimalsToUse)

      expect(objectToTest.mean).toBeCloseTo(expectedObject.mean)
      expect(objectToTest.stdDeviation).toBeCloseTo(expectedObject.stdDeviation)
      expect(objectToTest.standardError).toBeCloseTo(expectedObject.standardError)
      expect(objectToTest.marginOfError).toBeCloseTo(expectedObject.marginOfError)
      expect(objectToTest.confidenceInterval.upperBound).toBeCloseTo(expectedObject.confidenceInterval.upperBound)
      expect(objectToTest.confidenceInterval.lowerBound).toBeCloseTo(expectedObject.confidenceInterval.lowerBound)
      expect(objectToTest.frequencyTable).toEqual(expectedObject.frequencyTable)
    })
  })

  describe('Calculate frequency', () => {
    const calculator = new Calculator()
    const numbersToUse = [1, 2, 3, 3, 2, 4, 3]
    const numbersWithDecimalsToUse = [1.432, 2.4, 3.75, 3.75, 2.334, 4.874, 3.25]

    test('Passing [1, 2, 3, 3, 2, 4, 3] should return a sorted object', () => {
      const objectToExpect = {
        3: 3,
        2: 2,
        4: 1,
        1: 1
      }

      expect(calculator.calculateFrequency(numbersToUse)).toEqual(objectToExpect)
    })

    test('Passing [1.432, 2.4, 3.75, 3.75, 2.334, 4.874, 3.25] should return a sorted object', () => {
      const objectToExpect = {
        3.75: 2,
        4.874: 1,
        3.25: 1,
        2.4: 1,
        2.334: 1,
        1.432: 1
      }

      expect(calculator.calculateFrequency(numbersWithDecimalsToUse)).toEqual(objectToExpect)
    })
  })
})
