import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Bomber.png')} alt="Icon" align="left" style={{height: 60}} />

# Bomber

### *Podłóż bomby by zabić wiele graczy naraz!*

**Przynależność: Imp Killing (Zabijający)**

**Bomber** może podłożyć niewidzialną **Bombę** która zabije każdego gracza (bez żadnej ochrony) który znajdzie się w jej obszarze podczas wybuchu.

### Umiejętności

|                                            Przycisk                                            | Umiejętność |                                     Opis                                     |    Użycie    |
|:----------------------------------------------------------------------------------------------:|:-----------:|:----------------------------------------------------------------------------:|:------------:|
| <img src={useBaseUrl('/img/PrzyciskiImp/BomberPlace.png')} alt="Button" style={{width: 50}} /> |  **Place**  | Podkłada Bombe która wybucha po czasie zabijajać wszystkich graczy w pobliżu | Na otoczeniu |

### Opcje

| Ustawienie                   |                            Opis                            |     Typ     | Domyślnie |   Wartość   |
|------------------------------|:----------------------------------------------------------:|:-----------:|:---------:|:-----------:|
| Bomb Uses Per Game           |         Ile razy na grę Bomber może podłożyć bombę         |    Ilość    |     3     |  1-15 / ∞   | 
| Detonate Delay               |     Ile sekund Bomber musi odczekać aby bomba wybuchła     |    Czas     |    5s     |   1s-15s    |
| Detonate Radius              |       Rozmiar jaki bomba będzie miała po podłożeniu        |   Mnożnik   |   0.25x   | 0.05x-1.00x |
| Max Kills In Detonation      |     Ile maksymalnie graczy może zabić pojedyńcza bomba     |    Ilość    |     5     |    1-15     |
| All Impostors See Bomb       |         Ustawia czy wszyscy Impostorzy widzą bombę         | Przełącznik |    Tak    |  Tak / Nie  |
| Allow Bombing In First Round | Ustawia czy Bomber może podłożyć bombę w pierwszej rundzie | Przełącznik |    Tak    |  Tak / Nie  |
| Bomber Can Vent              |           Ustawia czy Bomber może używać ventów            | Przełącznik |    Tak    |  Tak / Nie  |