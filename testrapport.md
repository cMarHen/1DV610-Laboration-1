# Testrapport

### Översikt

Den här modulen har enbart testats med automatiska enhetstester, och testerna har drivit utvecklingen (TDD). Till min hjälp har jag använt Jest som testramverk. Det finns inga issues kopplade till testerna.

| Test suite | Amount of tests | Status |
| --- | :---: | --- |
| ResultCalculator | 10 | ✅ |
| Calculator | 19 | ✅ |
| ErrorHandler | 7 | ✅ |
| Sorter | 2 | ✅ |

---

>![test-passed](images\test-passed.jpg)

# Test suites

---

## ResultCalculator

I ResultCalculator finns det tre "sub suites".
- ### `"Add data to collection"`
> Här testas möjligheten att lägga till ett nummer till listan. Det stora fokuset ligger på att man bara ska kunna lägga till datatypen "number".

- ### `"Read calculated data"`
> Även om själva uträkningarna testas i suiten Calculator, så behöver det finnas en del tester som kontrollerar att uträkningarna sker på rätt sätt ihop med samlingen av nummer som hålls av klassen "ResultCalculator".

- ### `"Read normal distribution"`
> Här testas beteendet i ett tänkt användningsfall, för att kontrollera att de nummer man lägger in i samlingen räknas ut på rätt sätt. 



## Calculator

## ErrorHandler

## Sorter
