import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Phantom.png')} alt="Icon" align="left" style={{height: 60}} />

# Phantom

### *Zostań niewidzalnym!*

**Przynależność: Imp Concealing (Skrywający)**

**Phantom** może tymczasowo stać się niewidzialnym dla wszystkich graczy.\
Zniknięcie oraz pojawienie się sprawi, że zacznie grać animacja przez 2 sekundy gdzie będzie on pokryty w dymie swojego koloru.\
Gdy jesteś niewidzialny jako **Phantom** nie możesz zabijać.


### Umiejętności

|                                             Przycisk                                              | Umiejętność |                                    Opis                                     |  Użycie  |
|:-------------------------------------------------------------------------------------------------:|:-----------:|:---------------------------------------------------------------------------:|:--------:|
|  <img src={useBaseUrl('/img/PrzyciskiImp/SwooperSwoop.png')} alt="Button" style={{width: 50}} />  | **Vanish**  | Tymczasowo sprawia, że Phantom staje się niewidzialny dla wszystkich graczy | Bez celu |
| <img src={useBaseUrl('/img/PrzyciskiImp/SwooperUnSwoop.png')} alt="Button" style={{width: 50}} /> | **Appear**  |             Pozwala przedwcześnie stać się spowrotem widocznym              | Bez celu |

### Opcje

| Ustawienie        |                           Opis                            |  Typ   | Domyślnie | Wartość |
|-------------------|:---------------------------------------------------------:|:------:|:---------:|:-------:|
| Vanish Duration   |          Czas przez który Vanish będzie aktywny           |  Czas  |    30s    | 10s-90s |
| Vanish Cooldown   | Czas który Swooper musi odczekać pomiędzy użyciami Vanish |  Czas  |    15s    | 5s-60s  |