import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Blackmailer.png')} alt="Icon" align="left" style={{height: 60}} />

# Blackmailer

### *Wycisz Crewmate'ów podczas spotkań!*

**Przynależność: Imp Support (Wsparcie)**

**Blackmailer** może uciszyć dowolnego gracza, sprawiając, że na spotkaniu nie będzie mógł się odzywać ani głosować do póki nie zostanie mniejsza ilość graczy.\
Inni gracze na spotkaniu będą widzieć wyciszonego gracza z bordową plakietką.

### Umiejętności

|                                             Przycisk                                             |  Umiejętność  |                                        Opis                                         |  Użycie   |
|:------------------------------------------------------------------------------------------------:|:-------------:|:-----------------------------------------------------------------------------------:|:---------:|
| <img src={useBaseUrl('/img/PrzyciskiImp/BmerBlackmail.png')} alt="Button" style={{width: 50}} /> | **Blackmail** | Wycisza gracza na spotkaniu sprawiając, że nie będzie mógł się odzywać ani głosować | Na Graczu |

### Opcje

| Ustawienie                           |                                              Opis                                              |     Typ     | Domyślnie |  Wartość  |
|--------------------------------------|:----------------------------------------------------------------------------------------------:|:-----------:|:---------:|:---------:|
| Number Of Blackmail Uses Per Game    |                        Ile razy na grę Blackmailer może użyć Blackmail                         |    Ilość    |     ∞     | 5-15 / ∞  |
| Blackmail Cooldown                   |                  Czas który Blackmailer musi odczekać przed użyciem Blackmail                  |    Czas     |    20s    |   1-30s   |
| Max Players Alive Until Voting       | Maksymalna ilość graczy która może być przy życiu zanim głosy wyciszonej osoby będą się liczyć |    Ilość    |     5     |   1-15    |
| Blackmail Same Person Twice In A Row |         Ustawia czy Blackmailer może użyć Blackmail na tej samej osobie 2 razy z rzędu         | Przełącznik |    Nie    | Tak / Nie |
| Only Target Sees Blackmail           |        Ustawia czy tylko Impostorzy oraz osoba wyciszona widzą Blackmaila na spotkaniu         | Przełącznik |    Nie    | Tak / Nie |
| Blackmailer Can Kill With Teammate   |                 Ustawia czy Blackmailer może zabijać gdy ma żyjącego partnera                  | Przełącznik |    Tak    | Tak / Nie |