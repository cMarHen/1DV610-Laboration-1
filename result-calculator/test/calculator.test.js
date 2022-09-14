import { Calculator } from '../src/Calculator.js'

describe('Calculator', () => {
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
