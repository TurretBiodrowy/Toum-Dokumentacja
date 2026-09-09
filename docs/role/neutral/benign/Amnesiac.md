import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Amnesiac.png')} alt="Icon" align="left" style={{height: 60}} />

# Amnesiac

### *Przypomnij sobie rolę martwego gracza!*

**Przynależność: Neut Benign (Nieszkodliwy)**

**Amnesiac** na poczatek gry startuje bez prawdziwej roli oraz możliwości wygrania.\
Podczas gry, jeśli znajdzie ciało gracza, może przypomnieć sobie jego kim był, zyskując rolę z tego ciała i jej możliwość wygranej.

### Umiejętności

|                                             Przycisk                                             | Umiejętność  |                            Opis                            |         Typ         |
|:------------------------------------------------------------------------------------------------:|:------------:|:----------------------------------------------------------:|:-------------------:|
| <img src={useBaseUrl('/img/PrzyciskiNeut/AmneRemember.png')} alt="Button" style={{width: 50}} /> | **Remember** | Pozwala Amnesiacowi przypomnieć sobie rolę martwego gracza | Interakcja z ciałem |

### Opcje

| Ustawienie                          |                                   Opis                                   |     Typ     |     Domyślnie      |               Wartość               |
|-------------------------------------|:------------------------------------------------------------------------:|:-----------:|:------------------:|:-----------------------------------:|
| Inherit Faction Modifiers           |     Ustawia czy Amnesiac przypomina sobie także modyfikator frakcji      | Przełącznik |        Tak         |              Tak / Nie              |
| Show Arrows Pointing To Dead Bodies |        Ustawia czy Amnesiac dostaje strzałki w stronę ciał graczy        | Przełącznik |        Tak         |              Tak / Nie              |
| ┗ Time After Death Arrow Appears    | Ile sekund Amnesiac musi odczekać zanim dostanie strzałkę w stronę ciała |    Czas     |         5s         |               0s-15s                |
| Can be Impostor Assassin            |            Decyduje czy Amne->Impostor będzie mieć Assassina             |   String    | If Imp is Assassin | Always / If Imp is Assassin / Never |
| Can be Neutral Killing Assassin     |         Decyduje czy Amne->Neutral Killer będzie mieć Assassina          |   String    |       Always       | Always / If NK is Assassin / Never  |
