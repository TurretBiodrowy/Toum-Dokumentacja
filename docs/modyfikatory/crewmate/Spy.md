import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Mody/Spy.png')} alt="Icon" align="left" style={{height: 60}} />

# Spy

### *Ujrzyj prawdziwe kolory graczy na Admin Panelu!*

**Typ: Utility (Użytkowy)**

Gracz z modyfikatorem **Spy** będzie widzieć dokładne kolory graczy na Admin Panelu.

### Umiejętności

| Przycisk                                                                                     | Umiejętność |                                     Opis                                      |  Typ  |
|----------------------------------------------------------------------------------------------|:-----------:|:-----------------------------------------------------------------------------:|:-----:|
| <img src={useBaseUrl('/img/PrzyciskiCrew/SpyAdmin.png')} alt="Button" style={{width: 50}} /> |  **Admin**  | Otwiera przenośną wersję Admin Panelu która działa na baterii oraz cooldownie | Panel |

### Opcje
#### Opcje tego modyfikatora ustawia się w kategorii roli Spy

| Ustawienie                        |                            Opis                             |     Typ     |    Domyślnie    |                   Wartość                    |
|-----------------------------------|:-----------------------------------------------------------:|:-----------:|:---------------:|:--------------------------------------------:|
| Who Sees Dead Bodies On Admin     |       Decyduje kto widzi martwe ciała na Admin Panelu       |   String    |     Nobody      |  Spy / Everyone But Spy / Everyone / Nobody  |
| Allow Portable Admin Table For    |    Ustawia czy Spy ma dostęp do przenośnego Admin Panelu    |   String    | Role & Modifier | Role / Modifier / Role & Modifier / Disabled |
| ┣ Move While Using Portable Admin |  Ustawia czy można się poruszać z włączonym Admin Panelem   | Przełącznik |       Tak       |                  Tak / Nie                   |
| ┣ Starting Charge                 |         Ile baterii Spy dostaje na sam początek gry         |    Czas     |      20.0s      |                 0.0s - 30.0s                 |
| ┣ Battery Charged Each Round      |            Ile baterii Spy dostaje co spotkanie             |    Czas     |      15.0s      |                 0.0s - 30.0s                 |
| ┣ Battery Charged Per Task        |    Ile baterii Spy dostaje za ukończenie jednego zadania    |    Czas     |      10.0s      |                 0.0s - 30.0s                 |
| ┣ Portable Admin Display Cooldown | Czas który Spy musi odczekać pomiędzy użyciami Admin Panelu |    Czas     |       15s       |                   0s - 30s                   |
| ┗ Portable Admin Dipslay Duration |  Czas przez jaki Admin Panel może być maksymalnie otwarty   |    Czas     |       15s       |                   ∞ - 30s                    |