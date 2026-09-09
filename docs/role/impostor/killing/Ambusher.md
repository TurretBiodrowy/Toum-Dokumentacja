import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Ambusher.png')} alt="Icon" align="left" style={{height: 60}} />

# Ambusher

### *Porwij innych graczy!*

**Przynależność: Imp Killing (Zabijający)**

**Ambusher** może śledzić jednego gracza, dostając strzałkę wskazującą jego pozycje.\
Gdy śledzony gracz znajdzie się obok kogoś innego, **Ambusher** będzie mógł użyć **Ambush** aby zabić pobliską osobę, i natychmiastowo zabrać jej ciało ze sobą do swojej oryginalnej lokalizacji.

### Umiejętności

|                                           Przycisk                                           | Umiejętność |                                                        Opis                                                        |       Użycie        |
|:--------------------------------------------------------------------------------------------:|:-----------:|:------------------------------------------------------------------------------------------------------------------:|:-------------------:|
| <img src={useBaseUrl('/img/PrzyciskiImp/AmbPursue.png')} alt="Button" style={{width: 50}} /> | **Pursue**  |                        Pozwala śledzić jednego gracza aby zabić kogoś kto będzie obok niego                        |      Na graczu      |
| <img src={useBaseUrl('/img/PrzyciskiImp/AmbAmbush.png')} alt="Button" style={{width: 50}} /> | **Ambush**  | Gdy śledzony gracz znajdzie się obok obojętnie jakiego innego gracza, Ambusher może go zabić, porywając jego ciało | Globalnie na graczu |

### Opcje

| Ustawienie                     |                               Opis                                |     Typ     | Domyślnie |   Wartość   |
|--------------------------------|:-----------------------------------------------------------------:|:-----------:|:---------:|:-----------:|
| Ambush Uses Per Game           |             Ile razy na grę Ambusher może użyć Ambush             |    Ilość    |     ∞     |  1-15 / ∞   |
| Ambush Cooldown                |      Czas który Ambusher musi odczekać przed użyciem Ambush       |    Czas     |   25.0s   | 5.0s-120.0s |
| Pursue Arrow Update Interval   |     Co ile czasu strzałki do graczy pokazują nową lokalizajce     |    Czas     |   2.5s    | 0.0s-15.0s  |
| Stop Pursuing Player On Ambush | Ustawia czy strzałka do śledzonego gracza znika po udanym Ambushu | Przełącznik |    Tak    |  Tak / Nie  |
| Ambusher Can Vent              |              Ustawia czy Ambusher może używać ventów              | Przełącznik |    Tak    |  Tak / Nie  |