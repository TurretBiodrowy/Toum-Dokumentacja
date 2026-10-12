import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<img src={useBaseUrl('/img/Ikony/Inne/Folder Role.png')} alt="Icon" align="left" style={{height: 60}} />

# Role Settings

<Tabs>
 <TabItem value="Role List" label="Role List" default>

# Role List

Rozdawania ról w trybie **Role List** pozwala dostosować ilość ról z każdej frakcji, a nawet ilość poszczególnych przynależności (np. Crew Investigative/Neut Killing/Imp Power).

| Ustawienie               |                                                                Opis                                                                |     Typ     |  Domyślnie  |                                                                                                                                                                                        Wartość                                                                                                                                                                                         |
|--------------------------|:----------------------------------------------------------------------------------------------------------------------------------:|:-----------:|:-----------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Role Assigment Type      |                                             Ustawia sposób w jaki będą rozdawane rolę                                              |   String    |  Role List  |                                                                                                                                                                       Role List / Min/Max List / Draft / Vanilla                                                                                                                                                                       |
| ┣ Reduce Impostor Streak | Ustawia czy gracze którzy mieli rolę Impostora w poprzedniej rundzie, będą mieli mniejszą szansę na dostanie Impostora w następnej | Przełącznik |     Tak     |                                                                                                                                                                                       Tak / Nie                                                                                                                                                                                        |
| ┣ ┗ Reduction Chance     |                                       O ile procent szansa na Impostora zostanie zmniejszona                                       |   Procent   |     15%     |                                                                                                                                                                                        0%-100%                                                                                                                                                                                         |
| Slot 1                   |                                                                 /                                                                  |   String    | Common Crew | Crew Investigative / Crew Killing / Crew Protective / Crew Power / Crew Support / Common Crew / Special Crew / Random Crew / Neutral Benign / Neutral Evil / Neutral Killing / Neutral Outlier / Common Neutral / Special Neutral / Wildcard Neutral / Random Neutral / Imp Concealing / Imp Killing / Imp Power / Imp Support / Common Imp / Special Imp / Random Imp / Non-Imp / Any |
| Slot 2                   |                                                                 /                                                                  |   String    | Common Crew |                                                                                                                                                                                   To samo co Slot 1                                                                                                                                                                                    |
| Slot 3                   |                                                                 /                                                                  |   String    | Common Crew |                                                                                                                                                                                   To samo co Slot 1                                                                                                                                                                                    |
| Slot 4                   |                                                                 /                                                                  |   String    | Common Imp  |                                                                                                                                                                                   To samo co Slot 1                                                                                                                                                                                    |
| Slot 5                   |                                                                 /                                                                  |   String    | Common Crew |                                                                                                                                                                                   To samo co Slot 1                                                                                                                                                                                    |
| Slot 6                   |                                                                 /                                                                  |   String    | Common Crew |                                                                                                                                                                                   To samo co Slot 1                                                                                                                                                                                    |
| Slot 7                   |                                                                 /                                                                  |   String    | Common Crew |                                                                                                                                                                                   To samo co Slot 1                                                                                                                                                                                    |
| Slot 8                   |                                                                 /                                                                  |   String    | Common Crew |                                                                                                                                                                                   To samo co Slot 1                                                                                                                                                                                    |
| Slot 9                   |                                                                 /                                                                  |   String    | Common Imp  |                                                                                                                                                                                   To samo co Slot 1                                                                                                                                                                                    |
| Slot 10                  |                                                                 /                                                                  |   String    | Common Crew |                                                                                                                                                                                   To samo co Slot 1                                                                                                                                                                                    |
| Slot 11                  |                                                                 /                                                                  |   String    | Common Crew |                                                                                                                                                                                   To samo co Slot 1                                                                                                                                                                                    |
| Slot 12                  |                                                                 /                                                                  |   String    | Common Crew |                                                                                                                                                                                   To samo co Slot 1                                                                                                                                                                                    |
| Slot 13                  |                                                                 /                                                                  |   String    | Common Crew |                                                                                                                                                                                   To samo co Slot 1                                                                                                                                                                                    |
| Slot 14                  |                                                                 /                                                                  |   String    | Common Imp  |                                                                                                                                                                                   To samo co Slot 1                                                                                                                                                                                    |
| Slot 15                  |                                                                 /                                                                  |   String    | Common Crew |                                                                                                                                                                                   To samo co Slot 1                                                                                                                                                                                    |

### Wyjaśnienie Kategorii Ról

| Kategoria                                                                                                                                   |                            Role                            |
|---------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------:|
| **Any**                                                                                                                                     |                   Wszystkie możliwe role                   |
| **Non-**<b><font color="#FE1919">Imp</font></b>                                                                                             |            Wszystkie role oprócz **Impostorów**            |
| **Random** <b><font color="#88F7F7">Crew</font></b> / <b><font color="#7F7F7F">Neutral</font></b> / <b><font color="#FE1919">Imp</font></b> |               Wszystkie role z danej frakcji               |
| **Common** <b><font color="#88F7F7">Crew</font></b>                                                                                         | Tylko role **Investigative**, **Protective** i **Support** |
| **Common** <b><font color="#7F7F7F">Neutral</font></b>                                                                                      |              Tylko role **Benign** i **Evil**              |
| **Common** <b><font color="#FE1919">Imp</font></b>                                                                                          |          Tylko role **Concealing** i **Support**           |
| **Special** <b><font color="#88F7F7">Crew</font></b>                                                                                        |             Tylko role **Killing** i **Power**             |
| **Special** <b><font color="#7F7F7F">Neutral</font></b>                                                                                     |             Tylko role **Killing** i **Power**             |
| **Special** <b><font color="#FE1919">Imp</font></b>                                                                                         |            Tylko role **Killing** i **Outlier**            |
| **Wildcard** <b><font color="#7F7F7F">Neutral</font></b>                                                                                    |       Tylko role **Benign**, **Evil** i **Outlier**        |

</TabItem>

 <TabItem value="Min/Max List" label="Min/Max List" default>

# Min/Max List

Rozdawania ról w trybie **Min/Max List** pozwala Minimalną oraz Maksymalną ilość Ról Neutralnych z każdej przynależności.

| Ustawienie               |                                                                Opis                                                                |     Typ     | Domyślnie |                  Wartość                   |
|--------------------------|:----------------------------------------------------------------------------------------------------------------------------------:|:-----------:|:---------:|:------------------------------------------:|
| Role Assigment Type      |                                             Ustawia sposób w jaki będą rozdawane rolę                                              |   String    | Role List | Role List / Min/Max List / Draft / Vanilla |
| ┣ Reduce Impostor Streak | Ustawia czy gracze którzy mieli rolę Impostora w poprzedniej rundzie, będą mieli mniejszą szansę na dostanie Impostora w następnej | Przełącznik |    Tak    |                 Tak / Nie                  |
| ┣ ┗ Reduction Chance     |                                       O ile procent szansa na Impostora zostanie zmniejszona                                       |   Procent   |    15%    |                  0%-100%                   |
| Min Neutral Benign       |                                  Minimalna ilość ról Neutral Benign która może pojawić się w grze                                  |    Ilość    |     0     |                    0-10                    |
| Max Neutral Benign       |                                 Maksymalna ilość ról Neutral Benign która może pojawić się w grze                                  |    Ilość    |     0     |                    0-10                    |
| Min Neutral Evil         |                                   Minimalna ilość ról Neutral Evil która może pojawić się w grze                                   |    Ilość    |     0     |                    0-10                    |
| Max Neutral Evil         |                                  Maksymalna ilość ról Neutral Evil która może pojawić się w grze                                   |    Ilość    |     0     |                    0-10                    |
| Min Neutral Killing      |                                 Minimalna ilość ról Neutral Killing która może pojawić się w grze                                  |    Ilość    |     0     |                    0-10                    |
| Max Neutral Killing      |                                 Maksymalna ilość ról Neutral Killing która może pojawić się w grze                                 |    Ilość    |     0     |                    0-10                    |
| Min Neutral Outlier      |                                 Minimalna ilość ról Neutral Outlier która może pojawić się w grze                                  |    Ilość    |     0     |                    0-15                    |
| Max Neutral Outlier      |                                 Maksymalna ilość ról Neutral Outlier która może pojawić się w grze                                 |    Ilość    |     0     |                    0-15                    |

</TabItem>

 <TabItem value="Draft Mode" label="Draft Mode" default>

# Draft Mode

Rozdawania ról w trybie **Draft Mode** sprawia, że każdy gracz będzie mógł wybrać sobię jedną rolę z paru losowo przyznanych mu kart z rolami

| Ustawienie                  |                                          Opis                                          |     Typ     | Domyślnie |                  Wartość                   |
|-----------------------------|:--------------------------------------------------------------------------------------:|:-----------:|:---------:|:------------------------------------------:|
| Role Assigment Type         |                       Ustawia sposób w jaki będą rozdawane rolę                        |   String    | Role List | Role List / Min/Max List / Draft / Vanilla |
| Draft Recap Displays        |           Jaka informacja o wybranych rolach będzie pokazana na podsumowaniu           |   String    |  Faction  |    Faction / Aligment / Role / Nothing     |
| Draft Sidebar Displays      |            Jaka informacja o wybranych rolach będzie pokazywana na bierząco            |   String    |  Faction  |    Faction / Aligment / Role / Nothing     |
| Use Role List For Pool      | Wykorzystuje Role Liste zamiast standardowej listy do przypisywania ról podczas Draftu | Przełącznik |    Nie    |                 Tak / Nie                  |
| Offered Role Picks Per Turn |                        Ilość kart z rolami którą dostaje gracz                         |    Ilość    |     3     |                    1-9                     |
| Show Random Role Pick       |             Decyduje, czy gracz dostaje także opcję wybrania losowej roli              | Przełącznik |    Tak    |                 Tak / Nie                  |
| Turn Duration               |                          Czas który ma gracz na wybranie roli                          |    Czas     |    10s    |                   5s-60s                   |
| Concurrent Picks Per Turn   |                          Ile graczy może wybierać rolę naraz                           |    Ilość    |     1     |                    1-2                     |
| Shuffles Per Player         |                  Ilość przetasowań kart z rolami którą dostanie gracz                  |    Ilość    |     1     |                    0-3                     |

## Impostor Settings

| Ustawienie           |                               Opis                                |  Typ  | Domyślnie | Wartość |
|----------------------|:-----------------------------------------------------------------:|:-----:|:---------:|:-------:|
| Max Impostors Total  |        Maksymalna ilość Impostorów która pojawi się w grze        | Ilość |     2     |   1-5   |
| Max Concealing Roles | Maksymalna ilość ról Imp Concealing która może pojawić się w grze | Ilość |     2     |   0-5   |
| Max Killing Roles    |  Maksymalna ilość ról Imp Killing która może pojawić się w grze   | Ilość |     2     |   0-5   |
| Max Power Roles      |   Maksymalna ilość ról Imp Power która może pojawić się w grze    | Ilość |     2     |   0-5   |
| Max Support Roles    |  Maksymalna ilość ról Imp Support która może pojawić się w grze   | Ilość |     2     |   0-5   |

## Neutral Settings

| Ustawienie          |                              Opis                               |  Typ  | Domyślnie | Wartość |
|---------------------|:---------------------------------------------------------------:|:-----:|:---------:|:-------:|
| Max Neutrals Total  |        Maksymalna ilość Neutrali która pojawi się w grze        | Ilość |     3     |  0-10   |
| ┣ Max Benign Roles  | Maksymalna ilość ról Neut Benign która może pojawić się w grze  | Ilość |     0     |  0-10   |
| ┣ Max Evil Roles    |  Maksymalna ilość ról Neut Evil która może pojawić się w grze   | Ilość |     1     |  0-10   |
| ┣ Max Killing Roles | Maksymalna ilość ról Neut Killing która może pojawić się w grze | Ilość |     1     |  0-10   |
| ┗ Max Outlier Roles | Maksymalna ilość ról Neut Outlier która może pojawić się w grze | Ilość |     0     |  0-10   |

## Crewmate Settings

| Ustawienie              |                                 Opis                                  |  Typ  | Domyślnie | Wartość |
|-------------------------|:---------------------------------------------------------------------:|:-----:|:---------:|:-------:|
| Max Investigative Roles | Maksymalna ilość ról Crew Investigative która może pojawić się w grze | Ilość |     5     |  0-15   |
| Max Killing Roles       |    Maksymalna ilość ról Crew Killing która może pojawić się w grze    | Ilość |     3     |  0-15   |
| Max Power Roles         |     Maksymalna ilość ról Crew Power która może pojawić się w grze     | Ilość |     2     |  0-10   |
| Max Protective Roles    |  Maksymalna ilość ról Crew Protective która może pojawić się w grze   | Ilość |     2     |  0-15   |
| Max Support Roles       |    Maksymalna ilość ról Crew Support która może pojawić się w grze    | Ilość |     3     |  0-15   |

</TabItem>

 <TabItem value="Vanilla" label="Vanilla" default>

# Vanilla

Rozdawania ról w trybie **Vanilla** sprawia, że ilość **Impostorów** będzie taka jak ustawiona, a ilość **Neutrali** i **Crewmate**'ów będzie dopasowana do ilości osób w lobby

| Ustawienie               |                                                                Opis                                                                |     Typ     | Domyślnie |                  Wartość                   |
|--------------------------|:----------------------------------------------------------------------------------------------------------------------------------:|:-----------:|:---------:|:------------------------------------------:|
| Role Assigment Type      |                                             Ustawia sposób w jaki będą rozdawane rolę                                              |   String    | Role List | Role List / Min/Max List / Draft / Vanilla |

</TabItem>
</Tabs>