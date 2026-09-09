import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Sonar.png')} alt="Icon" align="left" style={{height: 60}} />

# Sonar

### *Śledź ruchy innych!*

**Przynależność: Crew Investigative (Śledczy)**

**Sonar** może śledzić graczy by poznać ich obecną lokalizację.\
Gdy śledzi on jakiegoś gracza, dostaje strzałke w odpowiednim kolorze, która aktualizuje się co ustawioną ilość czasu i znika po śmierci osoby śledzonej.

### Umiejętności

|                                            Przycisk                                            | Umiejętność |                              Opis                               |         Typ          |
|:----------------------------------------------------------------------------------------------:|:-----------:|:---------------------------------------------------------------:|:--------------------:|
| <img src={useBaseUrl('/img/PrzyciskiCrew/SonarTrack.png')} alt="Button" style={{width: 50}} /> |  **Track**  | Pozwala Sonarowi zaznaczyć osobę do której będzie miał strzałkę | Interakcja na graczu |

### Opcje

| Ustawienie                            |                               Opis                               |     Typ     | Domyślnie |  Wartość   |
|---------------------------------------|:----------------------------------------------------------------:|:-----------:|:---------:|:----------:|
| Track Cooldown                        |      Czas który Sonar musi odczekać pomiędzy użyciami Track      |    Czas     |    20s    |   1s-30s   |
| Max Number Of Tracks                  |             Ilość Tracków z którą Sonar zaczyna grę              |    Ilość    |     5     |    1-15    |
| Arrow Update Interval                 |    Co ile czasu strzałki do graczy pokazują nową lokalizajce     |    Czas     |   5.0s    | 0.0s-15.0s |
| Sonar Arrows Make Sound On Death      |          Ustawia czy strzałki wydają dźwięk gdy znikną           | Przełącznik |    Tak    | Tak / Nie  |
| Sonar Arrows Reset After Each Round   |             Ustawia czy strzałki są usuwane co rundę             | Przełącznik |    Tak    | Tak / Nie  |
| ┗ Get More Uses From Completing Tasks | Ustawia czy Sonar dostaje więcej użyć Track za wykonywanie zadań | Przełącznik |    Nie    | Tak / Nie  |