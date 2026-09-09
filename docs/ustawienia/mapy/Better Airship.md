import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Inne/Airship Ikona.png')} alt="Icon" align="left" style={{height: 60}} />

# Better Airship

| Ustawienie                        |                         Opis                         |     Typ     | Domyślnie |                             Wartość                              |
|-----------------------------------|:----------------------------------------------------:|:-----------:|:---------:|:----------------------------------------------------------------:|
| Speed Multiplier                  |  Zmniejsza lub zwiększa prędkość graczy na Airship   |   Mnożnik   |   1.00x   |                           0.25x-1.50x                            |
| Crew Vision Multiplier            | Zmniejsza lub zwiększa wizję Crewmate'ów na Airship  |   Mnożnik   |   1.00x   |                           0.25x-1.50x                            |
| Impostor Vision Multiplier        |  Zmniejsza lub zwiększa wizję Impostorów na Airship  |   Mnożnik   |   1.00x   |                           0.25x-1.50x                            |
| Cooldown Offset                   | Zmniejsza lub zwiększa cooldowny zabójców na Airship |    Czas     |   0.0s    |                           -15.0s-15.0s                           |
| Short Tasks Offset                |      Zmniejsza lub zwiększa ilość Short Tasków       |    Ilość    |     0     |                               -5-5                               |
| Long Tasks Offset                 |       Zmniejsza lub zwiększa ilość Long Tasków       |    Ilość    |     0     |                               -5-5                               |
| Door Type On Airship              |         Rodzaj drzwi który będzie na Airship         |   String    |  Airship  | Skeld / Polus / Fungle / Airship / Submerged / No Doors / Random |
| Spawn Mode                        |       Sposób w jaki gracze będą mogli wybierać       |   String    |  Normal   |    Normal / Everyone Has Same Spawns / Forced Spawn Location     |
| ┗ Spawn At                        |     Jaką opcję spawnu będą mieli wszyscy gracze      |   String    | Main Hall |  Main Hall / Kitchen / Cargo Bay / Engine Room / Brig / Records  |
| No Ladder Cooldown                | Decyduje czy drabiny na Airship będą miały cooldown  | Przełącznik |    Tak    |                            Tak / Nie                             |
| Change Sabotage Timers            |            Pozwala zmienić czas sabotaży             | Przełącznik |    Tak    |                            Tak / Nie                             |
| ┗ Crash Course Sabotage Countdown |       Ile sekund będzie trwał sabotaż Reaktora       |    Czas     |    90s    |                              5s-60s                              |