import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Puppeteer.png')} alt="Icon" align="left" style={{height: 60}} />

# Puppeteer

### *Kontroluj czyny innych!*

**Przynależność: Imp Power (Silny)**

**Puppeteer** za pomocą tabletu może tymczasowo przejąć kontrolę nad innym graczem, aby poruszać się nim, oraz móc kogoś zabić za jego pomocą.\
Podczas kontroli **Puppeteer** nie będzie mógł się poruszać, oraz nie będzie widział co się dzieje wokół niego.

**Uwaga**! Jeśli nie możesz poruszać kontrolowanym graczem należy wejść w **Ustawienia** > **Change Key Bindings...** nacisnąć **Restore Default** i **Yes**\
To zresetuje wam wszytkie przypisane klawisze ale także ustawi kontrolowanie na **WSAD** oraz **strzałki**.

### Umiejętności

|                                             Przycisk                                             | Umiejętność |                              Opis                              |           Użycie            |
|:------------------------------------------------------------------------------------------------:|:-----------:|:--------------------------------------------------------------:|:---------------------------:|
| <img src={useBaseUrl('/img/PrzyciskiImp/PuppetControl.png')} alt="Button" style={{width: 50}} /> | **Control** | Pozwala przejąć kontrolę nad graczem, aby zabić za jego pomocą | Na graczu za pomocą tabletu |

### Opcje

| Ustawienie                                    |                                                Opis                                                 |     Typ     | Domyślnie |   Wartość    |
|-----------------------------------------------|:---------------------------------------------------------------------------------------------------:|:-----------:|:---------:|:------------:|
| Initial Control Uses                          |                             Ilość kontrol z którą Puppeteer zaczyna grę                             |    Ilość    |     3     |   0-30 / ∞   |
| Kill Required For Additional Control Use      |                     Co ile zabójstw Puppeteer dostaje dodatkowe użycie kontroli                     |    Ilość    |     2     |  Off / 1-15  |
| Puppeteer Location Hint Duration (For Victim) | Przez ile sekund gracz kontrolowany będzie miał strzałkę w stronę z oryginalnego miejsca Puppeteera |    Czas     |    3s     | Off / 1s-30s |
| Control Cooldown                              |                      Czas który Puppeteer musi odczekać przed użyciem Control                       |    Czas     |   25.0s   | 10.0s-120.0s |
| Control Duration                              |                               Czas przez który Control będzie aktywny                               |    Czas     |   10.0s   | 5.0s-120.0s  |
| Puppeteer Can Vent                            |                              Ustawia czy Puppeteer może używać ventów                               | Przełącznik |    Tak    |  Tak / Nie   |