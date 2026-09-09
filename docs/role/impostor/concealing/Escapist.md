import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Escapist.png')} alt="Icon" align="left" style={{height: 60}} />

# Escapist

### *Ucieknij od ciała z łatwizną!*

**Przynależność: Imp Concealing (Skrywający)**

**Escapist** może co rundę wybrać jedno miejsce, do którego będzie mógł się teleportować w dowolnym momencie.

### Umiejętności

|                                           Przycisk                                           | Umiejętność |                                  Opis                                  |    Użycie    |
|:--------------------------------------------------------------------------------------------:|:-----------:|:----------------------------------------------------------------------:|:------------:|
|  <img src={useBaseUrl('/img/PrzyciskiImp/EscMark.png')} alt="Button" style={{width: 50}} />  |  **Mark**   |                Pozwala zaznaczyć jedno miejsce na mapie                | Na otoczeniu |
| <img src={useBaseUrl('/img/PrzyciskiImp/EscRecall.png')} alt="Button" style={{width: 50}} /> | **Recall**  | Natychmiastowo teleportuje Escapiste do zaznaczonego wcześniej miejsca |   Bez celu   |

### Opcje

| Ustawienie           |                           Opis                            |     Typ     | Domyślnie |   Wartość   |
|----------------------|:---------------------------------------------------------:|:-----------:|:---------:|:-----------:|
| Recall Uses Per Game |         Ile razy na grę Escapist może użyć Recall         |    Ilość    |     ∞     |  1-15 / ∞   |
| Recall Cooldown      | Czas który Eclipsal musi odczekać pomiędzy użyciami Blind |    Czas     |   25.0s   | 5.0s-120.0s |
| Escapist Can Vent    |          Ustawia czy Escapist może używać ventów          | Przełącznik |    Tak    |  Tak / Nie  |