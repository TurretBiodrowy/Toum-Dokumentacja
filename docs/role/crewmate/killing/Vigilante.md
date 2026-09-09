import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Vigilante.png')} alt="Icon" align="left" style={{height: 60}} />

# Vigilante

### *Poznaj role Impostorów by zastrzelić ich na spotkaniu!*

**Przynależność: Crew Killing (Zabijający)**

**Vigilante** podczas spotkania może spróbować zgadnąć rolę złego gracza, aby go zabić.\
Jeśli jednak zgadnie źle i nie będzie miał już żadnych bezpiecznych strzałów, umrze.

### Umiejętności

|                                              Przycisk                                              | Umiejętność |                                              Opis                                               |           Użycie            |
|:--------------------------------------------------------------------------------------------------:|:-----------:|:-----------------------------------------------------------------------------------------------:|:---------------------------:|
| <img src={useBaseUrl('/img/PrzyciskiCrew/VigilanteGuess.png')} alt="Button" style={{width: 50}} /> |  **Guess**  | Pozwala Vigilante'owi strzelić w gracza na spotkaniu, zabijając go jeśli poprawnie zgadnie role | Na graczu podczas spotkania |

### Opcje

| Ustawienie                           |                               Opis                                |     Typ     | Domyślnie |  Wartość  |
|--------------------------------------|:-----------------------------------------------------------------:|:-----------:|:---------:|:---------:|
| Number Of Guesses                    |       Ile razy na grę Vigilante może strzelać na spotkaniu        |    Ilość    |     5     |   1-15    |
| Can Guess More Than Once Per Meeting |  Ustawia czy Vigilante może zgadywać więcej niż raz na spotkanie  | Przełącznik |    Tak    | Tak / Nie |
| Can Guess Neutral Benign             |     Ustawia czy Vigilante może strzelać w rolę Neutral Benign     | Przełącznik |    Tak    | Tak / Nie |
| Can Guess Neutral Evil Roles         |      Ustawia czy Vigilante może strzelać w rolę Neutral Evil      | Przełącznik |    Tak    | Tak / Nie |
| Can Guess Neutral Killing Roles      |    Ustawia czy Vigilante może strzelać w rolę Neutral Killing     | Przełącznik |    Tak    | Tak / Nie |
| Can Guess Neutral Outlier Roles      |    Ustawia czy Vigilante może strzelać w rolę Neutral Outlier     | Przełącznik |    Tak    | Tak / Nie |
| Can Guess Killer Modifiers           |    Ustawia czy Vigilante może strzelać w modyfikatory zabójców    | Przełącznik |    Tak    | Tak / Nie |
| Can Guess Alliances                  | Ustawia czy Vigilante może strzelać w modyfikatory przynależności | Przełącznik |    Tak    | Tak / Nie |
| Safe Shots Available                 |    Ile razy na grę Vigilante może się pomylić przy zgadywaniu     |    Ilość    |     3     |    0-3    |