import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Mody/ButtonBarry.png')} alt="Icon" align="left" style={{height: 60}} />

# Button Barry

### *Zwołaj spotkanie skąd tylko zechcesz!*

**Typ: Utility (Użytkowy)**

Gracz z modyfikatorem **Button Barry** będzie mógł zwołać spotkanie z każdego miejsca na mapie.\
Aby móc zwołać zdalne spotkanie, **Button Barry** musi mieć dostepne zwykłe spotkanie.

### Umiejętności

|                                                Przycisk                                                | Umiejętność |              Opis               |  Typ  |
|:------------------------------------------------------------------------------------------------------:|:-----------:|:-------------------------------:|:-----:|
| <img src={useBaseUrl('/img/PrzyciskiModif/ButtonBarryButton.png')} alt="Button" style={{width: 50}} /> | **Button**  | Pozwala zwołać zdalne spotkanie | Panel |

### Opcje

| Ustawienie                 |                                                              Opis                                                              |     Typ     | Domyślnie |  Wartość   |
|----------------------------|:------------------------------------------------------------------------------------------------------------------------------:|:-----------:|:---------:|:----------:|
| Button Cooldown            |                        Czas który Button Barry musi odczekać zanim będzie mógł zwołać zdalne spotkanie                         |    Czas     |   30.0s   | 2.5s-60.0s |
| Max Uses                   | Maksymalna ilość zdalnych spotkań które Button Barry może zwołać (Domyślny limit spotkań bierze priorytet nad tym ustawieniem) |    Ilość    |     1     |    1-3     |
| Ignore Sabotages           |                             Ustawia czy Button Barry może zwołać zdalne spotkanie podczas sabotażu                             | Przełącznik |    Tak    | Tak / Nie  |
| Allow Usage In First Round |                           Ustawia czy Button Barry może zwołać zdalne spotkanie w pierwszej rundzie                            | Przełącznik |    Nie    | Tak / Nie  |