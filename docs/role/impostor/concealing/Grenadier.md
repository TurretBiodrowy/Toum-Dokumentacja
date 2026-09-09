import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Grenadier.png')} alt="Icon" align="left" style={{height: 60}} />

# Grenadier

### *Zablokuj wizję graczy!*

**Przynależność: Imp Concealing (Skrywający)**

**Grenadier** może rzucić granat błyskowy, aby na chwilę oślepić wszystkich graczy znajdujących się w pobliżu.\
Ty, **Crewpostor** oraz inni **Impostorzy** nie zostaną oślepieni.

### Umiejętności

|                                           Przycisk                                           | Umiejętność |                               Opis                               |            Użycie            |
|:--------------------------------------------------------------------------------------------:|:-----------:|:----------------------------------------------------------------:|:----------------------------:|
| <img src={useBaseUrl('/img/PrzyciskiImp/GrenFlash.png')} alt="Button" style={{width: 50}} /> |  **Flash**  | Rzuca granat błyskowy który oślepia wszystkich graczy w obszarze | Na wielu graczach w obszarze |

### Opcje

| Ustawienie                     |                            Opis                            |     Typ     | Domyślnie |   Wartość   |
|--------------------------------|:----------------------------------------------------------:|:-----------:|:---------:|:-----------:|
| Flash Uses Per Game            |         Ile razy na grę Grenadier może użyć Flash          |    Ilość    |     ∞     |  1-15 / ∞   |
| Flash Grenade Cooldown         | Czas który Grenadier musi odczekać pomiędzy użyciami Flash |    Czas     |   25.0s   | 5.0s-120.0s |
| Flash Grenade Duration         |      Czas przez który Flash będzie aktywny na graczu       |    Czas     |    10s    |   5s-15s    |
| Flash Radius                   |          Obszar w którym gracze zostaną oślepieni          |   Mnożnik   |   1.00x   | 0.25x-5.00x |
| Allow Flashing During Sabotage | Ustawia czy Grenadier może używać Flasha podczas sabotaży  | Przełącznik |    Nie    |  Tak / Nie  |
| Grenadier Can Vent             |          Ustawia czy Grenadier może używać ventów          | Przełącznik |    Tak    |  Tak / Nie  |