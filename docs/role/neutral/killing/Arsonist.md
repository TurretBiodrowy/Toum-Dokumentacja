import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Arsonist.png')} alt="Icon" align="left" style={{height: 60}} />

# Arsonist

### *Oblej graczy benzyną aby ich spalić!*

**Przynależność: Neut Killing (Zabijający)**

**Arsonist** może oblać graczy benzyną aby później ich spalić.\
Jeżeli oblany benzyną gracz znajdą się w pobliżu **Arsonisty**, ten będzie mógł go spalić.\
**Arsonista** może spalić więcej niż jednego gracza naraz, jeśli znajdą się wystarczająco blisko.\
Alternatywnie, będzie mógł spalić on wszystkich podpalonych graczy naraz.

### Umiejętności

|                                            Przycisk                                            | Umiejętność |                                  Opis                                  |   Użycie   |
|:----------------------------------------------------------------------------------------------:|:-----------:|:----------------------------------------------------------------------:|:----------:|
| <img src={useBaseUrl('/img/PrzyciskiNeut/ArsoDouse.png')} alt="Button" style={{width: 50}} />  |  **Douse**  |                      Pozwala oblać gracza benzyną                      | Na graczu  |
| <img src={useBaseUrl('/img/PrzyciskiNeut/ArsoIgnite.png')} alt="Button" style={{width: 50}} /> | **Ignite**  | Pozwala spalić wszystkich oblanych benzyną, bądź tylko tych w pobliżu  | Na graczu  |
|  <img src={useBaseUrl('/img/PrzyciskiNeut/ArsoVent.png')} alt="Button" style={{width: 55}} />  |  **Vent**   |               Pozwala przemieszczać się pomiędzy Ventami               | Na ventcie |


### Opcje

| Ustawienie              |                                              Opis                                              |     Typ     | Domyślnie |   Wartość   |
|-------------------------|:----------------------------------------------------------------------------------------------:|:-----------:|:---------:|:-----------:|
| Douse Cooldown          |                     Czas który Arsonist musi odczekać przed użyciem Douse                      |    Czas     |   25.0s   | 10.0s-60.0s |
| Douses Possible at Once |                            Maksymalna ilość żywych oblanych benzyną                            |    Ilość    |     5     |  1-30 / ∞   |
| Douse From Interactions | Ustawia czy graczy którzy wykonają interakcja z Arsonistą zostaną automatycznie oblani benzyną | Przełacznik |    Tak    |  Tak / Nie  |
| Legacy Mode (No Radius) |     Ustawia czy Arsonista spali wszystkich graczy oblanych benzyną niezależnie od dystansu     | Przełacznik |    Tak    |  Tak / Nie  |
| ┗ Ignite Radius         |        W jakim obszarze od Arsonisty musi znaleźć się oblany gracz aby zostać spalonym         |   Mnożnik   |   0.25x   | 0.05x-1.00x |
| Arsonist Can Vent       |                            Ustawia czy Arsonist może używać ventów                             | Przełącznik |    Nie    |  Tak / Nie  |
| Has Impostor Vision     |         Ustawia czy Arsonista ma zwiększoną wizję oraz jest odporny na sabotaż świateł         | Przełącznik |    Tak    |  Tak / Nie  |