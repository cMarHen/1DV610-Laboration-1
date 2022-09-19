# Reflektion

För att få en bra överblick över modulen har jag använt mig av en objekt-orienterad design. Min moduls syfte är att göra det enkelt för en användare att lägga in nummer i en lista, för att sedan kunna göra en statistisk analys av den. 

Jag har använt mig av ett namngivningssystem där jag namnger metoder efter vad för operation som görs, och vad den gör. För metodnamnet `getMeanValue`, gäller att `get` är typen av operation, och `MeanValue` är vad operationen gör. Tanken där är att sekvensen ska ge en berättelse. (Robert. C Martin, Clean Code, s40). 


- Undvika sidoeffekter (s.44)
- Använda en abstraktionsnivå per funktion (s.36)
- Glömde först bort att använda issues, skrev istället ner enhetstester för saker jag ville göra.

## Namngivningsreflektioner

| Namn och förklaring | Reflektioner och regler från Clean Code |
| :--- |  :--- |
| **getNormalDistribution** <br /> Metodnamn i interfacet som ger en sammanställning av data som behövs för att skapa ett diagram för normaldistribution. | **Avoid Disinformation** <br /> Namnet är missvisande, eftersom normaldistribution är ett diagram. Informationen man får från metoden är bara datan du behöver för att skapa ett diagram. <br /> **Add Meaningful Context** <br /> Att använda prefix i form av ett verb vid namngivningen kan vara bra enligt boken. I det här faller visar det på en `readonly` metod. |
| **ResultCalculator** <br /> Huvudklassen i modulen. | **Class Names** <br /> ResultCalculator är ett substantiv, som det bör. <br /> **Avoid Disinformation** <br /> Man kan fundera på om ResultCalculator verkligen är en bra beskrivning. För mig som själv kommit på idén är det såklart rimligt, men för en utomstående tror jag inte det är lika självklart vad en resultaträknare gör. |
| **listOfNumbers** <br /> Variabelnamn på lista av nummer | **Pick One Word per Concept** <br /> På andra ställen i koden använder jag ordet `collection` där `list` används i det här variabelnamnet. Det blir förvirrande, eftersom man lockas att tro att det är två olika saker. |
| **getAllNumbers** <br /> Metodnamn i interfacet, som ger en lista över alla nummber som finns i Collection | **Add Meaningful Context** <br /> Enligt den här regeln är namngivningen inte bra, den är väldigt generell och otydlig. Till modulen hör en lista som kan fyllas med nummer. Men i framtiden kanske det blir ytterligare en lista, hur ska man separera dem med den här namngivningen?  <br /> **Use Solution Doman Names** <br /> En bättre namngivning hade nog varit getNumbersFromCollection. |
| **eraseCollectionData** <br /> Metodnamn för att rensa listan av nummer. | **Don't be cute** <br /> `erase` tycker jag är på gränsen till slangord, och bör således undvikas enligt denna regel.   <br /> **Use Solution Domain Names** <br /> Ett bättre alternativ hade varit `delete`, som är mer konvention när något ska tas bort. |

### Reflektion

Använder mycket `arr`, kanske ska ändra mig där?

I ResultCalculator finns getNormalDistribution, som anropar metoden summarizeNormalDistributionData ??

## Funktionsreflektioner
| Namn och förklaring | Antal rader | Reflektioner och regler från Clean Code |
| --- |  --- | --- |
| **summarizeNormalDistributionData** <br /> Hämtar värden genom ett antal metodanrop och returnerar dem som ett objekt. | 16 | **One Level Of Abstraction per Function** <br /> Den här metoden sammanställer resultat, genom att anropa andra metoder som gör själva uträkningarna. |
| **calculateMedianValue** <br /> Räknar ut medianen utifrån en lista av nummer. | 9 | **Do One Thing** <br /> Eventuellt kan man tänka sig att den här metoden gör två saker, eftersom beroende på antalet, får den räkna ut medianen på två olika sätt. <br /> **Have No Side Effects** <br /> Arrayen som skickas in modifieras inte på något sätt.  |
| **calculateFrequency** <br /> Räknar ut och skapar en frekvenstabell utifrån en lista av nummer. | 11 | **Exceptions to returning Error Codes** <br /> Istället för att modulen på något sätt blandar sig i hur fel hanteras, får användaren på ett sätt som passar den, ta hand om ett fel som kastas. <br /> **Error Handling is One Thing** <br /> Felhanteringen som görs i modulen, görs via metodanrop, för att låta ett annat objekt lösa problemet. |
| **calculateStandardDeviation** <br /> Räknar ut standardavvikelse utifrån en lista av nummer. | 8 | Inga sidoeffekter |
| **calculateModeValue** <br /> Räknar ut lägesmåttet utifrån en lista av nummer. | 7 | **Do One Thing** <br /> Det känns som att den här metoden gör ganska mycket. Först sammanställer den informationen den behöver, sen räknar den ut lägesmåttet. <br /> **One Level Of Abstraction per Function** <br /> Först är det sammanställning, som är ganska enkel att förstå, sedan kommer en uträkning med kedjade array-metoder som blir väldigt komplex att förstå. Det blir konstigt att läsa den här metoden. |