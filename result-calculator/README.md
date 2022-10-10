# result-calculator

Result-calculator is a module that lets you safely and temporarily store numbers in a list, and then use it for statistical analysis or result provider. The module serves an interface that will let you get a quick access to the most common statistical operations, like standard deviation, mean, highest and lowest number and so on. For a more complex analysis, there is an operation for normal distribution aswell.

### ` Note: This is a project done as an assignment in the course 1dv610 @Linnaeus University.`

---

## Installation

```
npm i result-calculator
```

## Usage

The module let you store numbers dynamically in a local variable, to later be used to analyze the data. 

````
import { ResultCalculator } from result-calculator

const numbersToUse = [ 4, 2, 3, 3]

const resultCalculator = new ResulutCalculator()

for (const number of numbersToUse) {
  resultCalculator.setNumberToCollection(number)
}

console.log(resultCalculator.getMedianValue()) // => 3

````

# Methods



## `setNumberToCollection`

---
Use this to add a number into the list. Since update 1.1.0 you can add multiple numbers at once as an array.
 
Params:
> number: A number to be added into the list

Throws:
> TypeError: Will be thrown if argument is not of type `number`

### Example


 ````
 // You can add a set of data, through pass an array of numbers.
 const resultCalculator = new Calculator()
 const data = [4, 2, 3, 3, 4, 1, 5]

resultCalculator.setNumberToCollection(data)
 
 ````

 ---

## `getAllNumbers`

 ---
 Use this to list all numbers currently in the collection.

 Throws: 
> Error: If the collection is empty.

 Returns:
> Array<number>: all numbers in the collection.

 
 ### Example
 ````
 // Data in collection: [-51, 42, 24]
 console.log(calculator.getAllNumbers()) // => [-51, 42, 24]
 ````

 ---

## `getHighestNumber`

 ---
 Use this to get the highest number of the collection.

 Throws: 
> Error: If the collection is empty.

 Returns:
> number: max number of the collection.

 
 ### Example
 ````
 // Data in collection: [-51, 42, 24]
 console.log(calculator.getHighestNumber()) // => 42
 ````

 ---

## `getLowestNumber`

 ---
 Use this to get the lowest number of the collection.

 Throws: 
> Error: If the collection is empty.

 Returns:
> number: min number of the collection.

 
 ### Example
 ````
 // Data in collection: [-51, 42, 24]
 console.log(calculator.getLowestNumber()) // => -51
 ````

 ---

## `getMeanValue`

 ---
 Use this to get mean (average) of the collection.

 Throws: 
> Error: If the collection is empty.

 Returns:
> number: mean of the collection.

 
 ### Example
 ````
 // Data in collection: [-51, 42, 24]
 console.log(calculator.getMeanValue()) // => 5
 ````

 ---

## `getMedianValue`

 ---
 Use this to get median of the collection.

 Throws: 
> Error: If the collection is empty.

 Returns:
> number: median of the collection.

 
 ### Example
 ````
 // Data in collection: [-51, 42, 24]
 console.log(calculator.getMedianValue()) // => 24
 ````

 ---

## `getModeValue`

 ---
 Use this to get mode of the collection.

 Throws: 
> Error: If the collection is empty.

 Returns:
> Array<number>: mode of the collection.

 
 ### Example
 ````
 // Data in collection: [-51, 42, 42, 24]
 console.log(calculator.getMedianValue()) // => [ 24 ]

 // Data in collection: [-51, 42, 42, 24, 24]
 console.log(calculator.getMedianValue()) // => [ 42, 24 ]
 ````

 ---

## `getStdDeviationValue`

 ---
 Use this to get standard deviation of the collection.

 Throws: 
> Error: If the collection is empty.

 Returns:
> number: mode of the collection.

 
 ### Example
 ````
 // Data in collection: [1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5]
 console.log(calculator.getStandardDeviation()) // => 1.2977713690461004
 ````

 ---

## `getNormalDistribution`


 ---
 Use this to get a summary of the data in the collection. In the returned object, here is all information needed to write a normal distribution diagram.
 

 Throws:
> Error: Will be thrown if collection is empty.

 Returns:
> object: data to be used for analysis, i.e Normal distribution. 

 ### Example
 ````
 // Data in collection: [1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5]
 
 const data = calculator.getNormalDistributionData()
 console.log(data) 

 /* Will give this object ==> {
  mean: 3,
   stdDeviation: 1.2977713690461004,
   standardError: 0.29772917102591473,
   marginOfError: 0.5835491752107929,
   confidenceInterval: { 
       upperBound: 3.583549175210793,
       lowerBound: 2.416450824789207 
     },
    frequencyTable: {
      1: 3,
      2: 4,
      3: 5,
      4: 4,
      5: 3
    }
   }
 */
 ````

 ---

## `eraseCollectionData`
 ---
 Use this to erase all the data in the collection.


 ````
 // Data in collection: [-51, 42, 24]
 calculator.eraseCollectionData()
 console.log(calculator.getAllNumbers()) // => []
 ````

 ---

 # For developers

 ## Usage

 To use the code and develop it further yourself you can fork the project [here](https://github.com/cMarHen/1DV610-Laboration-1/tree/master/result-calculator). When done, make sure you are in the `/result-calculator/` folder, and then run `npm i` to install test framework and lintings. 

 ````
 npm run test // => Run all test suites
 npm run lint // => Lint the code
 ````

 ### To use the example app:

  In the terminal, write `cd ./example-app` to go to the example-app folder. There you need to `npm install` to install the result-calculator package from npm.

 ```
 npm start // => Run the program
 ```