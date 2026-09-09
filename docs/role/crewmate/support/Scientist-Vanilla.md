import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Scientist.png')} alt="Icon" align="left" style={{height: 60}} />

# Scientist

### *Sprawdź Vitalsy gdy chcesz!*

**Przynależność: Crew Support (Wsparcie)**

**Scientist** podczas gry może sprawdzić Vitalsy, nie musząc podchodzić do standardowego panelu.\
Jednak **Scientist** posiada baterię na swoich Vitalsach, którą może odnowić poprzez robienie tasków.\

### Umiejętności

|                                              Przycisk                                               | Umiejętność |                    Opis                    |  Użycie  |
|:---------------------------------------------------------------------------------------------------:|:-----------:|:------------------------------------------:|:--------:|
| <img src={useBaseUrl('/img/PrzyciskiCrew/ScientistVitals.png')} alt="Button" style={{width: 50}} /> | **Vitals**  | Pozwala otworzyć przenośny panel Vitalsów  | Bez celu |

### Opcje

| Ustawienie              |                                            Opis                                            |     Typ     | Domyślnie | Wartość |
|-------------------------|:------------------------------------------------------------------------------------------:|:-----------:|:---------:|:-------:|
| Vitals Display Cooldown | Czas który Scientist musi odczekać pomiędzy użyciami Vitals po ukończeniu wszystkich zadań |    Czas     |    15s    | 5s-60s  |
| Battery Duration        |            Maksymalna ilość baterri którą Scientis może mieć w jednym momencie             |    Czas     |    5s     | 5s-30s  |