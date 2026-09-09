import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Barkeeper.png')} alt="Icon" align="left" style={{height: 60}} />

# Barkeeper

### *Poczęstuj Złoczyńców aby ich spowolnić!*

**Przynależność: Crew Support (Wsparcie)**

**Barkeeper** może poczęstować innego gracza piwem, aby tymczasowo zablokować jego umiejętności.\
Może on także, wylać trochę piwa na ziemie które przyśpieszy graczy, jeśli weszli w nie chwile po wylaniu, albo spowolni tych co weszli w nie po dłuższym czasie.

### Umiejętności

|                                               Przycisk                                               |  Umiejętność  |                                 Opis                                  |    Użycie    |
|:----------------------------------------------------------------------------------------------------:|:-------------:|:---------------------------------------------------------------------:|:------------:|
| <img src={useBaseUrl('/img/PrzyciskiCrew/BarkeepRoleblock.png')} alt="Button" style={{width: 60}} /> | **Roleblock** |             Blokuje umiejętności gracza na ustawiony czas             |  Na graczu   |
|   <img src={useBaseUrl('/img/PrzyciskiCrew/BarkeepSpill.png')} alt="Button" style={{width: 60}} />   |   **Spill**   | Wylewa trochę piwa na ziemie, aby przyśpieszyć, bądź spowolnić graczy | Na otoczeniu |

### Opcje

| Ustawienie                                 |                                   Opis                                    |   Typ   | Domyślnie |   Wartość    |
|--------------------------------------------|:-------------------------------------------------------------------------:|:-------:|:---------:|:------------:|
| Roleblock Cooldown                         |      Czas który Barkeeper musi odczekać pomiędzy użyciami Roleblock       |  Czas   |   22.5s   | 15.0s-120.0s |
| Minimum Roleblock Delay                    |    Minimalna ilość czasu która musi upłynąć, aby blokada była aktywna     |  Czas   |   3.0s    |  1.0s-10.0s  |
| Maximum Roleblock Delay                    |    Maksymalna ilość czasu która może upłynąć, aby blokada była aktywna    |  Czas   |   5.0s    |  1.0s-10.0s  |
| Spill Settle Delay                         |         Ilość czasu jaka musi minąć, aby wylane piwo było aktywne         |  Czas   |   5.0s    |  2.5s-15.0s  |
| Time Before Spill Slows Down Player        |          Czas przez który wylane piwo będzie przyśpieszać graczy          |  Czas   |   20.0s   | 10.0s-60.0s  |
| Additional Time For Spill To Be Removed    |   Dodatkowy czas (do górnego ustawienia) po którym wylane piwo zniknie    |  Czas   |   30.0s   | 10.0s-60.0s  |
| Amount of Time Player Is Affected By Spill | Czas przez który gracz będzie Przyśpieszony/Spowolniony przez wylane piwo |  Czas   |   20.0s   |  7.5s-45.0s  |
| Spill Speed Buff Multiplier                |         Ile razy szybszy będzie graczy który wszedł w wylane piwo         | Mnożnik |   1.2x    | 1.1x / 2.0x  |
| Spill Speed Debuff Multipier               |       Ile razy wolniejszy będzie graczy który wszedł w wylane piwo        | Mnożnik |   0.8x    | 0.3x / 1.0x  |