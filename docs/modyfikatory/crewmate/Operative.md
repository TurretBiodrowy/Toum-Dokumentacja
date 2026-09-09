import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Mody/Operative.png')} alt="Icon" align="left" style={{height: 60}} />

# Operative

### *Używaj kamer gdzie tylko zechcesz!*

**Typ: Utility (Użytkowy)**

Gracz z modyfikatorem **Operative** ma dostęp do przenośnego panelu z Kamerami, które będą działać na baterii.\
Kamery zostaną zastępione przez Doorlogi na mapie Mira HQ.

### Umiejętności

|                                           Przycisk                                           | Umiejętność  |                  Opis                  |  Typ  |
|:--------------------------------------------------------------------------------------------:|:------------:|:--------------------------------------:|:-----:|
| <img src={useBaseUrl('/img/PrzyciskiModif/OperCam.png')} alt="Button" style={{width: 50}} /> | **Security** | Pozwala otworzyć przenośny panel Kamer | Panel |

### Opcje

| Ustawienie                    |                                   Opis                                    |     Typ     | Domyślnie |  Wartość   |
|-------------------------------|:-------------------------------------------------------------------------:|:-----------:|:---------:|:----------:|
| Move While Using Mira Doorlog | Ustawia czy Operative może poruszać się gdy ma włączone Doorlogi na Mirze | Przełącznik |    Tak    | Tak / Nie  |
| Starting Charge               |             Ile baterii Operative dostaje na sam początek gry             |    Czas     |   20.0s   | 0.0s-30.0s |
| Battery Charged Each Round    |                Ile baterii Operative dostaje co spotkanie                 |    Czas     |   10.0s   | 0.0s-30.0s |
| Battery Charged Per Task      |        Ile baterii Operative dostaje za ukończenie jednego zadania        |    Czas     |   7.5s    | 0.0s-30.0s |
| Security Display Cooldown     |   Czas który Operative musi odczekać pomiędzy użyciami Kamer/Doorlogów    |    Czas     |    15s    |   0s-30s   |
| Max Security Display Cooldown |       Czas przez jaki Kamery/Doorlogi mogą być maksymalnie otwarte        |    Czas     |    15s    | 0s-30s / ∞ |