import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Cleric.png')} alt="Icon" align="left" style={{height: 60}} />

# Cleric

### *Ocal Crewmate'ów!*

**Przynależność: Crew Protective (Ochronny)**

**Cleric** może nadać tymczasową barrierę na gracza która ochroni przed wszystkimi atakami.\
Może on także, za pomocą **Cleanse** oczyścić gracza ze wszystkich negatywnych efektów jakie ten ma (**Douse**, **Hypnosis**, **Blackmail** itd.).

### Umiejętności

|                                             Przycisk                                              | Umiejętność |                            Opis                             |  Użycie   |
|:-------------------------------------------------------------------------------------------------:|:-----------:|:-----------------------------------------------------------:|:---------:|
| <img src={useBaseUrl('/img/PrzyciskiCrew/ClericBarrier.png')} alt="Button" style={{width: 50}} /> | **Barrier** |         Pozwala nadać na gracza tymczasową barrierę         | Na graczu |
| <img src={useBaseUrl('/img/PrzyciskiCrew/ClericCleanse.png')} alt="Button" style={{width: 50}} /> | **Cleanse** | Oczyscza wybranego gracza ze wszysktich negatywnych efektów | Na graczu |

### Opcje

| Ustawienie                       |                                     Opis                                      |     Typ     | Domyślnie |   Wartość   |
|----------------------------------|:-----------------------------------------------------------------------------:|:-----------:|:---------:|:-----------:|
| Barrier Cooldown                 |           Czas który Cleric musi odczekać pomiędzy użyciami Barrier           |    Czas     |   25.0s   | 10.0s-60.0s |
| Barrier Duration                 |               Czas przez który Barrier będzie aktywny na graczu               |    Czas     |   25.0s   | 10.0s-60.0s |
| Cleanse Cooldown                 |           Czas który Cleric musi odczekać pomiędzy użyciami Cleanse           |    Czas     |   25.0s   | 10.0s-60.0s |
| Protected Player Sees Barrier    |           Decyduje czy Osoba chroniona przez Clerica widzi barierę            | Przełącznik |    Nie    |  Tak / Nie  |
| Cleric Gets Attack Notifications | Ustawia czy Cleric dostaje powiadomienia przy próbie zabicia gracza z barierą | Przełacznik |    Tak    |  Tak / Nie  |