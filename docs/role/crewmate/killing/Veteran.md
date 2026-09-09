import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Veteran.png')} alt="Icon" align="left" style={{height: 60}} />

# Veteran

### *Użyj Alertu by zabić każdego kto wykona na tobie interakcje!*

**Przynależność: Crew Killing (Zabijający)**

**Veteran** może użyć Alert, aby przez ustawiony okres czasu zabić każdego, kto wejdzie z nim w interakcje.\
Alert nie jest w stanie zabić osoby z tarczą, oraz Pestilence’a.

### Umiejętności

|                                           Przycisk                                           | Umiejętność |                                       Opis                                       |  Użycie  |
|:--------------------------------------------------------------------------------------------:|:-----------:|:--------------------------------------------------------------------------------:|:--------:|
| <img src={useBaseUrl('/img/PrzyciskiCrew/VetAlert.png')} alt="Button" style={{width: 50}} /> |  **Alert**  | Podczas włączonego Alertu, Veteran zabije każdego kto wejdzie z nim w interakcje | Bez celu |

### Opcje

| Ustawienie                          |                                                 Opis                                                 |     Typ     | Domyślnie |   Wartość   |
|-------------------------------------|:----------------------------------------------------------------------------------------------------:|:-----------:|:---------:|:-----------:|
| Alert Cooldown                      |                       Czas który Veteran musi odczekać pomiędzy użyciami Kill                        |    Czas     |   25.0s   | 10.0s-60.0s |
| Alert Duration                      |                           Czas przez który Alert będzie aktywny na graczu                            |    Czas     |   10.0s   | 5.0s-15.0s  |
| Max Number Of Alerts                |                              Ilość Alertów z którą Veteran zaczyna grę                               |    Ilość    |     5     |    1-15     |
| Can Be Killed On Alert              | Ustawia czy Veterana da się zabić gdy będzie miał włączony Alert (Kontratak dalej zostanie wykonany) | Przełącznik |    Nie    |  Tak / Nie  |
| Knows When Attacked in Meeting      |            Ustawia czy Veteran dowiaduje się o tym, że został zaatakowany podczas Alertu             | Przełącznik |    Tak    |  Tak / Nie  |
| Get More Uses From Completing Tasks |                  Ustawia czy Veteran dostaje więcej użyć Alert za wykonywanie zadań                  | Przełącznik |    Tak    |  Tak / Nie  |