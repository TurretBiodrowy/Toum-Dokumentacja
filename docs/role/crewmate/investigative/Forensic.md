import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Forensic.png')} alt="Icon" align="left" style={{height: 60}} />

# Forensic

### *Zbadaj miejsca zbrodni by złapać zabójce!*

**Przynależność: Crew Investigative (Śledczy)**

**Forensic** może zbadać miejsca zbrodni i sprawdzać później graczy, czy znajdowali się koło niego.\
Jeśli gracz znalazł się obok miejsca zbrodni ekran **Forensica** zaświeci się na czerwono, w przeciwnym razie na zielono. 

### Umiejętności

| Przycisk                                                                                              | Umiejętność |                                            Opis                                            |      Użycie       |
|-------------------------------------------------------------------------------------------------------|:-----------:|:------------------------------------------------------------------------------------------:|:-----------------:|
| <img src={useBaseUrl('/img/PrzyciskiCrew/ForensicInspect.png')} alt="Przycisk" style={{width: 50}} /> | **Inspect** | Pozwala **Forensicowi** zbadać miejsce zbrodni aby móc później sprawdzić kto był w pobliżu | Na scenie zbrodni |
| <img src={useBaseUrl('/img/PrzyciskiCrew/ForensicExamine.png')} alt="Przycisk" style={{width: 50}} /> | **Examine** |    Pozwala **Forensicowi** sprawdzić, czy gracz był w pobliżu badanego miejsca zbrodni     |     Na graczu     |

### Opcje

| Ustawienie                              |                                Opis                                 |     Typ     | Domyślnie |   Wartość   |
|-----------------------------------------|:-------------------------------------------------------------------:|:-----------:|:---------:|:-----------:|
| Examine Cooldown                        |     Czas który Forensic musi odczekać pomiędzy użyciami Examine     |    Czas     |   25.0s   | 5.0s-120.0s |
| Show Detective Reports                  |     Ustawia czy Forensic dostaje raporty o ciałach które zgłosi     | Przełącznik |    Tak    |  Tak / Nie  |
| ┣ Time Where Forensic Will Have Role    |  Ile czasu ma Forensic na zgłoszenie ciała by poznać rolę zabójcy   |    Czas     |   7.5s    | 0.0s-60.0s  |
| ┗ Time Where Forensic Will Have Faction | Ile czasu ma Forensic na zgłoszenie ciała by poznać frakcję zabójcy |    Czas     |   30.0s   | 0.0s-60.0s  |