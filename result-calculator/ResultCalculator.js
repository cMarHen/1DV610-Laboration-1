import { Calculator } from './src/Calculator.js'
import { ErrorHandler } from './src/ErrorHandler.js'
import { Sorter } from './src/Sorter.js'

/**
 * Module for type ResultCalculator.
 *
 * @class ResultCalculator
 */
export class ResultCalculator {
  #listOfNumbers = []
  #calculator
  #errorHandler
  #sorter

  /**
   * Constructor for ResultCalculator.
   */
  constructor () {
    this.#calculator = new Calculator()
    this.#errorHandler = new ErrorHandler()
    this.#sorter = new Sorter()
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
   * @param {number} [sort=0] - Sort type. 0 as default.
   * << 0: default value, no sorting, 1: ascending order, 2: descending order >>
   * @returns {number[]} - The numbers in the collection.
   */
  getAllNumbers (sort = 0) {
    let copy = []
    this.#listOfNumbers.map((number) => copy.push(number))

    if (sort !== 0) {
      copy = this.#sorter.sortArray(sort)
    }

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
