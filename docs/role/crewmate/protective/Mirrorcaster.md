import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Mirrorcaster.png')} alt="Icon" align="left" style={{height: 60}} />

# Mirrorcaster

### *Zaabsorbuj ataki by móc je później użyć*

**Przynależność: Crew Protective (Ochronny)**

**Mirrocaster** może za pomocą tabletu nadać graczowi tymczasowe magiczne lustro, które zaabsorbuje pierwszy bezpośredni atak w jego stronę.\
Po zaabsorbowaniu ataku może użyć go na dowolnym graczu, z wyjątkiem tego którego wcześniej chronił.

### Umiejętności

|                                                Przycisk                                                 |   Umiejętność    |                                           Opis                                            |           Użycie            |
|:-------------------------------------------------------------------------------------------------------:|:----------------:|:-----------------------------------------------------------------------------------------:|:---------------------------:|
|  <img src={useBaseUrl('/img/PrzyciskiCrew/MirrocasterMirror.png')} alt="Button" style={{width: 50}} />  | **Magic Mirror** | Nadaje lustro na gracza które zniknie po zaabsorbowaniu ataku, bądź, gdy skończy się czas | Na graczu za pomocą tabletu |
| <img src={useBaseUrl('/img/PrzyciskiCrew/MirrorcasterUnleash.png')} alt="Button" style={{width: 50}} /> |   **Unleash**    |                    Pozwala użyć zaabsorbowanego ataku, aby kogoś zabić                    |          Na graczu          |

### Opcje

| Ustawienie                        |                                     Opis                                     |     Typ     |       Domyślnie       |                Wartość                 |
|-----------------------------------|:----------------------------------------------------------------------------:|:-----------:|:---------------------:|:--------------------------------------:|
| Who Gets Murder Attempt Indicator |         Kto dostaje powiadomienie o próbie zabójstwa osoby z lustrem         |   String    | Mirrorcaster + Killer |  Mirrorcaster / Mirrorcaster + Killer  |
| Magic Mirror Cooldown             |     Czas który Mirrorcaster musi odczekać pomiędzy użyciami Magic Mirror     |    Czas     |         0.0s          |               0.0s-60.0s               |
| Magic Mirror Duration             |            Czas przez który Magic Mirror będzie aktywny na graczu            |    Czas     |         30.0s         |              10.0s-60.0s               |
| Unleash Cooldown                  |       Czas który Mirrorcaster musi odczekać pomiędzy użyciami Unleash        |    Czas     |         0.0s          |               0.0s-60.0s               |
| Information Received Upon Attack  |      Co Mirrorcaster dowiaduje się o zabójcy którego atak zaaobsorbuje       |   String    |      Subaligment      | Role / Subaligment / Faction / Nothing |
| Accumulate Multiple Unleashes     | Ustawia czy Mirrorcaster może mieć więcej niż jeden zaabsorbowany atak naraz | Przełącznik |          Nie          |               Tak / Nie                |
| Max Number Of Magic Mirrors       |             Ile razy na grę Mirrorcaster może użyć Magic Mirror              |    Ilość    |           5           |                  1-15                  |