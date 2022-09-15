import { ErrorHandler } from '../src/ErrorHandler.js'

describe('ErrorHandler', () => {
  const errorHandler = new ErrorHandler()

  describe('Error check number', () => {
    test('enter null should throw an Error', () => {
      expect(() => errorHandler.errCheckForTypeNumber(null)).toThrow()
    })
    test('enter undefined should throw an Error', () => {
      expect(() => errorHandler.errCheckForTypeNumber(undefined)).toThrow()
    })
    test('enter "1" should throw an Error', () => {
      expect(() => errorHandler.errCheckForTypeNumber('1')).toThrow()
    })
    test('enter NaN should throw an Error', () => {
      expect(() => errorHandler.errCheckForTypeNumber(NaN)).toThrow()
    })
    test('enter 4 should not throw an Error', () => {
      expect(() => errorHandler.errCheckForTypeNumber(4)).not.toThrow()
    })
  })

  describe('Error check empty array', () => {
    test('enter [] should throw an Error', () => {
      expect(() => errorHandler.errCheckIfArrayIsEmpty([])).toThrow()
    })
    test('enter [1] should not throw an Error', () => {
      expect(() => errorHandler.errCheckIfArrayIsEmpty([1])).not.toThrow()
    })
  })
})
