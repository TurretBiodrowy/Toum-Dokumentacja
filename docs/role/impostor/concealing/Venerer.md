import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Venerer.png')} alt="Icon" align="left" style={{height: 60}} />

# Venerer

### *Zabijaj by stać się silniejszym!*

**Przynależność: Imp Concealing (Skrywający)**

**Venerer** na początek gry startuje bez specjalnej umiejętności.\
Po swoim pierwszym zabójstwie odblokuj swoją umiejętność, dzięki której będzie mógł się **zakamuflować**, oraz którą będzie ulepszał co kolejne zabicie.\
Gdy zabije dwa razy będzie **biegał szybciej**, a jak zabije trzy razy to **spowalnia innych** graczy wokół.\
Jeżeli **Venerer** zabije gracza podczas gdy ma aktywną umiejętność, następny poziom umiejętności będzie aktywny dopiero przy następnym użyciu. 

### Umiejętności

|                                           Przycisk                                           |  Umiejętność   |                                          Opis                                          |  Użycie  |
|:--------------------------------------------------------------------------------------------:|:--------------:|:--------------------------------------------------------------------------------------:|:--------:|
|  <img src={useBaseUrl('/img/PrzyciskiImp/VenCamo.png')} alt="Button" style={{width: 50}} />  | **Camouflage** |  Po pierwszym zabójstwie Venerer dostaje możliwość zakamuflowania się na parę sekund   | Bez celu |
| <img src={useBaseUrl('/img/PrzyciskiImp/VenSprint.png')} alt="Button" style={{width: 50}} /> |   **Sprint**   | Po drugim zabójstwie Venerer dodatkowo będzie biegał szybciej gdy będzie zakamuflowany | Bez celu |
| <img src={useBaseUrl('/img/PrzyciskiImp/VenFreeze.png')} alt="Button" style={{width: 50}} /> |   **Freeze**   |      Po trzecim zabójstwie Venerer sprawia, że gracze w okoł niego będą wolniejsi      | Bez celu |

### Opcje

| Ustawienie           |                                           Opis                                            |   Typ   | Domyślnie |   Wartość   |
|----------------------|:-----------------------------------------------------------------------------------------:|:-------:|:---------:|:-----------:|
| Ability Cooldown     |          Czas który Venerer musi odczekać pomiędzy użyciami obecnej Umiejętności          |  Czas   |   25.0s   | 5.0s-120.0s |
| Ability Duration     |                Czas przez który obecna Umiejętność Venerera będzie aktywny                |  Czas   |    10s    |   5s-15s    |
| Sprint Speed         |         O ile razy szybszy będzie Venerer podczas Umiejętności po drugim zabiciu          | Mnożnik |   1.25x   | 1.05x-2.50x |
| Minimum Freeze Speed |        Minimalna prędkość gracza który znajdzie się wystarczająco blisko Venerera         | Mnożnik |   0.25x   | 0.05x-0.75x |
| Freeze Radius        | Jak maksymalnie daleko od Venerera może znaleźć się gracz by być pod efektem spowolnienia | Mnożnik |   1.00x   | 0.25x-5.00x |