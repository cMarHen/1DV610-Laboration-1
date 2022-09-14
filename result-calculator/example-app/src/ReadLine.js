/** 
 * Module of type ReadLine.
 * 
 * @author Martin Henriksson
 */

import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

export class ReadLine {
  #readlineInterface

  constructor() {
    this.#readlineInterface = readline.createInterface({ input, output })
  }

  /**
   * Question the user through command line.
   *
   * @param {string} question - The question to ask in the console.
   * @returns {Promise<string>} - The answer given by user as string.
   */
  async questionUserForString(question) {
    const userInput = await this.#readlineInterface.question(question)

    return userInput
  }

  /**
   * Question the user through command line.
   *
   * @param {string} question - The question to ask in the console.
   * @returns {Promise<number>} - The answer given by user as number.
   */
     async questionUserForNumber(question) {
      const userInput = await this.#readlineInterface.question(question)

      return Number(userInput)
    }

  closeReadLine() {
    this.#readlineInterface.close()
  }
}