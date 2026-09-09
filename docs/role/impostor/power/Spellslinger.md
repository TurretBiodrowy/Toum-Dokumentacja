import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Spellslinger.png')} alt="Icon" align="left" style={{height: 60}} />

# Spellslinger

### *Nałoż Hexy na graczy by zakończyć grę!*

**Przynależność: Imp Power (Silny)**

**Spellslinger** podczas gry nakłada na innych **Hexy**.\
Gdy każdy żyjący gracz miał nałożonego **Hexa**, **Spellslinger** dostanie nową umiejętność **Hex bomb**.\
W momencie którym **Spellslinger** użyje **Hex Bomb**, zacznie się odliczanie. Jeżeli przeżyje on całe odliczanie gra skończy się wygraną **Impostorów**.

### Umiejętności

|                                                Przycisk                                                | Umiejętność  |                                                Opis                                                 |  Użycie   |
|:------------------------------------------------------------------------------------------------------:|:------------:|:---------------------------------------------------------------------------------------------------:|:---------:|
|   <img src={useBaseUrl('/img/PrzyciskiImp/SpellslingerHex.png')} alt="Button" style={{width: 50}} />   |   **Hex**    |                                   Pozwala nałożyć Hexa na gracza                                    | Na graczu |
| <img src={useBaseUrl('/img/PrzyciskiImp/SpellslingerHexBomb.png')} alt="Button" style={{width: 50}} /> | **Hex Bomb** | Natychmiastowo włacza Hex Bombę, która po ustawionym czasie skończy grę jeśli Spellslinger przeżyje | Bez celu  |

### Opcje

| Ustawienie        |                               Opis                               |  Typ  | Domyślnie |   Wartość   |
|-------------------|:----------------------------------------------------------------:|:-----:|:---------:|:-----------:|
| Hex Cooldown      |     Czas który Spellslinger musi odczekać przed użyciem Hex      | Czas  |   25.0s   | 5.0s-120.0s |
| Max Hexes         |      Maksymalna ilość Hexów które Spellslinger może nałożyć      | Ilość |     5     |    3-15     |
| Hex Bomb Duration | Czas który Spellslinger musi przeżyć aby zakończyć grę Hex bombą | Czas  |   120s    |  30s-180s   |