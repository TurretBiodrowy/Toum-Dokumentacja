import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Traitor.png')} alt="Icon" align="left" style={{height: 60}} />

# Traitor

### *Użyj swojej nowej roli by pomścić Impostorów!*

**Przynależność: Imp Power (Silny)**

**Traitor** pojawia się w grze gdy wszyscy **Impostorzy** zginą, a zostanie wystarczająca liczba graczy. Gracz dowie się, że został **Traitorem** dopiero po spotkaniu.\
Tylko **Crewmate**'ci z wyjątkiem Mayora mogą zostać **Traitorem**.\
**Traitor** na sam początek dostanie do wyboru 3 rolę i może wybrać aby zostać jedną z nich.

### Umiejętności

|                                             Przycisk                                             |   Umiejętność   |                                      Opis                                      |  Użycie  |
|:------------------------------------------------------------------------------------------------:|:---------------:|:------------------------------------------------------------------------------:|:--------:|
| <img src={useBaseUrl('/img/PrzyciskiImp/TraitorSelect.png')} alt="Button" style={{width: 50}} /> | **Change Role** |     Pozwala jednorazowo zmienić się w jedną z 3 wybranych ról, bądź losową     | Bez celu |

### Opcje

| Ustawienie                                  |                                        Opis                                        |     Typ     |      Domyślnie      |                 Wartość                  |
|---------------------------------------------|:----------------------------------------------------------------------------------:|:-----------:|:-------------------:|:----------------------------------------:|
| Minimum People Alive When Traitor Can Spawn |        Minimalna ilość żywych graczy przy których Traitor może się pojawić         |    Ilość    |          5          |                   3-15                   |
| Traitor Won't Spawn If NK Is Alive          |  Ustawia czy Traitor może się pojawić jeśli przy życiu są dalej Neutralni Zabójcy  | Przełącznik |         Nie         |                Tak / Nie                 |
| Disable Existing Impostor Roles             | Ustawia czy Traitor nie może dostać do wyboru rolę Impostora która była już w grze | Przełącznik |         Tak         |                Tak / Nie                 |
| Traitor Must Be Guessed As                  |             Jako jaka role Traitor może zostać zgadnięty na spotkaniu              |   String    | Traitor or New Role | Traitor / New Role / Traitor or New Role |
| Traitor Becomes Assassin                    |                       Ustawia czy Traitor zostaje Assassinem                       | Przełącznik |         Tak         |                Tak / Nie                 |