import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Warlock.png')} alt="Icon" align="left" style={{height: 60}} />

# Warlock

### *Naładuj swój przycisk Kill by móc zabić więcej graczy!*

**Przynależność: Imp Killing (Zabijający)**

**Warlock** zacznie ładować swój przycisk kill, gdy skończy mu się zwykły cooldown.\
Gdy naładuje go do 100%, **Warlock** może zabić parę osób naraz.

### Umiejętności

|                                            Przycisk                                            |   Umiejętność    |                                              Opis                                               |      Użycie       |
|:----------------------------------------------------------------------------------------------:|:----------------:|:-----------------------------------------------------------------------------------------------:|:-----------------:|
| <img src={useBaseUrl('/img/PrzyciskiImp/WarlockKill.png')} alt="Button" style={{width: 50}} /> | **Charged Kill** | Gdy zwykły cooldown minie, Warlock zacznie ładować swój przycisk by móc zabić więcej osób naraz | Na wielu graczach |

### Opcje

| Ustawienie                                     |                                                        Opis                                                        |   Typ   | Domyślnie |   Wartość   |
|------------------------------------------------|:------------------------------------------------------------------------------------------------------------------:|:-------:|:---------:|:-----------:|
| Time It Takes To Fully Charge                  |                                Ile czasu zajmuje naładowanie przycisku kill do 100%                                |  Czas   |   25.0s   | 5.0s-120.0s |
| Time Multiplier Added Per Kill For Next Charge |            Ile razy dłużej będzie ładować się kill co każde zabójstwa z w pełni naładowanym przyciskiem            | Mnożnik |   0.05x   | 0.00x-0.50x |
| Time It Takes To Use Full Charge               | Przez ile sekund po pierwszym zabójstwie z w pełni naładowanym przyciskiem kill Warlock może zabijać więcej graczy |  Czas   |   1.00s   | 0.10s-5.00s |