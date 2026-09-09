import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Engineer.png')} alt="Icon" align="left" style={{height: 60}} />

# Engineer

### *Zajmij się najważniejszymy systemami na mapie!*

**Przynależność: Crew Support (Wsparcie)**

**Engineer** może korzystać z ventów oraz parę razy w trakcie gry błyskawicznie naprawić aktywny sabotaż.

### Umiejętności

|                                           Przycisk                                           | Umiejętność |                     Opis                     |   Użycie   |
|:--------------------------------------------------------------------------------------------:|:-----------:|:--------------------------------------------:|:----------:|
| <img src={useBaseUrl('/img/PrzyciskiCrew/EngiVent.png')} alt="Button" style={{width: 60}} /> |  **Vent**   | Pozwala wejść i przemieszczać się po Ventach | Na ventcie |
| <img src={useBaseUrl('/img/PrzyciskiCrew/EngiFix.png')} alt="Button" style={{width: 50}} />  |   **Fix**   |       Natychmiastowo naprawia sabotaż        |  Bez celu  |

### Opcje

| Ustawienie                                 |                                      Opis                                      |     Typ     | Domyślnie |  Wartość   |
|--------------------------------------------|:------------------------------------------------------------------------------:|:-----------:|:---------:|:----------:|
| Vent Uses Per Game                         |                 Ile razy podczas gry Engineer może użyć Ventów                 |    Ilość    |     ∞     |  1-30 / ∞  |
| ┗ Get More Vent Uses From Completing Tasks |       Ustawia czy Engineer dostaje więcej użyć Vent za wykonywanie zadań       | Przełącznik |    Tak    | Tak / Nie  |
| Vent Cooldown                              |            Czas który Engineer musi odczekać pomiędzy użyciami Vent            |    Czas     |   15.0s   | 0.0s-25.0s |
| Vent Duration                              |               Czas przez który Engineer może przebywać w ventach               |    Czas     |    10s    | 5s-25s / ∞ |
| Fix Uses Per Game                          |         Ile razy na grę Engineer może natychmiastowo naprawić sabotaż          |    Ilość    |     5     |  1-15 / ∞  |
| ┗ Tasks Required For Additional Fix Use    |            Po ilu zadaniach Engineer dostanie dodatkowe użycie Fix             |    Ilość    |     3     | Off / 1-15 |
| Fix Delay                                  | Czas który Engineer musi odczekać pomiędzy kliknięciem Fix, a naprawą sabotażu |    Czas     |   0.5s    | 0.0s-5.0s  |