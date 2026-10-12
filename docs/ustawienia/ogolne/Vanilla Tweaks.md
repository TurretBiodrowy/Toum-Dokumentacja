import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Scientist.png')} alt="Icon" align="left" style={{height: 60}} />

# Vanilla Tweaks

| Ustawienie                            |                                     Opis                                      |     Typ     |   Domyślnie    |                  Wartość                  |
|---------------------------------------|:-----------------------------------------------------------------------------:|:-----------:|:--------------:|:-----------------------------------------:|
| Continue Cooldown In Tasks and Panels | Decyduje czy Cooldowny spadają gdy gracz ma otworzony panel (np. Taski/Drzwi) | Przełącznik |      Tak       |                 Tak / Nie                 |
| Parallel Medbay Scans                 |              Decyduje czy graczę mogą skanować się jednocześnie               | Przełącznik |      Tak       |                 Tak / Nie                 |
| Walk to Medscan                       |                   Decyduje czy gracze podchodzą do skanera                    | Przełącznik |      Tak       |                 Tak / Nie                 |
| Disable Meeting Skip Button           |        Ustawia kiedy przycisk **Skip** będzie zablokowany na spotkaniu        |   String    |     Never      |        Never / Emergency / Always         |
| Hide Vent Animations Not In Vision    |            Decyduje czy animacje ventów poza wizję będzie aktywna             | Przełącznik |      Tak       |                 Tak / Nie                 |
| Pet Visibility                        |                    Ustawia kiedy pety graczy będą widoczne                    |   String    | Always Visible | Always Visible / Client Side / When Alive |
| ┗ Pet Removed On Body Clean           |              Ustawia czy pety są usuwane po wyczyszczeniu ciała               |   String    |  During Round  |       During Round / Always / Never       |