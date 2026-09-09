import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Eclipsal.png')} alt="Icon" align="left" style={{height: 60}} />

# Eclipsal

### *Zablokuj światło graczom!*

**Przynależność: Imp Concealing (Skrywający)**

**Eclipsal** może chwilowo zaniżyć wizję wszystkich graczy w pobliżu.\
Ty oraz inni **Impostorzy** nie zostaną oślepieni.

### Umiejętności

|                                             Przycisk                                             | Umiejętność |                          Opis                           |            Użycie            |
|:------------------------------------------------------------------------------------------------:|:-----------:|:-------------------------------------------------------:|:----------------------------:|
| <img src={useBaseUrl('/img/PrzyciskiImp/EclipsalBlind.png')} alt="Button" style={{width: 50}} /> |  **Blind**  | Na parę sekund zaniża wizję wszystkich graczy w pobliżu | Na wielu graczach w obszarze |

### Opcje

| Ustawienie     |                           Opis                            |   Typ   | Domyślnie |   Wartość   |
|----------------|:---------------------------------------------------------:|:-------:|:---------:|:-----------:|
| Blind Cooldown | Czas który Eclipsal musi odczekać pomiędzy użyciami Blind |  Czas   |   25.0s   | 5.0s-120.0s |
| Blind Duration |      Czas przez który Blind będzie aktywny na graczu      |  Czas   |   15.0s   | 5.0s-120.0s |
| Blind Radius   |         Obszar w którym gracze zostaną oślepieni          | Mnożnik |   1.00x   | 0.25x-5.00x |