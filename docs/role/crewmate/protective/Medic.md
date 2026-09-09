import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Medic.png')} alt="Icon" align="left" style={{height: 60}} />

# Medic

### *Stwórz tarcze dla gracza by go ochronić*

**Przynależność: Crew Protective (Ochronny)**

**Medic** może nadać tarczę na graczy, która chroni przed wszelkimi próbami zabicie.\
Jeśli ktoś spróbuje zabić gracza z tarczą, **Medic** dostanie zielone mignięcie.\
Gdy **Medic** zgłosi ciało w odpowiednim odstępie czasowym, może dostać informacje o zabójcy, w postaci jego Nicku, bądź typu koloru. (Lighter-Jaśniejszy, Darker-Ciemniejszy).

### Umiejętności

|                                            Przycisk                                             | Umiejętność |                Opis                |  Użycie   |
|:-----------------------------------------------------------------------------------------------:|:-----------:|:----------------------------------:|:---------:|
| <img src={useBaseUrl('/img/PrzyciskiCrew/MedicShield.png')} alt="Button" style={{width: 50}} /> | **Shield**  | Tworzy tarcze dla wybranego gracza | Na graczu |

### Opcje

| Ustawienie                              |                                           Opis                                            |     Typ     |    Domyślnie     |                         Wartość                         |
|-----------------------------------------|:-----------------------------------------------------------------------------------------:|:-----------:|:----------------:|:-------------------------------------------------------:|
| Show Shielded Player                    |                                 Kto widzi osobę z tarczą                                  |   String    | Shielded + Medic | Medic / Shielded / Shielded + Medic / Everyone / No one |
| Who Gets Murder Attempt Indicator       |                Kto dostaje powiadomienie o próbie zabójstwa osoby z tarczą                |   String    |      Medic       | Medic / Shielded / Shielded + Medic / Everyone / No one |
| Can Give Away Shield Next Round         |                       Ustawia czy Medic może zmienić osobę z tarczą                       | Przełącznik |       Tak        |                        Tak / Nie                        |
| ┗ Max Amount Of Shield Uses             |                        Ile razy Medic może zmienić osobę z tarczą                         |    Ilość    |        3         |                        1-15 / ∞                         |
| Shield Breaks On Murder Attempt         |                   Ustawia czy tarcza niszczy się przy próbie zabójstwa                    | Przełącznik |       Nie        |                        Tak / Nie                        |
| Show Reports In Chat                    |                 Ustawia czy Medic dostanie raporty o ciałach które zgłosi                 | Przełącznik |       Tak        |                        Tak / Nie                        |
| ┣ Time Where Medic Will Have Name       |   W ile sekund od zabicie Medic musi zgłosić ciało aby w raporcie dostać nazwę zabójcy    |    Czas     |       0.0s       |                       0.0s-60.0s                        |
| ┗ Time Where Medic Will Have Color Type | W ile sekund od zabicie Medic musi zgłosić ciało aby w raporcie dostać typ koloru zabójcy |    Czas     |      15.0s       |                       0.0s-60.0s                        |