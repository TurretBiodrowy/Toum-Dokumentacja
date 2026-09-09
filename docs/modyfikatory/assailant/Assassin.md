import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Mody/Assassin.png')} alt="Icon" align="left" style={{height: 60}} />

# Assassin

### *Zgaduj rolę graczy by zabić na spotkaniu!*

**Assassin** to umiejętność która może zostać przyznana tylko **Impostorowi**, bądź **Neutralnemu Zabójcy**.\
Pozwala ona na zgadywanie ról graczy podczas spotkania w celu zabicia ich. Jednak jeśli **Assassin** strzeli błędnie, sam zginie.

**Assassin** nie zajmuje miejsca na modyfikator, czyli możesz mieć dedykowany modyfikator frakcji oraz **Assassina**.

### Opcje

| Ustawienie                                      |                               Opis                               |     Typ     | Domyślnie |  Wartość  |
|-------------------------------------------------|:----------------------------------------------------------------:|:-----------:|:---------:|:---------:|
| Number of Impostor Assassins                    |           Ile Impostorów dostanie umiejętność Assassin           |    Ilość    |     1     |    0-4    |
| ┗ Impostor Assassin Chance                      |           Szansa na to, że Impostor dostanie Assassina           |   Procent   |   100%    |  0%-100%  |
| Number of Neutral Assassins                     |      Ile Neutralnych Zabójców dostanie umiejętność Assassin      |    Ilość    |     1     |    0-4    |
| ┗ Neutral Assassin Chance                       |      Szansa na to, że Neutralny Zabójca dostanie Assassina       |   Procent   |   100%    |  0%-100%  |
| Number Of Assassin Kills                        |       Ile razy na grę Assassin może strzelać na spotkaniu        |    Ilość    |     5     |   1-15    |
| ┗ Assassin Can Kill More Than Once Per Meeting  |  Ustawia czy Assassin może zgadywać więcej niż raz na spotkanie  | Przełącznik |    Tak    | Tak / Nie |
| Assassin Can Guess "Crewmate"                   |   Ustawia czy Assassin może zgadywać podstawową rolę Crewmate    | Przełącznik |    Nie    | Tak / Nie |
| Assassin Can Guess Crewmate Investigative Roles |  Ustawia czy Assassin może zgadywać role Crewmate Investigative  | Przełącznik |    Nie    | Tak / Nie |
| Assassin Can Guess Neutral Benign Roles         |     Ustawia czy Assassin może strzelać w role Neutral Benign     | Przełącznik |    Tak    | Tak / Nie |
| Assassin Can Guess Neutral Evil Roles           |      Ustawia czy Assassin może strzelać w role Neutral Evil      | Przełącznik |    Tak    | Tak / Nie |
| Assassin Can Guess Neutral Killing Roles        |    Ustawia czy Assassin może strzelać w role Neutral Killing     | Przełącznik |    Tak    | Tak / Nie |
| Assassin Can Guess Neutral Outlier Roles        |    Ustawia czy Assassin może strzelać w role Neutral Outlier     | Przełącznik |    Tak    | Tak / Nie |
| Assassin Can Guess Impostor Roles               |       Ustawia czy Assassin może strzelać w role Impostorów       | Przełącznik |    Tak    | Tak / Nie |
| Assassin Can Guess Crewmate Modifiers           |  Ustawia czy Assassin może strzelać w modyfikatory Crewmate'ów   | Przełącznik |    Tak    | Tak / Nie |
| ┗ Assassin Can Guess Crew Utility Modifiers     |  Ustawia czy Assassin może strzelać w modyfikatory Crew Utility  | Przełącznik |    Nie    | Tak / Nie |
| Assassin Can Guess Other Faction Modifiers      | Ustawia czy Assassin może strzelać w modyfikatory innych Frakcji | Przełącznik |    Nie    | Tak / Nie |
| Assassin Can Guess Alliances                    |    Ustawia czy Assassin może strzelać w modyfikatory Alliance    | Przełącznik |    Tak    | Tak / Nie |