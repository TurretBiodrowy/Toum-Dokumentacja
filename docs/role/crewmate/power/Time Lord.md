import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/TimeLord.png')} alt="Icon" align="left" style={{height: 60}} />

# Time Lord

### *Cofnij czas!*

**Przynależność: Crew Power (Wpływowy)**

**Time Lord** pare razy na grę może cofnąć czas.\
Podczas cofania czasu, pewne akcję mogą zostać cofnięte (Takie jak: Zabójstwa, Sprzątnięcia, Taski).


### Umiejętności

|                                              Przycisk                                              | Umiejętność |        Opis         |  Użycie  |
|:--------------------------------------------------------------------------------------------------:|:-----------:|:-------------------:|:--------:|
| <img src={useBaseUrl('/img/PrzyciskiCrew/TimeLordRewind.png')} alt="Button" style={{width: 50}} /> | **Rewind**  | Pozwala cofnąć czas | Bez celu |

### Opcje

| Ustawienie                                  |                                                                         Opis                                                                         |     Typ     |    Domyślnie     |               Wartość               |
|---------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------:|:----------------:|:-----------------------------------:|
| Rewind Cooldown                             |                                             Czas który Time Lord musi odczekać pomiędzy użyciami Rewind                                              |    Czas     |      30.0s       |             5.0s-120.0s             |
| Rewind Duration                             |                                              Czas przez który będzie trwała "animacja" cofnięcia czasu                                               |    Czas     |       2.5s       |             0.5s-10.0s              |
| Rewind History                              |                                               Ile sekund w tył Time Lord cofnie czas po użyciu Rewind                                                |    Czas     |       7.5s       |             1.0s-15.0s              |
| Initial Uses                                |                                                   Ilość użyć Rewind z którą Time Lord zaczyna grę                                                    |    Ilość    |        3         |              0-15 / ∞               |
| ┗ Tasks Required For Additional Rewind Uses |                                       Ilość tasków musi wykonać Time Lord, żeby dostać dodatkowe użycie Rewind                                       |    Ilość    |        3         |             Off / 1-15              |
| Can Use Vitals                              |                                                      Ustawia czy Time Lord może używać Vitalsów                                                      | Przełącznik |       Nie        |              Tak / Nie              |
| Revive On Rewind                            | Decyduje czy gracze mogą zostać ożywieni przez cofnięcie czasu, orazy czy ożywiony gracz będzie żyć permanentnie, bądź tylko do następnego spotkania |   String    | Until Next Round | Disabled / Until Next Round / Fully |
| Undo Tasks On Rewind                        |                                    Ustawia czy cofnięcie czasu cofnie taski wykonane chwile przed użyciem Rewind                                     | Przełącznik |       Tak        |              Tak / Nie              |
| Unclean Bodies On Rewind                    |                       Ustawia czy cofnięcie czasu ponownie pokaże ciała które zostały wyczyszczone chwile przed użyciem Rewind                       | Przełącznik |       Tak        |              Tak / Nie              |
| Notify Time Lord On Revive                  |                                            Ustawia czy Time Lord zostanie powiadomiony gdy kogoś odrodzi                                             | Przełącznik |       Nie        |              Tak / Nie              |