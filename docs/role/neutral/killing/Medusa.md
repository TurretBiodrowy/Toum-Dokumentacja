import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Medusa.png')} alt="Icon" align="left" style={{height: 60}} />

# Medusa

### *Zmień graczy w kamień!*

**Przynależność: Neut Killing (Zabijający)**

**Medusa** po zabiciu gracza zostawia jego ciało w miejscu które powoli zmienia się w kamień.\
Kamień gracza który nie rozbił się przed spotkaniem, zostanie w miejscu do końca gry.\
Osoby zabitej przez **Meduse** nie da się zgłosić.

### Umiejętności

|                                             Przycisk                                             |  Umiejętność   |                                       Opis                                        |    Typ     |
|:------------------------------------------------------------------------------------------------:|:--------------:|:---------------------------------------------------------------------------------:|:----------:|
|  <img src={useBaseUrl('/img/PrzyciskiNeut/MedPetrify.png')} alt="Button" style={{width: 50}} />  |  **Petrify**   | Zabija gracza, zostawiając jego ciało w miejscu które powoli zmienia się w kamień | Na graczu  |
| <img src={useBaseUrl('/img/PrzyciskiNeut/MedStoneGaze.png')} alt="Button" style={{width: 50}} /> | **Stone Gaze** |        Zmienia w kamień każdego gracza który wejdzie w interakcje z Medusą        |  Bez celu  |
|   <img src={useBaseUrl('/img/PrzyciskiNeut/MedVent.png')} alt="Button" style={{width: 55}} />    |    **Vent**    |                    Pozwala przemieszczać się pomiędzy Ventami                     | Na ventcie |

### Opcje

| Ustawienie                       |                             Opis                             |     Typ     | Domyślnie |   Wartość   |
|----------------------------------|:------------------------------------------------------------:|:-----------:|:---------:|:-----------:|
| Petrify Cooldown                 |    Czas który Medusa musi odczekać przed zabiciem gracza     |    Czas     |   25.0s   | 5.0s-120.0s |
| Time For Victim To Become Stoned | Czas po którym gracz zabity przez Meduse zmieni się w kamień |    Czas     |    10s    |   5s-20s    |
| Time Before Stone Shatters       |        Czas po którym kamień gracza zostanie rozbity         |    Czas     |    20s    |   10s-60s   |
| Allow Stone Gazing               |          Ustawia czy Medusa może używać Stone Gaze           | Przełącznik |    Tak    |  Tak / Nie  |
| ┣ Stone Gaze Cooldown            |   Czas który Medusa musi odczekać przed użyciem Stone Gaze   |    Czas     |   35.0s   | 5.0s-120.0s |
| ┣ Stone Gaze Duration            |          Czas przez który Stone Gaze będzie aktywny          |    Czas     |   10.0s   | 5.0s-20.0s  |
| ┗ Stone Gaze Uses                |              Maksymalana ilość użyć Stone Gaze               |    Ilość    |     3     |    1-10     |
| Medusa Can Vent                  |            Ustawia czy Medusa może używać ventów             | Przełącznik |    Nie    |  Tak / Nie  |