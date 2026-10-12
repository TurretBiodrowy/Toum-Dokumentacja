import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Inne/Game Timer.png')} alt="Icon" align="left" style={{height: 60}} />

# End Game Timer

| Ustawienie                |                                   Opis                                   |     Typ     | Domyślnie |         Wartość          |
|---------------------------|:------------------------------------------------------------------------:|:-----------:|:---------:|:------------------------:|
| Game Timer                |            Włącza maksymalny czas przez który gra może trwać             | Przełącznik |    Nie    |        Tak / Nie         |
| ┣ Pause Timer In Meetings | Ilość pozostałego czasu wymagananego do zatrzymania czasu na spotkaniach |    Czas     |     5     |           1-10           |
| ┣ On Timer End            |                  Ustawia co się dzieje na koniec czasu                   |   String    | Game Draw | Game Draw / Impostor Win |
| ┗ Game Time Limit         |                Maksymalny czas przez który może trwać gra                |    Czas     |   15.0m   |        1.0m/30.0m        |