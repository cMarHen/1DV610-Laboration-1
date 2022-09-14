import { ResultCalculator } from "../../ResultCalculator.js"
import { ReadLine } from "./ReadLine.js"
import { UserInterfaceText } from "./UserInterfaceText.js"

export class App {
  #resultCalculator
  #userInterfaceText
  #readLine

  constructor () {
    this.#resultCalculator = new ResultCalculator()
    this.#userInterfaceText = new UserInterfaceText()
    this.#readLine = new ReadLine()
    this.main()
  }

  main() {
    try {
      this.#run()
    } catch (error) {
      console.error(error)
    }
  }

  async #run() {
    let userInput = 0
    do {
      this.#printMainMenu()
      userInput = await this.#readLine.questionUserForNumber('Please choose an option from the menu: \n')

      await this.#mainMenu(userInput)
    } while (userInput >= 1 && userInput <= 4);

    console.info('Exiting application... ')
    this.#readLine.closeReadLine()
  }

  async #mainMenu(userInput) {
    if (userInput === 1) {
      const numberToAdd = await this.#readLine.questionUserForNumber('Please enter a number to add to the collection: \n')
      this.#resultCalculator.setNumberToCollection(numberToAdd)
      console.log('Added ' + numberToAdd + ' to the collection. \n')
    } else if (userInput === 2) {
      const allNumbers = this.#resultCalculator.getAllNumbers().join(', ')
      console.info(allNumbers)
    } else {
      return
    }
    return
  }

  #printMainMenu() {
    console.info(this.#userInterfaceText.getMainMenuText())
  }
}