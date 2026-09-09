import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Glitch.png')} alt="Icon" align="left" style={{height: 60}} />

# Glitch

### *Morduj, Udawaj, Hakuj... Pamięć Stracona.*

**Przynależność: Neut Killing (Zabijający)**

**Glitch** może **Zabijać**, **Hakować** oraz **Mimikować** wygląd innych graczy.\
Gdy **zhakowany** gracz spróbuje użyć umiejętności, ta się nie uda oraz wszystkie przyciski prócz ruchu będzie miał zablokowane.\
**Mimic** pozwala zmienić wygląd w innego gracza na parę sekund.

### Umiejętności

|                                            Przycisk                                             | Umiejętność |                                          Opis                                           |  Użycioe   |
|:-----------------------------------------------------------------------------------------------:|:-----------:|:---------------------------------------------------------------------------------------:|:----------:|
| <img src={useBaseUrl('/img/PrzyciskiNeut/GlitchKill.png')} alt="Button" style={{width: 50}} />  |  **Kill**   |                                  Pozwala zabić gracza                                   | Na graczu  |
| <img src={useBaseUrl('/img/PrzyciskiNeut/GlitchVent.png')} alt="Button" style={{width: 55}} />  |  **Vent**   |                       Pozwala przemieszczać się pomiędzy Ventami                        | Na ventcie |
| <img src={useBaseUrl('/img/PrzyciskiNeut/GlitchMimic.png')} alt="Button" style={{width: 50}} /> |  **Mimic**  |                 Pozwala zamienić się w wybranego gracza na parę sekund                  | Na graczu  |
| <img src={useBaseUrl('/img/PrzyciskiNeut/GlitchHack.png')} alt="Button" style={{width: 50}} />  |  **Hack**   | Hakuje gracza powodując, że jego umiejętności zostaną zablokowane gdy spróbuje ich użyć | Na graczu  |

### Opcje

| Ustawienie                            |                            Opis                             |     Typ     | Domyślnie |              Wartość               |
|---------------------------------------|:-----------------------------------------------------------:|:-----------:|:---------:|:----------------------------------:|
| Kill Cooldown                         |    Czas który Glitch musi odczekać przed zabiciem gracza    |    Czas     |   25.0s   |            5.0s-120.0s             |
| Mimic Cooldown                        |     Czas który Glitch musi odczekać przed użyciem Mimic     |    Czas     |   25.0s   |            5.0s-120.0s             |
| Mimic Duration                        |            Czas przez który Mimic będzie aktywny            |    Czas     |   10.0s   |             5.0s-15.0s             |
| Move While Using Mimic Menu (KB Only) | Ustawia czy Glitch może poruszać się gdy ma włączony tablet | Przełącznik |    Tak    |             Tak / Nie              |
| Hack Cooldown                         |     Czas który Glitch musi odczekać przed użyciem Hack      |    Czas     |   25.0s   |            5.0s-120.0s             |
| Hack Duration                         | Czas przez który Hack będzie aktywny od użycia umiejętności |    Czas     |   10.0s   |             5.0s-15.0s             |
| Glitch Can Vent                       |          Decyduje kiedy Glitch może używać ventów           |   String    |  Always   | Always / Unless Mimicking / Always |