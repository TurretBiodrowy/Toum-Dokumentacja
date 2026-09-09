import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Miner.png')} alt="Icon" align="left" style={{height: 60}} />

# Miner

### *Stwórz nową sieć Ventów!*

**Przynależność: Imp Support (Wsparcie)**

**Miner** może wykopać dodatkowe venty na mapie które będą między sobą połączone.\
Każda role Ventująca będzie mogła skorzystać z ventów **Minera**.

### Umiejętności

|                                           Przycisk                                           | Umiejętność |             Opis              |    Użycie    |
|:--------------------------------------------------------------------------------------------:|:-----------:|:-----------------------------:|:------------:|
| <img src={useBaseUrl('/img/PrzyciskiImp/MinerMine.png')} alt="Button" style={{width: 50}} /> |  **Mine**   | Pozwala stworzyć nowego venta | Na otoczeniu |

### Opcje

| Ustawienie                     |                          Opis                           |     Typ     | Domyślnie |        Wartość        |
|--------------------------------|:-------------------------------------------------------:|:-----------:|:---------:|:---------------------:|
| Number Of Miner Vents Per Game |    Ile razy na grę Miner może stworzyć nowego Venta     |    Ilość    |     ∞     |       5-30 / ∞        |
| Mine Cooldown                  |    Czas który Miner musi odczekać przed użyciem Mine    |    Czas     |   25.0s   |      5.0s-120.0s      |
| Mine Visibility                |          Kiedy stworzony Vent będzie widoczny           |   String    | Immediate | Immediate / After Use |
| ┗ Mine Delay                   |   Po jakim czasie od stworzenia Vent będzie widoczny    |    Czas     |   3.0s    |      0.0s-10.0s       |
| Miner Can Kill With Teammate   | Ustawia czy Miner może zabijać gdy ma żyjącego partnera | Przełącznik |    Tak    |       Tak / Nie       |