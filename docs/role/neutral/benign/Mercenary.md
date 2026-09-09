import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Mercenary.png')} alt="Icon" align="left" style={{height: 60}} />

# Mercenary

### *Przekup innych graczy!*

**Przynależność: Neut Benign (Nieszkodliwy)**

**Mercenary** może użyć umiejętności na graczu, by z każdej wykonanej na nim interakcji, zdobyć 1 złoto.\
Jeśli obroni gracza przed atakiem, zdobędzie więcej złota.\
Gdy zdobędzie już wystarczająco złota, może przekupić jakiegoś gracza, aby móc z nim wygrać.

### Umiejętności

|                                           Przycisk                                            | Umiejętność |                                          Opis                                          |  Użycie   |
|:---------------------------------------------------------------------------------------------:|:-----------:|:--------------------------------------------------------------------------------------:|:---------:|
| <img src={useBaseUrl('/img/PrzyciskiNeut/MercGuard.png')} alt="Button" style={{width: 50}} /> |  **Guard**  |   Ochrania gracza przed interakcjami i zabójstwami, oraz zbiera złoto dla Mercenary    | Na graczu |
| <img src={useBaseUrl('/img/PrzyciskiNeut/MercBribe.png')} alt="Button" style={{width: 50}} /> |  **Bribe**  | Gdy Mercenary uzbiera wystarczająco złota, może przekupić gracza by wygrać razem z nim | Na graczu |

### Opcje

| Ustawienie                  |                                Opis                                 |     Typ     | Domyślnie |   Wartość   |
|-----------------------------|:-------------------------------------------------------------------:|:-----------:|:---------:|:-----------:|
| Bribe Cooldown              |       Czas który Mercenary musi odczekać przed użyciem Bribe        |    Czas     |   25.0s   | 5.0s-120.0s |
| Max Number Of Guards        |         Maksymalna ilość ochron które Mercenary może nadać          |    Ilość    |     6     |    1-15     |
| Bribe Cost                  |       Ile złota potrzebuje Mercenary aby móc kogoś przekupić        |    Ilość    |     2     |    1-15     |
| Guarding Stops Attacks      |             Ustawia czy Guard broni także przed atakami             | Przełacznik |    Tak    |  Tak / Nie  |
| ┗ Gold Given From An Attack | Ilość złota które Mercenary dostanie gdy obroni kogoś przed atakiem |    Ilość    |     2     |     0-3     |