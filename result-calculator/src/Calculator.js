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
}
