import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Inquisitor.png')} alt="Icon" align="left" style={{height: 60}} />

# Inquisitor

### *Pozbąć się Heretyków!*

**Przynależność: Neutral Outlier (Odrzutek)**

**Inquistor** na początek gry, dostaje paru graczy jako swoich **heretyków** których musi się pozbyć, aby opuścić grę wygranym.\
Nie wie on, którzy gracze są **heretykami**, ale zna ich rolę.\
Używająć **Inquire** może sprawdzić czy gracz jest jednym z **heretyków**, ale dowie się on o tym dopiero na spotkaniu.\
Posiada on także możliwość zabijania, lecz jeśli zabije gracza który nie jest **heretykiem**, straci ją.\
Jeżeli wygra przed ostatnią trójką graczy, nie kończy gry.

### Umiejętności

|                                            Przycisk                                             | Umiejętność  |                            Opis                            |  Użycie   |
|:-----------------------------------------------------------------------------------------------:|:------------:|:----------------------------------------------------------:|:---------:|
| <img src={useBaseUrl('/img/PrzyciskiNeut/InqVanquish.png')} alt="Button" style={{width: 50}} /> | **Vanquish** |                    Pozwala zabić gracza                    | Na graczu |
| <img src={useBaseUrl('/img/PrzyciskiNeut/InqInquire.png')} alt="Button" style={{width: 50}} />  | **Inquire**  | Pozwala Inquisitorowi sprawdzić gracza czy jest Heretykiem | Na graczu |

### Opcje

| Ustawienie                          |                                      Opis                                       |     Typ     | Domyślnie |   Wartość   |
|-------------------------------------|:-------------------------------------------------------------------------------:|:-----------:|:---------:|:-----------:|
| Vanquish Cooldown                   |           Czas który Inquisitor musi odczekać przed użyciem Vanquish            |    Czas     |   25.0s   | 0.5s-120.0s |
| Allow Vanquish in First Round       |      Ustawia czy Inquisitor może użyć Vanquish przed pierwszym spotkaniem       | Przełącznik |    Nie    |  Tak / Nie  |
| Inquistor Continues Game In Final 3 | Ustawia czy Inquisitor będzie przedłużał grę gdy znajdzie się w finalnej trójce | Przełącznik |    Tak    |  Tak / Nie  |
| Inquistor Can't Inquire             |              Ustawia czy Inquisitor nie będzie mógł używać Inquire              | Przełącznik |    Nie    |  Tak / Nie  |
| ┣ Inquire Cooldown                  |           Czas który Inquisitor musi odczekać przed użyciem Vanquish            |    Czas     |   25.0s   | 0.5s-120.0s |
| ┗ Max Number Of Inquiries           |         Maksymalna ilość Inquire które Inquistor może użyć podczas gry          |    Ilość    |     5     |    1-15     |
| Amount Of Heretics Needed           |                   Ilość Heretyków którą Inquisitor musi zabić                   |    Ilość    |     3     |     3-5     |
| ┗ Hide Role On Win Notification     |         Decyduje, czy informacja o wygranej Inquisitora jest anonimowa          | Przełącznik |    Nie    |  Tak / Nie  |