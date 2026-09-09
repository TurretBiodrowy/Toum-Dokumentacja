import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Bootlegger.png')} alt="Icon" align="left" style={{height: 60}} />

# Barkeeper

### *Poczęstuj Crewmate'ów aby ich spowolnić!*

**Przynależność: Imp Support (Wsparcie)**

**Bootlegger** może upić innego gracza winem, aby tymczasowo zablokować jego umiejętności.\
Gdy **Bootlegger** upije tego samego gracza 2 razy, ten się rozchoruje i dowię się o tym, a gdy zostanie upity 3 raz, po paru sekundach umrze od trucizny.

### Umiejętności

|                                             Przycisk                                              |  Umiejętność  |                                                    Opis                                                    |    Użycie    |
|:-------------------------------------------------------------------------------------------------:|:-------------:|:----------------------------------------------------------------------------------------------------------:|:------------:|
| <img src={useBaseUrl('/img/PrzyciskiCrew/BootRoleblock.png')} alt="Button" style={{width: 60}} /> | **Roleblock** |                               Blokuje umiejętności gracza na ustawiony czas                                |  Na graczu   |
|  <img src={useBaseUrl('/img/PrzyciskiCrew/BootSicken.png')} alt="Button" style={{width: 60}} />   |  **Sicken**   | Blokuje umiejętności gracza na ustawiony czas, oraz powiadamia go, że został zablokowany przez Bootleggera |  Na graczu   |
|  <img src={useBaseUrl('/img/PrzyciskiCrew/BootPoison.png')} alt="Button" style={{width: 60}} />   |  **Poison**   |     Blokuje umiejętności gracza na ustawiony czas, oraz otruwa go, sprawiając, że ten umrze po chwili      |  Na graczu   |

### Opcje

| Ustawienie              |                                Opis                                 |  Typ   | Domyślnie |          Wartość          |
|-------------------------|:-------------------------------------------------------------------:|:------:|:---------:|:-------------------------:|
| Roleblock Cooldown      |   Czas który Barkeeper musi odczekać pomiędzy użyciami Roleblock    |  Czas  |   22.5s   |       15.0s-120.0s        |
| Minimum Roleblock Delay | Minimalna ilość czasu która musi upłynąć, aby blokada była aktywna  |  Czas  |   3.0s    |        1.0s-10.0s         |
| Maximum Roleblock Delay | Maksymalna ilość czasu która może upłynąć, aby blokada była aktywna |  Czas  |   5.0s    |        1.0s-10.0s         |
| Poison Triggers On      |                    Kiedy trucizna będzie aktywna                    | String | Delay End | Delay End / Meeting Start |
| ┗ Poison Delay          |                  Czas po którym otruta osoba umrze                  |  Czas  |   15.0s   |        5.0s-30.0s         |