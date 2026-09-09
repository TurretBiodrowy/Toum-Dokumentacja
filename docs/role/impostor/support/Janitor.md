import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Janitor.png')} alt="Icon" align="left" style={{height: 60}} />

# Janitor

### *Posprzątaj na mapie!*

**Przynależność: Imp Support (Wsparcie)**

**Janitor** może posprzątać ciało sprawiając, że zniknie ono z mapy, vitalsów oraz nie pokaże się na spotkaniu mimo, że gracz będzie martwy.\
Po użyciu **Clean** **Janitor** będzie musiał chwile stanąć przy ciele zanim to w pełni zniknie.

### Umiejętności

|                                           Przycisk                                           | Umiejętność |                                                Opis                                                 |  Użycie  |
|:--------------------------------------------------------------------------------------------:|:-----------:|:---------------------------------------------------------------------------------------------------:|:--------:|
| <img src={useBaseUrl('/img/PrzyciskiImp/JaniClean.png')} alt="Button" style={{width: 50}} /> |  **Clean**  | Pozwala wyczyścić ciało, sprawiając, że znika ono z mapy, vitalsów oraz nie pokaże się na spotkaniu | Na ciele |

### Opcje

| Ustawienie                            |                               Opis                               |     Typ     |   Domyślnie   |              Wartość              |
|---------------------------------------|:----------------------------------------------------------------:|:-----------:|:-------------:|:---------------------------------:|
| Clean Uses Per Game                   |             Ile razy na grę Janitor może użyć Clean              |    Ilość    |       ∞       |             5-15 / ∞              |
| Clean Cooldown                        |       Czas który Janitor musi odczekać przed użyciem Clean       |    Czas     |     40.0s     |            10.0s-60.0s            |
| Clean Delay                           | Ile sekund Janitor musi stać przy ciele zanim te w pełni zniknie |    Czas     |     2.5s      |            0.0s-60.0s             |
| Reset Kill & Clean Cooldowns Together |   Ustawia czy przyciski Kill oraz Clean mają dzielony Cooldown   |   String    | With Teammats | With Teammates / Always / Unliked |
| Janitor Can Kill With Teammate        |    Ustawia czy Janitor może zabijać gdy ma żyjącego partnera     | Przełącznik |      Tak      |             Tak / Nie             |