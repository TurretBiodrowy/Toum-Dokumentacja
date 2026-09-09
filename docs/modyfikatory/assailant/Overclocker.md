import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Mody/Overclocker.png')} alt="Icon" align="left" style={{height: 60}}/>

# Overclocker

### *Przyśpiesz swoje cooldowny!*

**Typ: Utility (Użytkowy)**

**Overclocker** może na chwilę, znacznie przyśpieszyć progres swoich cooldownów, za cenę tego, że pod koniec czasu i całą kolejną rundę będą one wolniejsze. 

**Glitch**, **Juggernaut**, **Werewolf**, **Bomber**, **Scavenger** oraz **Warlock** nie mogą dostać **Overclockera**.

### Umiejętność

|                                             Przycisk                                              |  Umiejętność   |                                 Opis                                  |    Typ     |
|:-------------------------------------------------------------------------------------------------:|:--------------:|:---------------------------------------------------------------------:|:----------:|
| <img src={useBaseUrl('/img/PrzyciskiModif/OCOverclock.png')} alt="Button" style={{width: 50}} />  | **Overclock**  |      Przyśpiesza wszystkie aktywne cooldowny przez aktywny czas       |  Bez celu  |
| <img src={useBaseUrl('/img/PrzyciskiModif/OCUnderclock.png')} alt="Button" style={{width: 50}} /> | **Underclock** |     Informuje gracza o tym, że jego cooldowny są teraz wolniejsze     | Informacja |

### Opcje

| Ustawienie                     |                             Opis                             |     Typ     | Domyślnie |   Wartość    |
|--------------------------------|:------------------------------------------------------------:|:-----------:|:---------:|:------------:|
| Overclock Cooldown             |      Czas który trzeba odczekać przed użyciem Overclock      |    Czas     |   5.0s    | 5.0s-120.0s  |
| Overclock Duration             |          Czas przez który Overclock będzie aktywny           |    Czas     |   50.0s   | 20.0s-120.0s |
| Allow Overclock in First Round |     Ustawia czy Overclocka można użyć w piewszej rundzie     | Przełącznik |    Nie    |  Tak / Nie   |
| Overclock Uses                 |               Maksymalna ilość użyć Overclock                |    Ilość    |     2     |     1-5      |
| Overclock Cooldown Multiplier  |      Ile razy szybsze będą cooldowny podczas Overclocka      |   Mnożnik   |   2.00x   | 1.10x-3.00x  |
| Underclock Cooldown Multiplier | Ile razy wolniejsze będą cooldwony po zakończonym Overclocku |   Mnożnik   |   0.50x   | 0.20x-0.90x  |