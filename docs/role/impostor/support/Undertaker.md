import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Undertaker.png')} alt="Icon" align="left" style={{height: 60}} />

# Undertaker

### Ten śmieszny tekscik

**Przynależność: Imp Support (Wsparcie)**

**Undertaker** może przenosić martwe ciała.\
Podczas przenoszenia ciała, prędkość **Undertakera** będzie zmniejszona.

### Umiejętności

|                                             Przycisk                                              | Umiejętność |                      Opis                       |  Użycie  |
|:-------------------------------------------------------------------------------------------------:|:-----------:|:-----------------------------------------------:|:--------:|
| <img src={useBaseUrl('/img/PrzyciskiImp/UndertakerDrag.png')} alt="Button" style={{width: 50}} /> |  **Drag**   | Pozwala podnieść ciało, aby zacząć je przenosić | Na ciele |
| <img src={useBaseUrl('/img/PrzyciskiImp/UndertakerDrop.png')} alt="Button" style={{width: 50}} /> |  **Drop**   | Pozwala puścić ciało, aby przestać je przenosić | Na ciele |

### Opcje

| Ustawienie                              |                                              Opis                                               |     Typ     | Domyślnie |   Wartość   |
|-----------------------------------------|:-----------------------------------------------------------------------------------------------:|:-----------:|:---------:|:-----------:|
| Drag Cooldown                           |                     Czas który Undertaker musi odczekać przed użyciem Drag                      |    Czas     |   25.0s   | 5.0s-120.0s |
| Drag Speed                              |           Z jaką prędkością Undertaker będzie się poruszać gdy będzie przenosił ciało           |   Mnożnik   |   0.75x   | 0.25x-1.00x |
| Dragging Speed Is Affected By Body Size |   Ustawia czy prędkość Undertakera zostanie zmieniona jeśli będzie przenosić ciało Giant/Mini   | Przełącznik |    Tak    |  Tak / Nie  |
| Undertaker Can Vent                     |                            Ustawia czy Undertaker może używać ventów                            | Przełącznik |    Tak    |  Tak / Nie  |
| ┗ Can Vent With Body                    |                  Ustawia czy Undertaker może używać ventów gdy przenosi ciało                   | Przełącznik |    Nie    |  Tak / Nie  |
| Undertaker Can Kill With Teammate       |                  Ustawia czy Undertaker może zabijać gdy ma żyjącego partnera                   | Przełącznik |    Tak    |  Tak / Nie  |