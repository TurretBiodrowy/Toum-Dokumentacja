import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Investigator.png')} alt="Icon" align="left" style={{height: 60}} />

# Investigator

### *Znajdź zabójców poprzez śledzenie ich śladów!*

**Przynależność: Crew Investigative (Śledczy)**

**Investigator** widzi ślady innych graczy, które znikają po danym czasie.

### Opcje

| Ustawienie                |                                     Opis                                      |     Typ     | Domyślnie |     Wartość     |
|---------------------------|:-----------------------------------------------------------------------------:|:-----------:|:---------:|:---------------:|
| Footprints Added Based On |  Ustawia czy ślady są tworzone co ustawiony czas, albo co ustawiony dystans   |   String    | Distance  | Distance / Time |
| ┣ Footprint Interval      | Gdy powyższe ustawione na Distance: Co jaki dystanst nowy ślad jest tworzony. |    Ilość    |    0.5    |     0.3-3.0     |
| ┗ Footprint Interval      |     Gdy powyższe ustawione na Time: Co jaki czas nowy ślad jest tworzony.     |    Czas     |   1.0s    |     0.5s-6s     |
| Footprint Size            |                            Ustawia rozmiar śladów.                            |   Mnożnik   |    4x     |     1x-10x      |
| Footprint Duration        |                     Jak długo ślady są widoczne na ziemi.                     |    Czas     |   10.0s   |   1.0s-15.0s    |
| Anonymous Footprints      |            Ustawia czy ślady mają kolor gracza który je zostawił.             | Przełącznik |    Nie    |    Tak / Nie    |
| Footprint Vent Visible    |          Ustawia czy ślady gracza który jest w ventcie są widoczne.           | Przełącznik |    Nie    |    Tak / Nie    |