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
    this.#errorHandler.errCheckForTypeNumber(number)
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
    return this.#calculator.calculateHighestNumber(this.#listOfNumbers)
  }

  /**
   * Get the lowest number found in the collection.
   *
   * @throws {Error} - Throws Error if collection is empty.
   * @returns {number} - The lowest number in the collection.
   */
  getLowestNumber () {
    return this.#calculator.calculateLowestNumber(this.#listOfNumbers)
  }

  /**
   * Get the average value of the collection.
   *
   * @returns {number} - The mean value.
   * @throws {Error} - If collection is empty.
   */
  getMeanValue () {
    return this.#calculator.calculateMeanValue(this.#listOfNumbers)
  }

  /**
   * Get median value of collection.
   *
   * @returns {number} - The median value.
   * @throws {Error} - If collection is empty.
   */
  getMedianValue () {
    return this.#calculator.calculateMedianValue(this.#listOfNumbers)
  }

  /**
   * Get the most frequent value from the collection.
   *
   * @throws {Error} - Throws Error if collection is empty.
   * @returns {number[]} - The mode value.
   */
  getModeValue () {
    return this.#calculator.calculateModeValue(this.#listOfNumbers)
  }

  /**
   * Get the standard deviation value from the collection.
   *
   * @throws {Error} - Throws Error if collection is empty.
   * @returns {number} - The standard deviation value.
   */
  getStandardDeviationValue () {
    return this.#calculator.calculateStandardDeviation(this.#listOfNumbers)
  }

  /**
   * Get standard normal distribution from the collection.
   *
   * @throws {Error} - Throws Error if collection is empty.
   * @returns {object} - Data representing the normal distribution.
   */
  getNormalDistribution () {
    return this.#calculator.summarizeNormalDistributionData(this.#listOfNumbers)
  }

  /**
   * Get the variation coefficient of the collection.
   *
   * @throws {Error} - Throws Error if collection is empty.
   * @returns {number} - The variation coefficient of collection.
   */
  getCoefficientOfVariationValue () {
    return this.#calculator.calculateCoefficientOfVariation(this.#listOfNumbers)
  }

  /**
   * Erase all items inside the collection.
   */
  eraseCollectionData () {
    this.#listOfNumbers = []
  }
}
