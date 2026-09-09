import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Spy.png')} alt="Icon" align="left" style={{height: 60}} />

# Better Maps

## Random Map Choice
| Ustawienie             |               Opis               |     Typ     | Domyślnie |  Wartość  |
|------------------------|:--------------------------------:|:-----------:|:---------:|:---------:|
| Enable Randomized Maps | Włącza granie na losowych mapach | Przełącznik |    Nie    | Tak / Nie |
| ┣ Skeld Chance         |    Szansa na grę na Skeldzie     |   Procent   |    0%     |  0%-100%  |
| ┣ dlekS Chance         |     Szansa na grę na dleksiE     |   Procent   |    0%     |  0%-100%  |
| ┣ Mira Chance          |      Szansa na grę na Mirze      |   Procent   |    0%     |  0%-100%  |
| ┣ Polus Chance         |     Szansa na grę na Polusie     |   Procent   |    0%     |  0%-100%  |
| ┣ Airship Chance       |     Szansa na grę na Airship     |   Procent   |    0%     |  0%-100%  |
| ┗ Fungle Chance        |     Szansa na grę na Fungle      |   Procent   |    0%     |  0%-100%  |

## Global Better Maps
| Ustawienie                        |                           Opis                            |  Typ   |     Domyślnie     |                        Wartość                        |
|-----------------------------------|:---------------------------------------------------------:|:------:|:-----------------:|:-----------------------------------------------------:|
| Use Camouflage Comms              | Włącza albo Wyłącza kamuflaż podczas sabotażu Komunikacji | String | Globally Disabled | Globally Enabled / Globally Disabled / Per Map Change |
| Change Speed Multiplier           |          Zmniejsza lub zwiększa prędkość graczy           | String |  Per Map Change   | Globally Enabled / Globally Disabled / Per Map Change |
| Change Crew Vision Multiplier     |         Zmniejsza lub zwiększa wizję Crewmate'ów          | String |  Per Map Change   | Globally Enabled / Globally Disabled / Per Map Change |
| Change Impostor Vision Multiplier |          Zmniejsza lub zwiększa wizję Impostorów          | String |  Per Map Change   | Globally Enabled / Globally Disabled / Per Map Change |
| Change Cooldown Offset            |         Zmniejsza lub zwiększa cooldowny zabójców         | String |  Per Map Change   | Globally Enabled / Globally Disabled / Per Map Change |
| Change Short Tasks Offset         |         Zmniejsza lub zwiększa ilość Short Tasków         | String |  Per Map Change   | Globally Enabled / Globally Disabled / Per Map Change |
| Change Long Tasks Offset          |         Zmniejsza lub zwiększa ilość Long Tasków          | String |  Per Map Change   | Globally Enabled / Globally Disabled / Per Map Change |

## Randomized Door Mode
| Ustawienie       |                Opis                 |   Typ   | Domyślnie |  Wartość  |
|------------------|:-----------------------------------:|:-------:|:---------:|:---------:|
| No Doors Chance  |   Szansa na grę bez żadnych drzwi   | Procent |    5%     | Tak / Nie |
| ┣ Skeld Chance   | Szansa na grę z drzwiamy ze Skelda  | Procent |    20%    |  0%-100%  |
| ┣ Polus Chance   |  Szansa na grę z drzwiamy z Polusa  | Procent |    40%    |  0%-100%  |
| ┣ Airship Chance | Szansa na grę z drzwiamy z Airshipa | Procent |    15%    |  0%-100%  |
| ┗ Fungle Chance  |  Szansa na grę z drzwiamy z Fungle  | Procent |    20%    |  0%-100%  |