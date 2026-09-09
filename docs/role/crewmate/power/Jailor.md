import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Jailor.png')} alt="Icon" align="left" style={{height: 60}} />

# Jailor

### *Wrzuć graczy do więzienia i przeprowadź egzekucje na złoczyńcach!*

**Przynależność: Crew Power (Wpływowy)**

**Jailor** może zamknąć jednego gracza w więzieniu, aby podczas spotkania móc z nim prywatnie rozmawiać.\
Jeśli uzna, że osoba w więzieniu jest zła, może ją zabić.\
Jeżeli zabije Crewmate’a, dowie się o tym od razu i straci możliwość zamykania graczy w więzieniu.

### Umiejętności

|                                             Przycisk                                              | Umiejętność |                                             Opis                                              |           Użycie            |
|:-------------------------------------------------------------------------------------------------:|:-----------:|:---------------------------------------------------------------------------------------------:|:---------------------------:|
|  <img src={useBaseUrl('/img/PrzyciskiCrew/JailorJail.png')} alt="Button" style={{width: 50}} />   |  **Jail**   | Podczas rundy Jailor może wybrać jednego gracza którego podczas spotkania zamknie w więzieniu |          Na graczu          |
| <img src={useBaseUrl('/img/PrzyciskiCrew/JailorExecute.png')} alt="Button" style={{width: 50}} /> | **Execute** |     Gdy Jailor uzna, że osoba w więzieniu jest zła, może przeprowadzić na nim egzekucje.      | Na graczu podczas spotkania |

### Opcje

| Ustawienie                      |                                   Opis                                   |     Typ     | Domyślnie |  Wartość  |
|---------------------------------|:------------------------------------------------------------------------:|:-----------:|:---------:|:---------:|
| Jail Cooldown                   |          Czas który Jailor musi odczekać pomiędzy użyciami Jail          |    Czas     |    20s    |  1s-30s   |
| Max Number Of Executes          |           Maksymalna ilość egzekucji które Jailor może wykonać           |    Ilość    |     3     |    1-5    |
| Jail Same Person Twice In A Row | Ustawia czy Jailor może zamknąć tą samą osobę 2 razy z rządu w więzieniu | Przełącznik |    Nie    | Tak / Nie |
| Jailee Can Use Public Chat      |        Ustawia czy osoba w więzieniu może odzywać się publicznie         | Przełącznik |    Nie    | Tak / Nie |