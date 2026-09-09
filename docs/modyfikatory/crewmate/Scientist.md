import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Mody/Scientist.png')} alt="Icon" align="left" style={{height: 60}} />

# Scientist

### *Używaj vitalsów gdzie tylko zechcesz!*

**Typ: Utility (Użytkowy)**

Gracz z modyfikatorem **Scientist** ma dostęp do przenośnego panelu z Vitalsami, które będą działać na baterii.

### Umiejętności

|                                               Przycisk                                               | Umiejętność |                   Opis                    |  Typ  |
|:----------------------------------------------------------------------------------------------------:|:-----------:|:-----------------------------------------:|:-----:|
| <img src={useBaseUrl('/img/PrzyciskiModif/ScientistVitals.png')} alt="Button" style={{width: 50}} /> | **Vitals**  | Pozwala otworzyć przenośny panel Vitalsów | Panel |

### Opcje

| Ustawienie                    |                              Opis                               |     Typ     | Domyślnie |  Wartość   |
|-------------------------------|:---------------------------------------------------------------:|:-----------:|:---------:|:----------:|
| Move While Using Vitals       | Ustawia czy Scientist może poruszać się gdy ma włączone Vitalsy | Przełącznik |    Tak    | Tak / Nie  |
| Starting Charge               |        Ile baterii Scientist dostaje na sam początek gry        |    Czas     |   20.0s   | 0.0s-30.0s |
| Battery Charged Each Round    |           Ile baterii Scientist dostaje co spotkanie            |    Czas     |   15.0s   | 0.0s-30.0s |
| Battery Charged Per Task      |   Ile baterii Scientist dostaje za ukończenie jednego zadania   |    Czas     |   10.0s   | 0.0s-30.0s |
| Security Display Cooldown     |  Czas który Scientist musi odczekać pomiędzy użyciami Vitalsów  |    Czas     |    15s    |   0s-30s   |
| Max Security Display Cooldown |      Czas przez jaki Vitalsy mogą być maksymalnie otwarte       |    Czas     |    15s    | 0s-30s / ∞ |