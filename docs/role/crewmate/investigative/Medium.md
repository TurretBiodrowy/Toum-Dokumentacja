import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Medium.png')} alt="Icon" align="left" style={{height: 60}} />

# Medium

### *Stań się jednym z duchami!*

**Przynależność: Crew Investigative (Śledczy)**

**Medium** może chwilowo stać się duchem który po chwili bedzię widoczny dla wszystkich ale anonimowo.\
Gdy jest duchem **Medium** nie będzie mógł poruszać swojego zwykłego ciała.\
Podczas bycia duchem, jeżeli jakiś gracz umarł w tej samej rundzie, **Medium** będzie mógł go zobaczyć i podążać zanim w formie ducha.


### Umiejętności

|                                             Przycisk                                              | Umiejętność |                                      Opis                                      |  Użycie  |
|:-------------------------------------------------------------------------------------------------:|:-----------:|:------------------------------------------------------------------------------:|:--------:|
| <img src={useBaseUrl('/img/PrzyciskiCrew/MediumMediate.png')} alt="Button" style={{width: 50}} /> | **Mediate** | Pozwala chwilowo stać się duchem, zostawiając swoje oryginalne ciało w miejscu | Bez celu |

### Opcje

| Ustawienie                              |                              Opis                               |   Typ   |     Domyślnie     |                      Wartość                       |
|-----------------------------------------|:---------------------------------------------------------------:|:-------:|:-----------------:|:--------------------------------------------------:|
| Mediate Cooldown                        |    Czas który Medium musi odczekać pomiędzy użyciami Mediate    |  Czas   |       25.0s       |                    10.0s-60.0s                     |
| Mediate Duration                        |       Czas przez który Medium będzie mógł latać jako duch       |  Czas   |       15.0s       |                     5.0s-20.0s                     |
| Spirit Speed When Mediating             |  Maksymalna prędkość do jakiej duch Mediuma może się rozpędzić  | Mnożnik |       3.50x       |                    1.50x-10.0x                     |
| Time Before Spirit is Visible to Others | Po ilu sekundach duch Mediuma będzie widoczny dla innych graczy |  Czas   |       2.5s        |                     0.5s-20.0s                     |
| Medium can Identify                     |          Kogo Medium może rozpoznać gdy będzie duchem           | String  |      Nobody       |     Living / Ghosts / Living + Ghosts / Nobody     |
| Arrow Visibility                        |          Kto widzi strzałkę pomiędzy Mediumem a Duchem          | String  | Medium + Mediated |  Medium / Mediated / Medium + Mediated / Disabled  |
| Who Is Revealed                         |              Który duch jest ujawniony dla Mediuma              | String  |    Oldest Dead    | Oldest Dead / Newest Dead / Random Dead / All Dead |