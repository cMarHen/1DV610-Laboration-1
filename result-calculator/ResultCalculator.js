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
   * @memberof ResultCalculator
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
   * @memberof ResultCalculator
   */
  getLowestNumber () {
    this.#errorHandler.errCheckIfEmpty(this.#listOfNumbers)

    return this.#calculator.calculateLowestNumber(this.#listOfNumbers)
  }

  /* getMeanValue() {
    if (this.#listOfNumbers.length <= 0) {
      throw new Error('There is no numbers in the collection')
    }

    const valueOfNumbersInTotal = this.#listOfNumbers.reduce((value, index) => value + index, 0)

    return (valueOfNumbersInTotal / this.#listOfNumbers.length)
  }

  getMedianValue() {

  } */

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
