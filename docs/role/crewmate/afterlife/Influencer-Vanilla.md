import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Inne/Spectator.png')} alt="Icon" align="left" style={{height: 60}} />

# Influencer

### *Wyślij wiadomości do reszty crewmate'ów*

**Przynależność: Crew Afterlife (Pośmiertny)**

**Influencer** to pośmiertna rola dla Crewmate’a, która pojawia się odrazu po śmierci.\
Może on wysyłać żyjącym graczą obrazy, które mogą im pomóc znaleźć **Impostorów**, bądź ciał.\
**Influencer** może wysłać maksymalnie 3 obrazy naraz.

### Umiejętności

| Przycisk                                                                                           | Umiejętność |                         Opis                          |  Użycie   |
|----------------------------------------------------------------------------------------------------|:-----------:|:-----------------------------------------------------:|:---------:|
| <img src={useBaseUrl('/img/PrzyciskiCrew/InfluMessage.png')} alt="Przycisk" style={{width: 50}} /> | **Message** | Pozwala wybrać gracza któremu zostaną pokazane obrazy | Na graczu |
| <img src={useBaseUrl('/img/PrzyciskiCrew/InfluRefresh.png')} alt="Przycisk" style={{width: 50}} /> | **Refresh** |           Wymienia wszystkie obrazy na nowe           | Na graczu |
| <img src={useBaseUrl('/img/PrzyciskiCrew/InfluSend.png')} alt="Przycisk" style={{width: 50}} />    |  **Send**   |            Wysyła wybrane obrazy do gracza            | Na graczu |

### Opcje

| Ustawienie       |                                  Opis                                  |     Typ     | Domyślnie | Wartość |
|------------------|:----------------------------------------------------------------------:|:-----------:|:---------:|:-------:|
| Message Cooldown | Czas który Influencer musi odczekać zanim będzie mógł wysłać wiadomość |    Czas     |    20s    | 10s-60s |