# Testrapport

### Översikt

Den här modulen har enbart testats med automatiska enhetstester, och testerna har drivit utvecklingen (TDD). Till min hjälp har jag använt Jest som testramverk. Det finns inga issues kopplade till testerna. För att själv köra testerna behöver du navigera till katalogen `/result-calculator/`. I terminalen skriver du sedan `npm install`, för att lokalt installera paketet. När det är färdigt skrivs `npm run test` i terminalen, för att köra testerna. Vill du få en sammanställning av coverage så skriver du `npm run test:coverage` istället.

| Test suite | Amount of tests | Status |
| --- | :---: | --- |
| ResultCalculator | 10 | ✅ |
| Calculator | 19 | ✅ |
| ErrorHandler | 7 | ✅ |
| Sorter | 2 | ✅ |

---

>![coverage](images/coverage.jpeg)

# Test suites

Här nedan ges en detaljerad beskrivning av testsuiterna, och de sub-suiter som finns. En kort beskrivning av syftet för varje suite finns tillsammans med en bild för hur testet genomförs, och vilken data som skickas in och förväntas tillbaka. Klicka på varje suite för att expandera vyn.

<details>
<summary>

## ResultCalculator
</summary>



### `"Add data to collection"`
Här testas möjligheten att lägga till ett nummer till listan. Det stora fokuset ligger på att man bara ska kunna lägga till datatypen "number".

![inject-data](images/inject-data.jpeg)

### `"Read calculated data"`
Även om själva uträkningarna testas i suiten Calculator, så behöver det finnas en del tester som kontrollerar att uträkningarna sker på rätt sätt ihop med samlingen av nummer som hålls av klassen "ResultCalculator", som är den datan som skickas ut till användaren.

![inject-data](images/read-data.jpeg)

### `"Read normal distribution"`
Här testas beteendet i ett tänkt användningsfall, för att kontrollera att de nummer man lägger in i samlingen räknas ut på rätt sätt. 

![inject-data](images/end-product-data.jpeg)

</details>


<details>
<summary>

## Calculator
</summary>


### `"Calculate descriptive statistics"`
I den här sub-suiten testas metoderna som gör själva uträkningarna i modulen. 

![inject-data](images/calculator.jpeg)

### `"Calculate with invalid data"`
Den här sub-suiten testar metoderna med felaktig input.

![inject-data](images/calculator-invalid-input.jpeg)

### `"Calculate a normal distribution data with decimal input"`
Här testas att ett förväntat objekt med data kan skapas även med decimala tal.

![inject-data](images/calculator-norm-dist.jpeg)

### `"Calculate frequency"`
Här testas att en frekvenstabell kan skapas både med decimala tal, och heltal.

![inject-data](images/calculator-frequency.jpeg)

</details>

<details>
<summary>

## ErrorHandler
</summary>

### `"Error check number"`

![inject-data](images/error-handler-number.jpeg)

### `"Error check empty array"`

![inject-data](images/error-handler-array.jpeg)
</details>

<details>
<summary>

## Sorter
</summary>

![inject-data](images/sorter.jpeg)
</details>
