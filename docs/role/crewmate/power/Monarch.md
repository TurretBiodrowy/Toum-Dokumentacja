import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Monarch.png')} alt="Icon" align="left" style={{height: 60}} />

# Monarch

### *Pasuj graczy na rycerza by dać im dodatkowe głosy!*

**Przynależność: Crew Power (Wpływowy)**

**Monarch** może pasować wybranego gracza na rycerza sprawiając, że ten gracz, będzie miał permanentne dodatkowe głosy na spotkaniu.

### Umiejętności

|                                           Przycisk                                            | Umiejętność |                         Opis                         |  Użycie   |
|:---------------------------------------------------------------------------------------------:|:-----------:|:----------------------------------------------------:|:---------:|
| <img src={useBaseUrl('/img/PrzyciskiCrew/MonKnight.png')} alt="Button" style={{width: 50}} /> | **Knight**  | Pasuje gracza na rycerza nadając mu dodatkowe głosy. | Na graczu |

### Opcje

| Ustawienie                       |                                    Opis                                     |     Typ     | Domyślnie |  Wartość   |
|----------------------------------|:---------------------------------------------------------------------------:|:-----------:|:---------:|:----------:|
| Knight Cooldown                  |          Czas który Monarch musi odczekać pomiędzy użyciami Knight          |    Czas     |   20.0s   | 5.0s-30.0s |
| Maximum Knights                  |       Maksymalna ilość graczy których Monarch może pasować na rycerza       |    Ilość    |     3     |  1-15 / ∞  |
| Votes Per Knight                 |          Ile dodatkowych głosów dostanie gracz pasowany na rycerza          |    Ilość    |     1     |    1-5     |
| Knight Delay (Cancellable)       |      Czas przez który Monarch może anulować pasowanie kogoś na rycerza      |    Czas     |    3s     |   1s-10s   |
| Reveal Knighting At Meeting      |               Ustawia czy Rycerz jest ujawniony na spotkaniu                | Przełącznik |    Nie    | Tak / Nie  |
| Show Knighted Votes              |     Ustawia czy dodatkowe głosy graczy z tytułem rycerza będą widoczne      | Przełącznik |    Tak    | Tak / Nie  |
| Allow Round One Knighting        | Ustawia czy Monarch może pasować kogoś na rycerza przed pierwszym spotkaniu | Przełącznik |    Nie    | Tak / Nie  |
| Inform Monarch If A Knight Dies  |           Ustawia czy Monarch dowie się gdy jeden z rycerzy umrze           | Przełącznik |    Tak    | Tak / Nie  |
| Crew Knights Grant Kill Immunity |  Ustawia czy Monarch dostanie tarcze gdy nada tytuł rycerza na Crewmate'a   | Przełącznik |    Tak    | Tak / Nie  |