# Reflektion

För att få en bra överblick över modulen har jag använt mig av en objekt-orienterad design. Min moduls syfte är att göra det enkelt för en användare att lägga in nummer i en lista, för att sedan kunna göra en statistisk analys av den. 

Jag har använt mig av ett namngivningssystem där jag namnger metoder efter vad för operation som görs, och vad den gör. För metodnamnet `getMeanValue`, gäller att `get` är typen av operation, och `MeanValue` är vad operationen gör. Tanken där är att sekvensen ska ge en berättelse enligt råd av (Robert. C Martin: Clean Code, s40). 


- Undvika sidoeffekter (s.44)
- Använda en abstraktionsnivå per funktion (s.36)
- Switch längst ner i koden.
-

## Namngivningsreflektioner

| Namn och förklaring | Reflektioner och regler från Clean Code |
| --- |  --- |
| **getNormalDistribution** <br /> Metodnamn i interfacet som ger en sammanställning av data som behövs för att skapa ett diagram för normaldistribution. | **Avoid Disinformation** <br /> Namnet är missvisande, eftersom normaldistribution är ett diagram. Informationen man får från metoden är bara datan du behöver för att skapa ett diagram. |
| **ResultCalculator** <br /> Klassnamn på huvudklassen i modulen. | -- |
| **methodName** <br /> Description... | Reflektion |
| **methodName** <br /> Description... | Reflektion |
| **methodName** <br /> Description... | Reflektion |

## Funktionsreflektioner
| Namn och förklaring | Antal rader | Reflektioner och regler från Clean Code |
| --- |  --- | --- |
| **summarizeNormalDistributionData** <br /> Description... | - | Reflektion |
| **calculateMedianValue** <br /> Description... | 8 | Reflektion |
| **calculateFrequency** <br /> Description... | - | Reflektion |
| **sortArray** <br /> Description... | - | Reflektion |
| **methodName** <br /> Description... | - | Reflektion |