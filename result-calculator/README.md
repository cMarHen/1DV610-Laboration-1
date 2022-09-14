# result-calculator

## By: Martin Henriksson

Result-calculator is a module that is free of dependency and lets you safely and temporarily store numbers in a list, and then use it for statistical analysis or result provider. The module serves an interface that will let you get a quick access to the most common statistical operations, like standard deviation, mean, highest and lowest number and so on. For a more complex analysis, there is an operation for normal distribution aswell.

---

# Get started

Import as ES6 module:
````
import { ResultCalculator } from result-calculator
````

# Methods



## `setNumberToCollection`

> ---
> Use this to add a number into the list. You currenty can ***not*** add multiple numbers at once.
> 
> Params:
>> number: A number to be added into the list
>
> Throws:
>> TypeError: Will be thrown if argument is not of type `number`
>
> ### Example
> ````
> // To add a set of data to the collection, you need to iterate and push it number by number.
> const resultCalculator = new Calculator()
> const data = [4, 2, 3, 3, 4, 1, 5]
> for (const number of data) {
>  resultCalculator.setNumberToCollection(number)
> }
> 
> ````
>
> ---

## `getAllNumbers`

> ---
> Use this to list all numbers currently in the collection.
>
> Throws: 
>> Error: If the collection is empty.
>
> Returns:
>> Array<number>: all numbers in the collection.
>
> 
> ### Example
> ````
> // Data in collection: [-51, 42, 24]
> console.log(calculator.getAllNumbers()) // => [-51, 42, 24]
> ````
>
> ---

## `getHighestNumber`

> ---
> Use this to get the highest number of the collection.
>
> Throws: 
>> Error: If the collection is empty.
>
> Returns:
>> number: max number of the collection.
>
> 
> ### Example
> ````
> // Data in collection: [-51, 42, 24]
> console.log(calculator.getHighestNumber()) // => 42
> ````
>
> ---

## `getLowestNumber`

> ---
> Use this to get the lowest number of the collection.
>
> Throws: 
>> Error: If the collection is empty.
>
> Returns:
>> number: min number of the collection.
>
> 
> ### Example
> ````
> // Data in collection: [-51, 42, 24]
> console.log(calculator.getLowestNumber()) // => -51
> ````
>
> ---

## `getMeanValue`

> ---
> Use this to get mean (average) of the collection.
>
> Throws: 
>> Error: If the collection is empty.
>
> Returns:
>> number: mean of the collection.
>
> 
> ### Example
> ````
> // Data in collection: [-51, 42, 24]
> console.log(calculator.getMeanValue()) // => 5
> ````
>
> ---

## `getMedianValue`

> ---
> Use this to get median of the collection.
>
> Throws: 
>> Error: If the collection is empty.
>
> Returns:
>> number: median of the collection.
>
> 
> ### Example
> ````
> // Data in collection: [-51, 42, 24]
> console.log(calculator.getMedianValue()) // => 24
> ````
>
> ---

## `getModeValue`

> ---
> Use this to get mode of the collection.
>
> Throws: 
>> Error: If the collection is empty.
>
> Returns:
>> Array<number>: mode of the collection.
>
> 
> ### Example
> ````
> // Data in collection: [-51, 42, 42, 24]
> console.log(calculator.getMedianValue()) // => [ 24 ]
>
> // Data in collection: [-51, 42, 42, 24, 24]
> console.log(calculator.getMedianValue()) // => [ 42, 24 ]
> ````
>
> ---

## `getStdDeviationValue`

> ---
> Use this to get standard deviation of the collection.
>
> Throws: 
>> Error: If the collection is empty.
>
> Returns:
>> number: mode of the collection.
>
> 
> ### Example
> ````
> // Data in collection: [1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5]
> console.log(calculator.getStandardDeviation()) // => 1.2977713690461004
> ````
>
> ---

## `getNormalDistribution`


> ---
> Use this to get a summary of the data in the collection. In the returned object, there is all information needed to write a normal distribution diagram.
> 
>
> Throws:
>> Error: Will be thrown if collection is empty.
>
> Returns:
>> object: data to be used for analysis, i.e Normal distribution. 
>
> ### Example
> ````
> // Data in collection: [1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5]
> 
> const data = calculator.getNormalDistributionData()
> console.log(data) 
>
> /* Will give this object ==> {
>   mean: 3,
>   stdDeviation: 1.2977713690461004,
>   standardError: 0.29772917102591473,
>   marginOfError: 0.5835491752107929,
>   confidenceInterval: { 
  >      upperBound: 3.583549175210793,
  >      lowerBound: 2.416450824789207 
>     },
>    frequencyTable: {
>      1: 3,
>      2: 4,
>      3: 5,
>      4: 4,
>      5: 3
>    }
>   }
> */
> ````
>
> ---

## `eraseCollectionData`
> ---
> Use this to erase all the data in the collection.
>
>
> ````
> // Data in collection: [-51, 42, 24]
> calculator.eraseCollectionData()
> console.log(calculator.getAllNumbers()) // => []
> ````
>
> ---