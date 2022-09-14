// A class specific for calculations.

import { Sorter } from './Sorter.js'

/**
 *
 */
export class Calculator {
  #sorter

  /**
   * Constructor for Calculator.
   */
  constructor () {
    this.#sorter = new Sorter()
  }

  /**
   * Calculate highest number in an array.
   *
   * @param {number[]} arr - Array of number.
   * @returns {number} - The highest number.
   */
  calculateHighestNumber (arr) {
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
  calculateLowestNumber (arr) {
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
  calculateMeanValue (arr) {
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
  calculateMedianValue (arr) {
    const sortedArray = this.#sorter.sortArray([...arr], 1)

    let median = 0
    if (sortedArray.length % 2 === 0) {
      median = (sortedArray[(sortedArray.length) / 2 - 1] + sortedArray[(sortedArray.length) / 2]) / 2
    } else {
      median = sortedArray[(sortedArray.length - 1) / 2]
    }

    return median
  }

  /**
   * Calculate mode value of an array of numbers.
   *
   * @param {number[]} arr - The array to calculate.
   * @returns {number[]} - An array of one or more numbers.
   */
  calculateModeValue (arr) {
    const frequencyObject = this.calculateFrequency([...arr])

    const maxFrequency = this.#sorter.sortObject(frequencyObject).pop()

    return Object.keys(frequencyObject)
      .filter((number) => frequencyObject[number] === maxFrequency)
      .map(Number)
  }

  /**
   * Calculate standard deviation of an array of numbers.
   *
   * @param {number[]} arr - The array to calculate.
   * @returns {number} - The standard deviation of a set of numbers.
   * @memberof Calculator
   */
  calculateStandardDeviation (arr) {
    const mean = this.calculateMeanValue([...arr])

    let sum = 0

    for (const number of arr) {
      sum += Math.pow(number - mean, 2)
    }

    return Math.sqrt(sum / (arr.length))
  }

  /**
   * Calculate frequency of an array of numbers.
   *
   * @param {number[]} arr - The array to calculate.
   * @returns {object} - The frequency with the numbers as property and frequency as value.
   */
  calculateFrequency (arr) {
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
    const mean = this.calculateMeanValue(arr)
    const stdDeviation = this.calculateStandardDeviation(arr)
    const standardError = this.#calculateStandardError(arr, stdDeviation)
    const marginOfError = this.#calculateMarginOfError(standardError)
    const confidenceInterval = this.#calculateConfidenceInterval(mean, marginOfError)
    const frequencyTable = this.calculateFrequency(arr)
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
  calculateCoefficientOfVariation (arr) {
    const mean = this.calculateMeanValue([...arr])
    const stdDev = this.calculateStandardDeviation([...arr])

    return stdDev / mean
  }

  /**
   * Calculate margin of error. Will use a confidence level on 95% with a z-score of 1.96.
   *
   * @param {number} standardError - Standard error to be used.
   * @returns {number} - Margin of error.
   */
  #calculateMarginOfError (standardError) {
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
  #calculateConfidenceInterval (mean, marginOfError) {
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
  #calculateStandardError (arr, stdDev) {
    return stdDev / Math.sqrt(arr.length)
  }
}
