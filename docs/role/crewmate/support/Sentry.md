import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Sentry.png')} alt="Icon" align="left" style={{height: 60}} />

# Sentry

### *Rozłóż nowe kamery by monitorować mapę!*

**Przynależność: Crew Support (Wsparcie)**

**Sentry** .

### Umiejętności

|                                             Przycisk                                             | Umiejętność | Opis |    Użycie    |
|:------------------------------------------------------------------------------------------------:|:-----------:|:----:|:------------:|
| <img src={useBaseUrl('/img/PrzyciskiCrew/SentryDeploy.png')} alt="Button" style={{width: 50}} /> | **Deploy**  |      | Na otoczeniu |

### Opcje

| Ustawienie                                |                                             Opis                                             |     Typ     |       Domyślnie       |                   Wartość                    |
|-------------------------------------------|:--------------------------------------------------------------------------------------------:|:-----------:|:---------------------:|:--------------------------------------------:|
| Placement Cooldown                        |                   Czas który Sentry musi odczekać pomiędzy użyciami Deploy                   |    Czas     |         30.0s         |                 5.0s-120.0s                  |
| Deployed Cameras Visibility               |                            Kiedy stworzona kamera będzie widoczny                            |   String    |      Immediately      |         Immediately / After Meeting          |
| ┣ Cameras Visible After                   | (Jeśli ustawiono Immediately) Po jakim czasie od stworzenia kamera będzie aktywna i widoczna |    Czas     |         3.0s          |                  0.0s-10.0s                  |
| ┗ Can Move While Placing Cameras          |     (Jeśli ustawiono After Meeting) Ustawia czy Sentry może się ruszać gdy stawia kamerę     | Przełacznik |          Nie          |                  Tak / Nie                   |
| Instant Portable Cameras (or After Tasks) |                   Ustawia kiedy Sentry dostaje dostęp do przenośnych kamer                   |   String    | Only On Cam-less Maps | Only On Cam-less Maps / Always / After Tasks |
| Initial Cameras                           |                            Ilość kamer z którą Sentry zaczyna grę                            |    Ilość    |           2           |                   1-15 / ∞                   |
| Amount Of Rounds Camera Last              |                          Przez ile rund nowa kamera będzie aktywna                           |    Ilość    |           2           |                   1-15 / ∞                   |
| Tasks Required Per Camera                 |                   Co ile tasków Sentry dostanie nową kamerę do postawienia                   |    Ilość    |           2           |                  Off / 1-15                  |
| Max Cameras Placed At Once                |                Maksymalna ilość dodatkowych kamer które Sentry może postawić                 |    Ilość    |           4           |                   1-20 / ∞                   |
| Portable Cameras Battery                  |                  Ile baterii Sentry dostaje po skończeniu wszystkich tasków                  |    Czas     |         90.0s         |                 0.0s-120.0s                  |
| Blind Spots                               |              Ilość pomieszczeń w których Sentry nie może postawić nowych kamer               |    Ilość    |          Off          |                  Off / 1-10                  |