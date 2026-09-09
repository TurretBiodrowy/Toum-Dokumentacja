import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Mody/Satellite.png')} alt="Icon" align="left" style={{height: 60}} />

# Satellite

### *Możesz wykryć gdzie są ciała!*

**Typ: Utility (Użytkowy)**

Gracz z modyfikatorem **Satellite** może użyć **Broadcast** aby przeskanować całą mapę po martwe ciała.\
Jeśli znajdzie ciało, dostanie w jego stronę permanentną, białą strzałkę.\
Jeśli nic nie znajdzie, dostanie o tym powiadomienie.

### Umiejętności

|                                             Przycisk                                              |  Umiejętność  |                    Opis                    |        Typ         |
|:-------------------------------------------------------------------------------------------------:|:-------------:|:------------------------------------------:|:------------------:|
| <img src={useBaseUrl('/img/PrzyciskiModif/SatBroadcast.png')} alt="Button" style={{width: 50}} /> | **Broadcast** | Pozwala przeskanować mapę po martwe ciała. | Interakcja ze sobą |

### Opcje

| Ustawienie                 |                                      Opis                                       |     Typ     | Domyślnie |  Wartość   |
|----------------------------|:-------------------------------------------------------------------------------:|:-----------:|:---------:|:----------:|
| Button Cooldown            | Czas który Satellite musi odczekać zanim będzie mógł zeskanować po martwe ciała |    Czas     |   15.0s   | 5.0s-60.0s |
| Max Uses                   |      Maksymalna ilość skanów po martwe ciała które Satellite może wykonać       |    Ilość    |     5     |    1-15    |
| One Usage Per Round        |         Ustawia czy Satellite może skanować po ciała tylko raz na rundę         | Przełącznik |    Tak    | Tak / Nie  |
| Allow Usage In First Round |        Ustawia czy Satellite może skanować po ciała w pierwszej rundzie         | Przełącznik |    Tak    | Tak / Nie  |