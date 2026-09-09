import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Survivor.png')} alt="Icon" align="left" style={{height: 60}} />

# Survivor

### *Zrób wszystko żeby przeżyć!*

**Przynależność: Neut Benign (Nieszkodliwy)**

**Survivor** musi przeżyć do końca gry, aby wygrać.\
Parę razy na grę, może on użyć swojej kamizelki, by na chwile zapewnić sobie ochronę przed atakami.

### Umiejętności

|                                           Przycisk                                           | Umiejętność |                           Opis                            |  Użycie  |
|:--------------------------------------------------------------------------------------------:|:-----------:|:---------------------------------------------------------:|:--------:|
| <img src={useBaseUrl('/img/PrzyciskiNeut/SurvVest.png')} alt="Button" style={{width: 50}} /> |  **Vest**   | Chwilowo gwarantuje sobie ochrone przed wszelkimi atakami | Bez celu |

### Opcje

| Ustawienie                        |                                       Opis                                       |     Typ     | Domyślnie |   Wartość   |
|-----------------------------------|:--------------------------------------------------------------------------------:|:-----------:|:---------:|:-----------:|
| Vest Cooldown                     |               Czas który Survivor musi odczekać przed użyciem Vest               |    Czas     |   25.0s   | 5.0s-120.0s |
| Vest Duration                     |                       Czas przez który Vest będzie aktywny                       |    Czas     |    10s    |   5s-15s    |
| Max Number Of Vests               |                 Maksymalna ilość Vestów które Survivor może użyć                 |    Ilość    |    10     |    1-15     |
| Survivor Scatter Mechanic Enabled | Ustawia czy Survivor umrze jeśli będzie stać w miejscu przez dłuższy okres czasu | Przełącznik |    Nie    |  Tak / Nie  |
| ┗ Survivor Scatter Timer          |             Czas który Survivor ma na poruszenie się aby nie umrzeć              |    Czas     |   25.0s   | 10.0s-60.0s |