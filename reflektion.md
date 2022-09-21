# Reflektion

### Inledning

ResultCalculator är en modul vars syfte är att göra det enkelt för en användare att lägga in nummer i en lista, för att sedan kunna göra en statistisk analys av den. 

## Namngivningsreflektioner

| Namn och förklaring | Reflektioner och regler från Clean Code |
| :--- |  :--- |
| **getNormalDistribution** <br /> Metodnamn i interfacet som ger en sammanställning av data som behövs för att skapa ett diagram för normaldistribution. | **Avoid Disinformation** <br /> Namnet är missvisande, eftersom normaldistribution är ett diagram. Informationen man får från metoden är bara datan du behöver för att skapa ett diagram. <br /> **Add Meaningful Context** <br /> Att använda prefix i form av ett verb vid namngivningen kan vara bra enligt boken. I det här faller visar det på en `readonly` metod. |
| **ResultCalculator** <br /> Huvudklassen i modulen. | **Class Names** <br /> ResultCalculator är ett substantiv, som det bör. <br /> **Avoid Disinformation** <br /> Man kan fundera på om ResultCalculator verkligen är en bra beskrivning. För mig som själv kommit på idén är det såklart rimligt, men för en utomstående tror jag inte det är lika självklart vad en resultaträknare gör. |
| **listOfNumbers** <br /> Variabelnamn på lista av nummer | **Pick One Word per Concept** <br /> På andra ställen i koden använder jag ordet `collection` där `list` används i det här variabelnamnet. Det blir förvirrande, eftersom man lockas att tro att det är två olika saker. |
| **getAllNumbers** <br /> Metodnamn i interfacet, som ger en lista över alla nummber som finns i Collection | **Add Meaningful Context** <br /> Enligt den här regeln är namngivningen inte bra, den är väldigt generell och otydlig. Till modulen hör en lista som kan fyllas med nummer. Men i framtiden kanske det blir ytterligare en lista, hur ska man separera dem med den här namngivningen?  <br /> **Use Solution Doman Names** <br /> En bättre namngivning hade nog varit getNumbersFromCollection. |
| **eraseCollectionData** <br /> Metodnamn för att rensa listan av nummer. | **Don't be cute** <br /> `erase` tycker jag är på gränsen till slangord, och bör således undvikas enligt denna regel.   <br /> **Use Solution Domain Names** <br /> Ett bättre alternativ hade varit `delete`, som är mer konvention när något ska tas bort. |

---

## Funktionsreflektioner
| Namn och förklaring | Antal rader | Reflektioner och regler från Clean Code |
| --- |  --- | --- |
| **summarizeNormalDistributionData** <br /> Hämtar värden genom ett antal metodanrop och returnerar dem som ett objekt. | 16 | **One Level Of Abstraction per Function** <br /> Den här metoden sammanställer resultat, genom att anropa andra metoder som gör själva uträkningarna. |
| **calculateMedianValue** <br /> Räknar ut medianen utifrån en lista av nummer. | 9 | **Do One Thing** <br /> Eventuellt kan man tänka sig att den här metoden gör två saker, eftersom beroende på antalet, får den räkna ut medianen på två olika sätt. <br /> **Have No Side Effects** <br /> Arrayen som skickas in modifieras inte på något sätt.  |
| **calculateFrequency** <br /> Räknar ut och skapar en frekvenstabell utifrån en lista av nummer. | 11 | **Exceptions to returning Error Codes** <br /> Istället för att modulen på något sätt blandar sig i hur fel hanteras, får användaren på ett sätt som passar den, ta hand om ett fel som kastas. <br /> **Error Handling is One Thing** <br /> Felhanteringen som görs i modulen, görs via metodanrop, för att låta ett annat objekt lösa problemet. |
| **calculateStandardDeviation** <br /> Räknar ut standardavvikelse utifrån en lista av nummer. | 8 | **Have No Side Effects** <br /> Det är viktigt att den ursprungliga arrayen inte modifieras, utan behåller sitt tillstånd. Därför kopieras listan innan den skickas vidare. <br /> **Don't Repeat Yourself** <br /> Felhanteringen och medianuträknandet görs på flera ställen, därför bryts det ut i egna metoder för att förhinda kodduplicering, och göra det enklare att underhålla. |
| **calculateModeValue** <br /> Räknar ut lägesmåttet utifrån en lista av nummer. | 7 | **Do One Thing** <br /> Det känns som att den här metoden gör ganska mycket. Först sammanställer den informationen den behöver, sen räknar den ut lägesmåttet. <br /> **One Level Of Abstraction per Function** <br /> Först är det sammanställning, som är ganska enkel att förstå, sedan kommer en uträkning med kedjade array-metoder som blir väldigt komplex att förstå. Det blir konstigt att läsa den här metoden. |

## Slutsats

Jag har använt mig bokens namngivningssystem där jag namnger metoder efter vilken operation som görs, och vad den gör. För metodnamnet `getMeanValue`, gäller att `get` är typen av operation, och `MeanValue` är vad operationen gör. Tanken där är att sekvensen ska ge en berättelse. (Robert. C Martin, Clean Code, s40). Enligt boken kan jag bryta mot regeln om att undvika noice word's här. Mina metodnamn till metoder i klassen `Calculator` som returnerar ett värde, avslutas ofta med `Value`, vilket kan ses som ett typiskt noice word. Jag har varit osäker i hur jag ska namnge dessa metoder. Jag har landat i att jag vill att det ska bli tydligt att den returnerar ett värde, och jag har försökt vara konsekvent i hela klassen hur jag namnger. 

De flesta metoderna metoderna i klasserna utanför det öppna interfacet tar en array som argument. Parameternamnet här är `arr`. Det är en vana jag har haft med mig sen jag började utbildningen, och efter att ha läst boken så känner jag att jag borde vara mer specifik i vad det faktiskt är. Man kan komma till slutsatsen att det *kanske* är en array, men inte mer om vad den innehåller. Om man följer regeln **Use Solution Domain Name** tillsammans med reflektionen över att listan av nummer borde heta `collection`, så vore ett bättre parameternamn `collectionOfNumbers`.

Jag har också försökt att använda mig av regeln **Common Monadic Forms** där metodnamnet visar vad jag vill göra med argumentet. T.ex `getMeanValue(arr)`, där jag enligt föregående reflektion borde ha förbättrat ytterligare med `getMeanValue(collectionOfNumbers)` för att göra det ännu tydligare vad jag vill göra. 

Något som jag har varit dålig på tidigare är att separera abstraktionsnivåerna, där jag blandar detaljerade uträkningar med mer grundläggande koncept. I den här modulen har jag aktivt försökt att bryta ut logiken så mycket jag kan i olika ansvarsområden, något jag tycker att jag har lyckats bra med. Jag upplever också att jag tycker det är roligare att skriva kod på det här sättet. Något jag är väldigt nöjd över är att interfacet som användaren använder, egentligen bara är metoder som returnerar andra metodanrop. 
