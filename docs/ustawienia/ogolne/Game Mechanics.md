import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Inne/Settings.png')} alt="Icon" align="left" style={{height: 60}} />

# Game Mechanics

| Ustawienie                            |                                               Opis                                               |     Typ     |   Domyślnie   |                     Wartość                     |
|---------------------------------------|:------------------------------------------------------------------------------------------------:|:-----------:|:-------------:|:-----------------------------------------------:|
| Powerful Crew Continue The Game       | Ustawia czy role Crewmate Power + Killing (I niektóry wyjątki) przetrzymują grę w sytuacjach 1v1 | Przełącznik |      Tak      |                    Tak / Nie                    |
| All Shields Flash Grey on Trigger     |                   Ustawia czy mignięcia ekranu od wszystkich tarcz będą szarę                    | Przełącznik |      Nie      |                    Tak / Nie                    |
| Cleaned/Dissolved Bodies Appear as    |                         W jaki sposób będą pojawiały się zniknięte ciała                         |   String    | Missing (MIS) | Missing (MIS) / Dead (DED) / Disconnected (D/C) |
| Kill Animation Background Color       |                               Jaki kolor będzie miało tło zabicia                                |   String    |      Red      |           Red / Faction / Role Color            |
| Max Players Alive When Vents Disabled |                       Przy ilu żywych graczach ventowanie będzie wyłączone                       |    Ilość    |       2       |                      1-15                       |
| Ghostwalkers Can Fix Sabotages        |              Ustawia czy role pośmiertnę (Haunter/Spectre) mogą naprawiać sabotaże               | Przełącznik |      Nie      |                    Tak / Nie                    |
| Ghostwalker That Auto-Vent On Spawn   |                Ustawia które role pośmiertne pojawiają się w ventcie po spotkaniu                |   String    |   Crewmates   |         Crewmates / Evils / All / None          |
| Temp Save Cooldown Reset              |   Cooldown który dostanie zabójca po próbie zabicia gracza z tarczą która nie się nie rozwala    |    Czas     |      5s       |                     0s-15s                      |
| Full Save Cooldown Multiplier         |       Cooldown który dostanie zabójca po próbie zabicia gracza z tarczą która się rozwala        |   Mnożnik   |     0.5x      |                    0.3x-1.0x                    |