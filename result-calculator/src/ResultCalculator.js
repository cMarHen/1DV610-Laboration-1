export class ResultCalculator {
  #listOfNumbers = []
  constructor () {
  }

  setNumberToCollection(number) {
    if (typeof number === 'number') {
      this.#listOfNumbers.push(number)
    } else {
      throw new RangeError('The list should only contain numbers.')
    }
  }

  getAllNumbers() {
    const copy = []
    this.#listOfNumbers.map((number) => copy.push(number))

    return copy
  }

  getHighestNumber() {
    if (this.#listOfNumbers.length <= 0) {
      throw new Error('There is no numbers in the collection')
    }

    let highestNumber = this.#listOfNumbers[0]
    this.#listOfNumbers.map((number) => {
      if (number > highestNumber) {
        highestNumber = number
      }
    })

    return highestNumber
  }

  getLowestNumber() {
    if (this.#listOfNumbers.length <= 0) {
      throw new Error('There is no numbers in the collection')
    }
    
    let lowestNumber = this.#listOfNumbers[0]
    this.#listOfNumbers.map((number) => {
      if (number < lowestNumber) {
        lowestNumber = number
      }
    })

    return lowestNumber
  }

  getMeanValue() {

  }

  getMedianValue() {

  }

  emptyNumberCollection() {
    this.#listOfNumbers = []
  }

  #getSortedNumbers() {

  }

  #iterator() {}

  #errorHandler() {}
}