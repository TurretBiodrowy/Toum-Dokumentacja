import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Vampire.png')} alt="Icon" align="left" style={{height: 60}} />

# Vampire

### *Przekonwertuj Crewmate'ów i zagryź resztę*

**Przynależność: Neut Killing (Zabijający)**

**Vampire** może ugryźć innego gracza aby spróbować przekonwertować go w **Vampire**'a.\
Jeśli ugryziony gracz był Crewmate'em, bądź ustawioną przynależnością neutralną stanie się on Vampire'em.\
Gdy ustawiony limit **Vampire**'ów zostanie osiągnięty, każde nastepne ugryzienie zabije.

### Umiejętności

|                                           Przycisk                                           | Umiejętność |                                                                                    Opis                                                                                    |   Użycie   |
|:--------------------------------------------------------------------------------------------:|:-----------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------:|
| <img src={useBaseUrl('/img/PrzyciskiNeut/VampBite.png')} alt="Button" style={{width: 50}} /> |  **Bite**   | Pozwala ugryźć gracza, zmieniając go w Vampire'a jeśli był jednym z ustawionych ról, oraz nie było już maksymalnej ilość żyjących Vampire'ów. W przeciwnym razie zabije go | Na graczu  |
| <img src={useBaseUrl('/img/PrzyciskiNeut/VampVent.png')} alt="Button" style={{width: 55}} /> |  **Vent**   |                                                                 Pozwala przemieszczać się pomiędzy Ventami                                                                 | Na ventcie |

### Opcje

| Ustawienie                      |                                                  Opis                                                   |     Typ     | Domyślnie |   Wartość   |
|---------------------------------|:-------------------------------------------------------------------------------------------------------:|:-----------:|:---------:|:-----------:|
| Bite Cooldown                   |                           Czas który Vampire musi odczekać przed użyciem Bite                           |    Czas     |   25.0s   | 5.0s-120.0s |
| Max Number Of Vampires Per Game |                          Maksymalna ilość Vampire'ów które mogą istnieć w grze                          |    Ilość    |     2     |     2-5     |
| Vampires Have Impostor Vision   |                 Ustawia czy Vampire'y mają zwiększoną wizję oraz są odporni na światła                  | Przełącznik |    Tak    |  Tak / Nie  |
| New Vampire Can Assassinate     |                Ustawia czy nowo przekonwertowany Vampire może zgadywać rolę na spotkaniu                | Przełącznik |    Tak    |  Tak / Nie  |
| Can Convert Neutral Benign      |                      Ustawia czy Vampire może przekonwertować role Neutral Benign                       | Przełącznik |    Tak    |  Tak / Nie  |
| Can Convert Neutral Evil        |                       Ustawia czy Vampire może przekonwertować role Neutral Evil                        | Przełącznik |    Tak    |  Tak / Nie  |
| Can Convert Neutral Outlier     |                      Ustawia czy Vampire może przekonwertować role Neutral Outlier                      | Przełącznik |    Nie    |  Tak / Nie  |
| Can Convert Lovers              |                   Ustawia czy Vampire może przekonwertować gracza który jest Loversem                   | Przełącznik |    Nie    |  Tak / Nie  |
| New Vampire Can Convert         | Ustawia czy nowo przekonwertowany Vampire może przekonwertować jeśli limit jest większy niż 2 Vampire'y | Przełącznik |    Tak    |  Tak / Nie  |
| Vampires Can Vent               |                                Ustawia czy Vampire'y może używać ventów                                 | Przełącznik |    Tak    |  Tak / Nie  |