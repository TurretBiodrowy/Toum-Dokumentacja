import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Trapper.png')} alt="Icon" align="left" style={{height: 60}} />

# Trapper

### *Rozstaw pułapki aby złapać role zabójców!*

**Przynależność: Crew Investigative (Śledczy)**

**Trapper** może rozstawiać pułapki na mapie, które będą zbierać role graczy, którzy w nie weszli.\
Na następnym spotkaniu **Trapper** dostanie informacje o tym, jakie role zostały złapane w pułapki.

### Umiejętności

|                                            Przycisk                                             | Umiejętność |                                   Opis                                   |    Użycie    |
|:-----------------------------------------------------------------------------------------------:|:-----------:|:------------------------------------------------------------------------:|:------------:|
| <img src={useBaseUrl('/img/PrzyciskiCrew/TrapperTrap.png')} alt="Button" style={{width: 50}} /> |  **Trap**   | Pozwala położyć pułapkę która będzie zbierała rolę graczy przechodzących | Na otoczeniu |

### Opcje

| Ustawienie                                       |                                                Opis                                                |     Typ     | Domyślnie |   Wartość   |
|--------------------------------------------------|:--------------------------------------------------------------------------------------------------:|:-----------:|:---------:|:-----------:|
| Trap Cooldown                                    |                      Czas który Trapper musi odczekać pomiędzy użyciami Trap                       |    Czas     |    20s    |   1s-30s    |
| Min Amount Of Time In Trap To Register           |        Minimalna ilość czasu którą gracz musi spędzić w pułapce zanim jego rola się zapisze        |    Czas     |   5.0s    | 0.0s-15.0s  |
| Initial Number Of Traps                          |                             Ilość pułapek z którą Trapper zaczyna grę                              |    Ilość    |     5     |    1-15     |
| Trap Size                                        |                           Rozmiar jaki pułapka będzie miała po położeniu                           |   Mnożnik   |   0.25x   | 0.05x-1.00x |
| Traps Removed After Each Round                   |                               Ustawia czy pułaki są usuwane co rundę                               | Przełącznik |    Tak    |  Tak / Nie  |
| ┗ Get More Uses From Completing Tasks            |                 Ustawia czy Trapper dostaje więcej użyć Trap za wykonywanie zadań                  | Przełącznik |    Nie    |  Tak / Nie  |
| Minimum Number Of Roles Required To Trigger Trap | Minimalna ilość osób które muszą wejść w pułapkę aby Trapper dostał z niej informacje na spotkaniu |    Ilość    |     3     |    1-15     |