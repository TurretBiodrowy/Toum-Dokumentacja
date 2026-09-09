import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Oracle.png')} alt="Icon" align="left" style={{height: 60}} />

# Oracle

### *Zmuś graczy do wyznania ci wszelkich grzechów!*

**Przynależność: Crew Protective (Ochronny)**

**Oracle** za pomocą **Confess** może zmusić wybranego gracza do wyznania mu informacji w postaci listy 3 graczy (Wybrany gracz + 2 losowe osoby), z których zawsze co najmniej jeden zawsze będzie zły.\
Używając **Bless** może ochronić wybranego gracza przed wygłosowaniem podczas spotkania oraz przed zostaniem zgadniętym przez Assassina.\
Dodatkowo gdy Oracle umrze, gracz który wyznawał mu informacje będzie miał swoją frakcję ujawnioną na spotkaniu.

### Umiejętności

|                                             Przycisk                                              | Umiejętność |                                                             Opis                                                              |  Użycie   |
|:-------------------------------------------------------------------------------------------------:|:-----------:|:-----------------------------------------------------------------------------------------------------------------------------:|:---------:|
| <img src={useBaseUrl('/img/PrzyciskiCrew/OracleConfess.png')} alt="Button" style={{width: 50}} /> | **Confess** | Pozwala Oracle'owi wybrać gracza który poda mu informacje. Jeśli Oracle zginie, ten gracz będzie miał ujawnioną swoją frakcję | Na graczu |
|  <img src={useBaseUrl('/img/PrzyciskiCrew/OracleBless.png')} alt="Button" style={{width: 50}} />  |  **Bless**  |                        Pozwala Oracle'owi ochronić gracza przed zostaniem wygłosowanym oraz zgadniętym                        | Na graczu |

### Opcje

| Ustawienie                      |                                  Opis                                   |     Typ     | Domyślnie |   Wartość   |
|---------------------------------|:-----------------------------------------------------------------------:|:-----------:|:---------:|:-----------:|
| Confess Cooldown                |        Czas który Oracle musi odczekać pomiędzy użyciami Confess        |    Czas     |    20s    |   1s-30s    |
| Bless Cooldown                  |         Czas który Bless musi odczekać pomiędzy użyciami Bless          |    Czas     |   25.0s   | 10.0s-60.0s |
| Reveal Accuracy                 |    Szansa na poprawne ujawnienie frakcji gracza po śmierci Oracle'a     |   Procent   |    80%    |   0%-100%   |
| Neutral Benign Show Up As Evil  | Ustawia czy rolę Neutral Benign liczą się jako złe przy użyciu Confess  | Przełącznik |    Nie    |  Tak / Nie  |
| Neutral Evil Show Up As Evil    |  Ustawia czy rolę Neutral Evil liczą się jako złe przy użyciu Confess   | Przełącznik |    Nie    |  Tak / Nie  |
| Neutral Killing Show Up As Evil | Ustawia czy rolę Neutral Killing liczą się jako złe przy użyciu Confess | Przełącznik |    Tak    |  Tak / Nie  |
| Neutral Outlier Show Up As Evil | Ustawia czy rolę Neutral Outlier liczą się jako złe przy użyciu Confess | Przełącznik |    Tak    |  Tak / Nie  |