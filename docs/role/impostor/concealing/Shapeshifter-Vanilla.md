import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Shapeshifter.png')} alt="Icon" align="left" style={{height: 60}} />

# Shapeshifter

### *Przebierz się!*

**Przynależność: Imp Concealing (Skrywający)**

**Shapeshifer** może przebrać się za innego gracza, sprawiając, że będzie wyglądał on identycznie do niego.\
Po wyborze gracza, **Shapeshifter** zacznie animacje w której będzie zamknięty w "Jajku" na 2 sekundy. "Jajko" będzie zawsze w prawdziwym kolorze **Shapeshiftera**.

### Umiejętności

|                                             Przycisk                                              | Umiejętność |                                     Opis                                     |           Użycie            |
|:-------------------------------------------------------------------------------------------------:|:-----------:|:----------------------------------------------------------------------------:|:---------------------------:|
| <img src={useBaseUrl('/img/PrzyciskiImp/MorphlingMorph.png')} alt="Button" style={{width: 50}} /> |  **Shift**  | Za pomocą tabletu daje możliwość wybrania gracza za którego się przebierzesz | Na graczu za pomocą tabletu |
| <img src={useBaseUrl('/img/PrzyciskiImp/MorphlingMorph.png')} alt="Button" style={{width: 50}} /> | **Unshift** |                  Pozwala zakończyć Shapeshifta przed czasem                  |          Bez celu           |

### Opcje

| Ustawienie                   |                                 Opis                                 |     Typ     | Domyślnie |  Wartość   |
|------------------------------|:--------------------------------------------------------------------:|:-----------:|:---------:|:----------:|
| Leave Shapeshifting Evidence | Ustawia czy Shapeshifter zostawia na ziemi ślad po użyciu Shapeshift | Przełacznik |    Nie    | Tak / Nie  |
| Shapeshift Duration          |              Czas przez który Shapeshift będzie aktywny              |    Czas     |    10s    |   5s-90s   |
| Shapeshift Cooldown          |  Czas który Shapeshifter musi odczekać pomiędzy użyciami Shapeshift  |    Czas     |    10s    | 5s-30s / ∞ |