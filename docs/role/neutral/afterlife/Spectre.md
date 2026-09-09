import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Spectre.png')} alt="Icon" align="left" style={{height: 60}} />

# Spectre

### *Ukończ wszystkie swoje zadania bez zostania złapanym by wygrać!*

**Przynależność: Neut Evil (Szkodliwy)**

**Spectre** to pośmiertna rola dla Neutrala, która pojawia się po spotkaniu jako pół-przezroczysty gracz.\
Celem **Spectre** jest wykonanie wszystkich swoich tasków, aby wygrać grę.\
Gdy zbliża się on do ukończenia wszystkich tasków, każdy gracz będzie mógł go kliknąć co sprawi, że stanie się zwykłym duchem i nie będzie mógł już wygrać.

### Umiejętności

|                                             Przycisk                                             | Umiejętność |                                                  Opis                                                  |        Użycie         |
|:------------------------------------------------------------------------------------------------:|:-----------:|:------------------------------------------------------------------------------------------------------:|:---------------------:|
| <img src={useBaseUrl('/img/PrzyciskiNeut/SpectreSpook.png')} alt="Button" style={{width: 50}} /> |  **Spook**  | Jeśli **Spooks** jest ustawione jako typ wygranej, Phantom może zabić jedną osobę po ukończeniu tasków | Po wygranej na graczu |

### Opcje

| Ustawienie                  |                               Opis                               |  Typ   | Domyślnie |           Wartość            |
|-----------------------------|:----------------------------------------------------------------:|:------:|:---------:|:----------------------------:|
| Tasks Left Before Clickable | Ile zadań musi zostać Spectre'owi zanim będzie można go kliknąć. | Ilość  |     3     |             0-5              |
| Spectre Win                 |                Co się dzieje po wygranej Spectre                 | String |  Nothing  | Ends Game / Spooks / Nothing |
