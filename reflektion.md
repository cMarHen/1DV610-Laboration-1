# Reflektion

För att få en bra överblick över modulen har jag använt mig av en objekt-orienterad design. Min moduls syfte är att göra det enkelt för en användare att lägga in nummer i en lista, för att sedan kunna göra en statistisk analys av den. 

Jag har använt mig av ett namngivningssystem där jag namnger metoder efter vad för operation som görs, och vad den gör. För metodnamnet `getMeanValue`, gäller att `get` är typen av operation, och `MeanValue` är vad operationen gör. Tanken där är att sekvensen ska ge en berättelse. (Robert. C Martin, Clean Code, s40). 


- Undvika sidoeffekter (s.44)
- Använda en abstraktionsnivå per funktion (s.36)
- Glömde först bort att använda issues, skrev istället ner enhetstester för saker jag ville göra.

## Namngivningsreflektioner

| Namn och förklaring | Reflektioner och regler från Clean Code |
| --- |  --- |
| **getNormalDistribution** <br /> Metodnamn i interfacet som ger en sammanställning av data som behövs för att skapa ett diagram för normaldistribution. | **Avoid Disinformation** <br /> Namnet är missvisande, eftersom normaldistribution är ett diagram. Informationen man får från metoden är bara datan du behöver för att skapa ett diagram. |
| **ResultCalculator** <br /> Klassnamn på huvudklassen i modulen. | -- |
| **listOfNumbers** <br /> Variabelnamn på lista av nummer | Reflektion |
| **getAllNumbers** <br /> Metodnamn i interfacet, som ger en lista över alla nummber som finns i Collection | **Add Meaningful Context** <br /> Enligt den här regeln är namngivningen inte bra. Till modulen hör en **Use Solution Doman Names** <br /> En bättre namngivning hade nog varit getNumbersInCollection. |
| **methodName** <br /> Description... | Reflektion |

## Funktionsreflektioner
| Namn och förklaring | Antal rader | Reflektioner och regler från Clean Code |
| --- |  --- | --- |
| **summarizeNormalDistributionData** <br /> Description... | - | Reflektion |
| **calculateMedianValue** <br /> Description... | 8 | Reflektion |
| **calculateFrequency** <br /> Description... | - | Reflektion |
| **sortArray** <br /> Description... | - | Inga sidoeffekter |
| **methodName** <br /> Description... | - | Reflektion |