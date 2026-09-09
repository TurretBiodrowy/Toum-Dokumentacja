import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Parasite.png')} alt="Icon" align="left" style={{height: 60}} />

# Parasite

### *Przejmij kontrolę nad graczem by zabić go w innym miejscu!*

**Przynależność: Imp Killing (Zabijający)**

**Parasite** używając **Overtake** może przejąć kontrolę nad ruchem gracza. Gracz przejęty nie będzie mógł korzystać z umiejętności.\
Kontrolowany gracz umrze po ustawionym czasie albo gdy **Parasite** użyje **Kill**.\
Gdy **Parasite** umrze, bądź zostanie zwołane spotkanie gracz kontrolowany może przeżyć.\
**Parasite** będzie widział to samo co kontrolowany gracz przez małe okienko w rogu ekranu.

**Uwaga**! Jeśli nie możesz poruszać kontrolowanym graczem albo sobą należy wejść w **Ustawienia** > **Change Key Bindings...** nacisnąć **Restore Default** i **Yes**\
To zresetuje wam wszytkie przypisane klawisze ale także ustawi kontrolowanie na strzałki.

### Umiejętności

|                                            Przycisk                                            | Umiejętność  |                                                        Opis                                                         |  Użycie   |
|:----------------------------------------------------------------------------------------------:|:------------:|:-------------------------------------------------------------------------------------------------------------------:|:---------:|
| <img src={useBaseUrl('/img/PrzyciskiImp/ParOvertake.png')} alt="Button" style={{width: 50}} /> | **Overtake** | Pozwala przejąć kontrolę nad graczem, zabijając go gdy skończy się czas, badź gdy Parasite użyje znowu umiejętności | Na graczu |

### Opcje

| Ustawienie                      |                                    Opis                                     |     Typ     | Domyślnie |    Wartość     |
|---------------------------------|:---------------------------------------------------------------------------:|:-----------:|:---------:|:--------------:|
| Overtake Cooldown               |          Czas który Parasite musi odczekać przed użyciem Overtake           |    Czas     |   37.5s   |  5.0s-120.0s   |
| Kill Cooldown                   | Czas który Parasite musi odczekać zanim będzie mógł zabić przejętego gracza |    Czas     |   3.0s    |   0.0s-5.0s    |
| Control Duration                |                  Czas przez który Overtake będzie aktywny                   |    Czas     |   30.0s   | 2.5s-60.0s / ∞ |
| Save Victim If Parasite Dies    |          Ustawia czy przejęty gracz przeżyje jeśli Parasite umrze           | Przełącznik |    Tak    |   Tak / Nie    |
| Save Victim If Meeting Called   |    Ustawia czy przejęty gracz przeżyje jeśli zostanie zwołane spotkanie     | Przełącznik |    Nie    |   Tak / Nie    |
| Parasite Can Vent               |                   Ustawia czy Parasite może używać ventów                   | Przełącznik |    Tak    |   Tak / Nie    |
| Parasite Can Move Independently |        Ustawia czy Parasite może się ruszać gdy ma przejętego gracza        | Przełącznik |    Tak    |   Tak / Nie    |
| Overtaken Looks Like Parasite   |  Ustawia czy osoba przejęta przez Parasite'a będzie wyglądać jak Parasite   | Przełącznik |    Nie    |   Tak / Nie    |