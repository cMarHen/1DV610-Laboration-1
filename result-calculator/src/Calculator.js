import { ErrorHandler } from './ErrorHandler.js'
import { Sorter } from './Sorter.js'

/**
 *
 */
export class Calculator {
  #sorter
  #errorHandler

  /**
   * Constructor for Calculator.
   */
  constructor () {
    this.#sorter = new Sorter()
    this.#errorHandler = new ErrorHandler()
  }

  /**
   * Calculate highest number in an array.
   *
   * @param {number[]} arr - Array of number.
   * @returns {number} - The highest number.
   */
  getHighestNumber (arr) {
    this.#errorHandler.errCheckIfArrayIsEmpty([...arr])

    let highestNumber = arr[0]
    for (const number of arr) {
      if (number > highestNumber) {
        highestNumber = number
      }
    }
    return highestNumber
  }

  /**
   * Calculate lowest number in an array.
   *
   * @param {number[]} arr - Array of number.
   * @returns {number} - The lowest number.
   */
  getLowestNumber (arr) {
    this.#errorHandler.errCheckIfArrayIsEmpty([...arr])

    let lowestNumber = arr[0]
    for (const number of arr) {
      if (number < lowestNumber) {
        lowestNumber = number
      }
    }
    return lowestNumber
  }

  /**
   * Calculate the mean value of an array.
   *
   * @param {number[]} arr - Array of number(s)
   * @returns {number} - The mean value.
   */
  getMeanValue (arr) {
    this.#errorHandler.errCheckIfArrayIsEmpty([...arr])

    let totalValue = 0
    for (const number of arr) {
      totalValue += number
    }

    return (totalValue / arr.length)
  }

  /**
   * Calculate the median value of an array.
   *
   * @param {number[]} arr - Array of numbers.
   * @returns {number} - The median value.
   */
  getMedianValue (arr) {
    this.#errorHandler.errCheckIfArrayIsEmpty([...arr])
    const sortedList = this.#sorter.sortArrayDescending([...arr])

    let median = 0
    // Calculation method differs if amount of numbers are even.
    if (sortedList.length % 2 === 0) {
      median = (sortedList[(sortedList.length) / 2 - 1] + sortedList[(sortedList.length) / 2]) / 2
    } else {
      median = sortedList[(sortedList.length - 1) / 2]
    }
    return median
  }

  /**
   * Calculate mode value of an array of numbers.
   *
   * @param {number[]} arr - The array to get.
   * @returns {number[]} - An array with one or more numbers as mode.
   */
  getModeValue (arr) {
    this.#errorHandler.errCheckIfArrayIsEmpty([...arr])
    const frequencyObject = this.getFrequency([...arr])

    const maxFrequency = this.#sorter.sortObject(frequencyObject).pop()

    const numberWithTheHighestFrequency = Object.keys(frequencyObject)
      .filter((number) => frequencyObject[number] === maxFrequency)
      .map(Number)

    return numberWithTheHighestFrequency
  }

  /**
   * Calculate standard deviation of an array of numbers.
   *
   * @param {number[]} arr - The array to get.
   * @returns {number} - The standard deviation of a set of numbers.
   * @memberof Calculator
   */
  getStandardDeviation (arr) {
    this.#errorHandler.errCheckIfArrayIsEmpty([...arr])
    const mean = this.getMeanValue([...arr])

    let sum = 0
    for (const number of arr) {
      sum += Math.pow(number - mean, 2)
    }
    return Math.sqrt(sum / (arr.length))
  }

  /**
   * Calculate frequency of an array of numbers.
   *
   * @param {number[]} arr - The array to get.
   * @returns {object} - The frequency with the numbers as property and frequency as value.
   */
  getFrequency (arr) {
    this.#errorHandler.errCheckIfArrayIsEmpty([...arr])

    const frequency = {}
    for (const number of arr) {
      if (frequency[number]) {
        frequency[number]++
      } else {
        frequency[number] = 1
      }
    }
    return frequency
  }

  /**
   * Summarize a normal distribution object by frequency in a list of numbers.
   *
   * @param {number[]} arr - List of numbers
   * @returns {object} - A set of information to be used as normal distribution.
   */
  summarizeNormalDistributionData (arr) {
    this.#errorHandler.errCheckIfArrayIsEmpty([...arr])

    const mean = this.getMeanValue(arr)
    const stdDeviation = this.getStandardDeviation(arr)
    const standardError = this.#getStandardError(arr, stdDeviation)
    const marginOfError = this.#getMarginOfError(standardError)
    const confidenceInterval = this.#getConfidenceInterval(mean, marginOfError)
    const frequencyTable = this.getFrequency(arr)
    return {
      mean,
      stdDeviation,
      standardError,
      marginOfError,
      confidenceInterval,
      frequencyTable
    }
  }

  /**
   * Calculate coefficient of variation.
   *
   * @param {number[]} arr - The array to analyze.
   * @returns {number} - The coefficient of variation as in percent.
   */
  getCoefficientOfVariation (arr) {
    this.#errorHandler.errCheckIfArrayIsEmpty([...arr])

    const mean = this.getMeanValue([...arr])
    const stdDev = this.getStandardDeviation([...arr])

    return stdDev / mean
  }

  /**
   * Calculate margin of error. Will use a confidence level on 95% with a z-score of 1.96.
   *
   * @param {number} standardError - Standard error to be used.
   * @returns {number} - Margin of error.
   */
  #getMarginOfError (standardError) {
    return 1.96 * standardError
  }

  /**
   * Calculates the confidence interval based on a margin of error.
   *
   * @param {number} mean - Mean to be used.
   * @param {number} marginOfError - Margin of error to be used.
   * @returns {object} - Represent the confidence interval.
   * @memberof Calculator
   */
  #getConfidenceInterval (mean, marginOfError) {
    return {
      upperBound: mean + marginOfError,
      lowerBound: mean - marginOfError
    }
  }

  /**
   * Calculates standard error based on frequency in a list of numbers.
   *
   * @param {number[]} arr - The array to calculate.
   * @param {number} stdDev -
   * @returns {number} - Standard error.
   */
  #getStandardError (arr, stdDev) {
    return stdDev / Math.sqrt(arr.length)
  }
}
