import { Calculator } from './src/Calculator.js'
import { ErrorHandler } from './src/ErrorHandler.js'

/**
 * Module for type ResultCalculator.
 *
 * @class ResultCalculator
 */
export class ResultCalculator {
  #listOfNumbers = []
  #calculator
  #errorHandler

  /**
   * Constructor for ResultCalculator.
   */
  constructor () {
    this.#calculator = new Calculator()
    this.#errorHandler = new ErrorHandler()
  }

  /**
   * Insert a number to the collection.
   *
   * @param {number} number - The number to insert.
   * @throws {TypeError}
   */
  setNumberToCollection (number) {
    this.#errorHandler.errCheckForType(number, 'number')
    this.#listOfNumbers.push(number)
  }

  /**
   * Get all numbers in the collection.
   *
   * @returns {number[]} - The numbers in the collection.
   */
  getAllNumbers () {
    const copy = []
    this.#listOfNumbers.map((number) => copy.push(number))

    return copy
  }

  /**
   * Get the highest number found in the collection.
   *
   * @throws {Error} - Throws Error if collection is empty.
   * @returns {number} - The highest number in the collection.
   */
  getHighestNumber () {
    this.#errorHandler.errCheckIfEmpty(this.#listOfNumbers)

    return this.#calculator.calculateHighestNumber(this.#listOfNumbers)
  }

  /**
   * Get the lowest number found in the collection.
   *
   * @throws {Error} - Throws Error if collection is empty.
   * @returns {number} - The lowest number in the collection.
   */
  getLowestNumber () {
    this.#errorHandler.errCheckIfEmpty(this.#listOfNumbers)

    return this.#calculator.calculateLowestNumber(this.#listOfNumbers)
  }

  /**
   * Get the average value of the collection.
   *
   * @returns {number} - The mean value.
   * @throws {Error} - If collection is empty.
   */
  getMeanValue () {
    this.#errorHandler.errCheckIfEmpty(this.#listOfNumbers)

    return this.#calculator.calculateMeanValue(this.#listOfNumbers)
  }

  /**
   * Get median value of collection.
   *
   * @returns {number} - The median value.
   * @throws {Error} - If collection is empty.
   */
  getMedianValue () {
    return 0
  }

  /**
   * Erase all items inside the collection.
   */
  emptyNumberCollection () {
    this.#listOfNumbers = []
  }

  /* #getSortedNumbersAscending(arr) {
    const arrCopy = [...arr]
    return arrCopy.sort(value, index => value - index)
  }

  #iterator() {} */
}
