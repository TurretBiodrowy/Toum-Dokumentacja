import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Inne/Skeld Ikona.png')} alt="Icon" align="left" style={{height: 60}} />

# Better Skeld

| Ustawienie                   |                         Opis                          |     Typ     | Domyślnie |                        Wartość                         |
|------------------------------|:-----------------------------------------------------:|:-----------:|:---------:|:------------------------------------------------------:|
| Speed Multiplier             |  Zmniejsza lub zwiększa prędkość graczy na Skeldzie   |   Mnożnik   |   1.00x   |                      0.25x-1.50x                       |
| Crew Vision Multiplier       | Zmniejsza lub zwiększa wizję Crewmate'ów na Skeldzie  |   Mnożnik   |   1.00x   |                      0.25x-1.50x                       |
| Impostor Vision Multiplier   |  Zmniejsza lub zwiększa wizję Impostorów na Skeldzie  |   Mnożnik   |   1.00x   |                      0.25x-1.50x                       |
| Cooldown Offset              | Zmniejsza lub zwiększa cooldowny zabójców na Skeldzie |    Czas     |   0.0s    |                      -15.0s-15.0s                      |
| Short Tasks Offset           |       Zmniejsza lub zwiększa ilość Short Tasków       |    Ilość    |     0     |                          -5-5                          |
| Long Tasks Offset            |       Zmniejsza lub zwiększa ilość Long Tasków        |    Ilość    |     0     |                          -5-5                          |
| Door Type On Skeld           |         Rodzaj drzwi który będzie na Skeldzie         |   String    |   Skeld   | Skeld / Polus / Fungle / Submerged / No Doors / Random |
| Skeld Vent Network           |          Rodzaj połączeń Ventów na Skeldzie           |   String    | Unchanged |                 Unchanged / Quad-Group                 |
| Themed Map Decor             |        Pozwala ręcznie ustawić dekoracje mapy         |   String    | Automatic | Automatic / No Decor / Birthday / Halloween / TV Show  |
| Change Sabotage Timers       |             Pozwala zmienić czas sabotaży             | Przełącznik |    Tak    |                       Tak / Nie                        |
| ┣ Oxygen Sabotage Countdown  |         Ile sekund będzie trwał sabotaż Tlenu         |    Czas     |    30s    |                        15s-90s                         |
| ┗ Reactor Sabotage Countdown |       Ile sekund będzie trwał sabotaż Reaktora        |    Czas     |    30s    |                        15s-90s                         |