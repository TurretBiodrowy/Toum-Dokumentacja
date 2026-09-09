import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Plumber.png')} alt="Icon" align="left" style={{height: 60}} />

# Plumber

### *Wyciągnij graczy z ventów!*

**Przynależność: Crew Support (Wsparcie)**

**Plumber** używając **Barricade** może zablokować venty barykadami, które pojawiają się dopiero po rundzie oraz trwają określony czas.\
Może on także, za pomocą **Flush** przeczyścić wszystkie venty, aby wyrzucić każdego znajdującego się w nich gracza. Dostanie on także strzałkę do każdego wyrzuconego gracza\
Gdy **Plumberowi** uda się wyrzucić jakiegoś gracza, dostanie strzałkę w stronę venta z którego go wyrzucił.


### Umiejętności

|                                               Przycisk                                               |  Umiejętność  |                    Opis                     |   Użycie   |
|:----------------------------------------------------------------------------------------------------:|:-------------:|:-------------------------------------------:|:----------:|
| <img src={useBaseUrl('/img/PrzyciskiCrew/PlumberBarricade.png')} alt="Button" style={{width: 50}} /> | **Barricade** |          Pozwala zablokować Venta           | Na ventcie |
|   <img src={useBaseUrl('/img/PrzyciskiCrew/PlumberFlush.png')} alt="Button" style={{width: 50}} />   |   **Flush**   | Pozwala wyrzucić wszystkich graczy z ventów | Na ventcie |

### Opcje

| Ustawienie                                |                                  Opis                                  |     Typ     | Domyślnie |   Wartość   |
|-------------------------------------------|:----------------------------------------------------------------------:|:-----------:|:---------:|:-----------:|
| Flush Cooldown                            |        Czas który Plumber musi odczekać pomiędzy użyciami Flush        |    Czas     |   25.0s   | 10.0s-60.0s |
| Flush Duration                            | Czas przez który gracze wyrzuceni przez Flush nie będą mogli ventować  |    Czas     |   3.0s    | 1.0s-20.0s  |
| Block Cooldown                            |      Czas który Plumber musi odczekać pomiędzy użyciami Barricade      |    Czas     |   25.0s   | 10.0s-60.0s |
| Initial Number Of Barricades              |              Ilość Barricade z którą Plumber zaczyna grę               |    Ilość    |     3     |    1-15     |
| Amount Of Rounds Barricades Last          |           Przez ile rund barykada będzie aktywna na ventcie            |    Ilość    |     2     |  1-15 / ∞   |
| Get More Barricades From Completing Tasks | Ustawia czy Plumber dostaje więcej użyć Barricade za wykonywanie zadań | Przełącznik |    Tak    |  Tak / Nie  |