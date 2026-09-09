import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Prosecutor.png')} alt="Icon" align="left" style={{height: 60}} />

# Prosecutor

### *Wyrzuć wybranego przez siebie gracza na spotkaniu*

**Przynależność: Crew Power (Wpływowy)**

**Prosecutor** na spotkaniu może wygłosować wybranego gracza, nadając mu 5 głosów i anulując głosy innych.\
Dodatkowo widzi on głosy innych graczy, nawet jeśli ustawienie Anonymous Votes jest włączone.

### Umiejętności

|                                             Przycisk                                              |  Umiejętność  |                     Opis                     |           Użycie            |
|:-------------------------------------------------------------------------------------------------:|:-------------:|:--------------------------------------------:|:---------------------------:|
| <img src={useBaseUrl('/img/PrzyciskiCrew/ProsProsecute.png')} alt="Button" style={{width: 50}} /> | **Prosecute** | Pozwala Prosecutorowi wyrzucić wybraną osobę | Na graczu podczas spotkania |

### Opcje

| Ustawienie              |                           Opis                            |  Typ   |    Domyślnie     |                         Wartość                         |
|-------------------------|:---------------------------------------------------------:|:------:|:----------------:|:-------------------------------------------------------:|
| On Wrongful Prosecution |   Ustawia czy Prosecutor umrze gdy wygłosuje Crewmate'a   | String | Eject Prosecutor | Eject Prosecutor / Eject Victim, Lose Uses / Eject Both |
| Max Prosecutions        | Maksymalna ilość wygłosowań które Prosecutor może wykonać | Ilość  |        2         |                           1-5                           |