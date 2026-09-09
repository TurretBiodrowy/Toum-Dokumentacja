import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Hunter.png')} alt="Icon" align="left" style={{height: 60}} />

# Hunter

### *Śledź zabójców by móc ich zabić gdy zrobią coś podejrzanego!*

**Przynależność: Crew Killing (Zabijający)**    

**Hunter** może śledzić innego gracza. Gdy śledzony gracz użyje jakiejkolwiek umiejętności, **Hunter** dostanie powiadomienie oraz będzie mógł go zabić.\
W przeciwieństwie do innych ról typu *Crew Killing*, **Hunter** nie ponosi konsekwencji za zabicie Crewmate’a.

### Umiejętności

|                                            Przycisk                                             | Umiejętność |                                              Opis                                               |  Użycie   |
|:-----------------------------------------------------------------------------------------------:|:-----------:|:-----------------------------------------------------------------------------------------------:|:---------:|
| <img src={useBaseUrl('/img/PrzyciskiCrew/HunterStalk.png')} alt="Button" style={{width: 50}} /> |  **Stalk**  | Hunter może śledzić osobę by automatycznie zaznaczyć ją sobie gdy wykona jakąkolwiek interakcje | Na graczu |
| <img src={useBaseUrl('/img/PrzyciskiCrew/HunterKill.png')} alt="Button" style={{width: 50}} />  |  **Kill**   |                            Pozwala Hunterowi zabić podejrzaną osobę                             | Na graczu |

### Opcje

| Ustawienie                             |                                               Opis                                                |     Typ     |   Domyślnie   |           Wartość            |
|----------------------------------------|:-------------------------------------------------------------------------------------------------:|:-----------:|:-------------:|:----------------------------:|
| Hunter Kill Cooldown                   |                      Czas który Hunter musi odczekać pomiędzy użyciami Kill                       |    Czas     |     25.0s     |         5.0s-120.0s          |
| Hunter Stalk Cooldown                  |                      Czas który Hunter musi odczekać pomiędzy użyciami Stalk                      |    Czas     |      20s      |            1s-30s            |
| Hunter Stalk Duration                  |                          Czas przez który Stalk będzie aktywny na graczu                          |    Czas     |     25.0s     |          5.0s-60.0s          |
| Max Stalk Uses                         |                             Ilość Stalków z którą Hunter zaczyna grę                              |    Ilość    |       5       |             1-15             |
| Task Required For Additional Stalk Use |               Ilość tasków musi wykonać Hunter, żeby dostać dodatkowe użycie Stalk                |    Ilość    |       1       |          Off / 1-15          |
| Stalk Triggered By                     |       Decyduje czy Stalk jest aktywowany przez wszystkie umiejętności, czy tylko interakcje       |   String    | All Abilities | All Abilities / Interactions |
| ┗ Hunter Sees Interaction Type         | Ustawia czy Hunter dowie się jaki typ umiejętności wykonał śledzony gracz (Bez celu / Interakcja) | Przełącznik |      Tak      |          Tak / Nie           |
| Hunter Last Voter If Voted Out         |                Ustawia czy Hunter zabije ostanią osobę która na niego zagłosowała                 | Przełącznik |      Tak      |          Tak / Nie           |
| Hunter Can Report Who They've Killed   |                    Ustawia czy Hunter może zgłosić ciała graczy których zabił                     | Przełącznik |      Nie      |          Tak / Nie           |