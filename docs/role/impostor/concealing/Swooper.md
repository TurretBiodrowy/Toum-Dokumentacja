import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Swooper.png')} alt="Icon" align="left" style={{height: 60}} />

# Swooper

### *Stań się niewidzialny!*

**Przynależność: Imp Concealing (Skrywający)**

**Swooper** może tymczasowo stać się niewidzialnym dla wszystkich graczy.

### Umiejętności

|                                             Przycisk                                              | Umiejętność |                                    Opis                                     |  Użycie  |
|:-------------------------------------------------------------------------------------------------:|:-----------:|:---------------------------------------------------------------------------:|:--------:|
|  <img src={useBaseUrl('/img/PrzyciskiImp/SwooperSwoop.png')} alt="Button" style={{width: 50}} />  |  **Swoop**  | Tymczasowo sprawia, że Swooper staje się niewidzialny dla wszystkich graczy | Bez celu |
| <img src={useBaseUrl('/img/PrzyciskiImp/SwooperUnSwoop.png')} alt="Button" style={{width: 50}} /> | **Unswoop** |             Pozwala przedwcześnie stać się spowrotem widocznym              | Bez celu |

### Opcje

| Ustawienie                     |                           Opis                           |  Typ   |   Domyślnie   |            Wartość             |
|--------------------------------|:--------------------------------------------------------:|:------:|:-------------:|:------------------------------:|
| Swoop Uses Per Round           |       Ile razy na rundę Swooper może użyć Swooper        | Ilość  |       ∞       |            1-10 / ∞            |
| Swoop Cooldown                 | Czas który Swooper musi odczekać pomiędzy użyciami Swoop |  Czas  |     25.0s     |          10.0s-60.0s           |
| Swoop Duration                 |          Czas przez który Swoop będzie aktywny           |  Czas  |     10.0s     |           5.0s-15.0s           |
| Can be Tracked while Invisible |                                                          | String |    Always     | Always / Never / Not by Radar  |
| Swooper Can Vent               |        Decyduje kiedy Swooper może używać ventów         | String | While Visible | Always / While Visible / Never |