import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Werewolf.png')} alt="Icon" align="left" style={{height: 60}} />

# Werewolf

### *Wpadnij w szał i zabij wszystkich!*

**Przynależność: Neut Killing (Zabijający)**

**Werewolf** może użyc **Rampage** by przez krótki okres czasu móc zabijać innych z małym Kill Cooldownem.\
Nie może on zabijać gdy nie użyje **Rampage**.

### Umiejętności

|                                           Przycisk                                            | Umiejętność |                                              Opis                                              |   Użycie   |
|:---------------------------------------------------------------------------------------------:|:-----------:|:----------------------------------------------------------------------------------------------:|:----------:|
| <img src={useBaseUrl('/img/PrzyciskiNeut/WWRampage.png')} alt="Button" style={{width: 50}} /> | **Rampage** | Odblokowuje możliwość zabijania oraz jeśli ustawione Ventowania dla Werewolfa dany okres czasu |  Bez celu  |
|  <img src={useBaseUrl('/img/PrzyciskiNeut/WWKill.png')} alt="Button" style={{width: 50}} />   |  **Kill**   |                                      Pozwala zabić gracza                                      | Na graczu  |
|  <img src={useBaseUrl('/img/PrzyciskiNeut/WWVent.png')} alt="Button" style={{width: 55}} />   |  **Vent**   |                  Pozwala przemieszczać się pomiędzy Ventami podczas Rampage'u                  | Na ventcie |


### Opcje

| Ustawienie                      |                                   Opis                                    |     Typ     | Domyślnie |   Wartość   |
|---------------------------------|:-------------------------------------------------------------------------:|:-----------:|:---------:|:-----------:|
| Rampage Cooldown                |          Czas który Werewolf musi odczekać przed użyciem Rampage          |    Czas     |   25.0s   | 5.0s-120.0s |
| Rampage Duration                |                  Czas przez który Rampage będzie aktywny                  |    Czas     |   10.0s   | 5.0s-120.0s |
| Rampage Kill Cooldown           | Czas który Werewolf musi odczekać przed zabiciem gracza podczas Rampage'u |    Czas     |   1.5s    | 0.5s-15.0s  |
| Werewolf Can Vent When Rampaged |         Ustawia czy Werewolf może używać ventów podczas Rampage'u         | Przełącznik |    Tak    |  Tak / Nie  |