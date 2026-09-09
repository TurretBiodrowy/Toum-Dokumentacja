import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Herbalist.png')} alt="Icon" align="left" style={{height: 60}} />

# Herbalist

### *Użyj swojej wiedzy o ziołach aby wygrać!*

**Przynależność: Imp Power (Silny)**

**Herbalist** podczas gry może korzystać z trzech rożnych ziół. **Expose**, **Confuse** oraz **Protect**.\
Ponieważ, **Herbalist** ma tyle umiejętności, musi on zmieniać obecną umiejętność za pomocą **Change Herb**.\
Wszystkie 3 umiejętności mają łączony cooldown, ale nie są połączone z przyciskiem **Kill**.
- Expose: Ujawnia rolę gracza dla wszystkich żyjących **Impostorów**, ale w zamian tego, nie będą oni mogli już strzelać jego roli na spotkaniu.
- Confuse: Po użyciu na graczu, aktywuje mu się "kamuflaż" podczas którego nie będzie mógł odróżnić innych graczy.
- Protect: Nadaja na gracza tymczasową tarczę która dla innych (jeśli włączone) wygląda jak Bariera **Clerica**.

### Umiejętności

|                                             Przycisk                                             |   Umiejętność   |                               Opis                               |   Użycie   |
|:------------------------------------------------------------------------------------------------:|:---------------:|:----------------------------------------------------------------:|:----------:|
| <img src={useBaseUrl('/img/PrzyciskiImp/TraitorSelect.png')} alt="Button" style={{width: 50}} /> | **Change Herb** |                  Zmienia obecnie wybrane zioło                   |  Bez celu  |
|  <img src={useBaseUrl('/img/PrzyciskiImp/HerbExpose.png')} alt="Button" style={{width: 50}} />   |   **Expose**    |            Ujawnia rolę gracza na którym został użyty            | Na graczu  |
|  <img src={useBaseUrl('/img/PrzyciskiImp/HerbConfuse.png')} alt="Button" style={{width: 50}} />  |   **Confuse**   | Sprawia, że wybrany gracz nie będzie mógł odróżnić innych graczy | Na graczu  |
|  <img src={useBaseUrl('/img/PrzyciskiImp/HerbProtect.png')} alt="Button" style={{width: 50}} />  |   **Protect**   |          Nadaje tymczasową ochronę na wybranego gracza           | Na graczu  |


### Opcje

| Ustawienie                    |                                       Opis                                       |     Typ     | Domyślnie |   Wartość   |
|-------------------------------|:--------------------------------------------------------------------------------:|:-----------:|:---------:|:-----------:|
| Herb Cooldown                 |         Czas który Herbalist musi odczekać przed użyciem któregoś Herba          |    Czas     |   30.0s   | 10.0s-90.0s |
| Max Expose Uses               |                           Maksymalna ilość użyć Expose                           |    Ilość    |     3     |  1-15 / ∞   |
| Max Confuse Uses              |                          Maksymalna ilość użyć Confuse                           |    Ilość    |     5     |  1-15 / ∞   |
| Max Protect Uses              |                          Maksymalna ilość użyć Protect                           |    Ilość    |     7     |  1-15 / ∞   |
| Confuse Delay                 |             Po jakim czasie Confuse jest aktywny na wybranym graczu              |    Czas     |   3.0s    |  0.5s-5.0s  |
| Confuse Duration              |            Czas przez który Confuse będzie aktywny na wybranym graczu            |    Czas     |   15.0s   | 5.0s-30.0s  |
| Protect Duration              |            Czas przez który Protect będzie aktywny na wybranum graczu            |    Czas     |   15.0s   | 5.0s-30.0s  |
| Protected Player Sees Barrier |       Ustawia czy gracz chroniony przez Herbalista będzie widzieć ochroną        | Przełącznik |    Nie    |  Tak / Nie  |
| Notify Herbalist Upon Attack  | Ustawia czy Herbalist dostaje powiadomienia przy próbie zabicia gracza z ochroną | Przełącznik |    Tak    |  Tak / Nie  |