import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Officer.png')} alt="Icon" align="left" style={{height: 60}} />

# Officer

### *Przeładuj broń i zastrzel zabójców*

**Przynależność: Crew Killing (Zabijający)**

**Officer** może zastrzelić innych graczy ale posiada on limitowaną amunicję.\
Zanim **Officer** będzie mógł strzelić, musi on najpierw załadować pocisk używając **Load**.\
Jeśli załaduje on pocisk ale go nie użyje do następnego spotkania, ten przepadnie na zawsze. Natomiast, jeśli **Load** zostanie użyty 10 sekund przed spotkaniem **Officer** dostanie on go spowrotem.\
Gdy **Officer** błędnie strzeli w gracza straci on dostęp do swojej broni na pare rund.

### Umiejętności

|                                             Przycisk                                             | Umiejętność |                                 Opis                                  |  Użycie   |
|:------------------------------------------------------------------------------------------------:|:-----------:|:---------------------------------------------------------------------:|:---------:|
| <img src={useBaseUrl('/img/PrzyciskiCrew/OfficerShoot.png')} alt="Button" style={{width: 50}} /> |  **Shoot**  |                Pozwala strzelić w gracza aby go zabić                 | Na graczu |
| <img src={useBaseUrl('/img/PrzyciskiCrew/OfficerLoad.png')} alt="Button" style={{width: 50}} />  |  **Load**   | Pozwala załadować pocisk który potem może być użyty aby zabić zabójce | Na graczu |

### Opcje

| Ustawienie                                      |                                                 Opis                                                  |     Typ     | Domyślnie |   Wartość   |
|-------------------------------------------------|:-----------------------------------------------------------------------------------------------------:|:-----------:|:---------:|:-----------:|
| Shoot Cooldown                                  |                 Czas który Officer musi odczekać zanim będzie mógł ponownie strzelić                  |    Czas     |   5.0s    | 2.5s-30.0s  |
| Load Cooldown                                   |                        Czas który Officer musi odczekać pomiędzy użyciami Load                        |    Czas     |   30.0s   | 2.5s-120.0s |
| Can Self Report                                 |                      Ustawia czy Officer może zgłosić ciała graczy których zabił                      | Przełącznik |    Nie    |  Tak / Nie  |
| Allow Shooting In First Round                   |                    Ustawia czy Officer może strzelać i ładować w pierwszej rundzie                    | Przełącznik |    Nie    |  Tak / Nie  |
| Officer Can Only Shoot Players That Have Killed | Ustawia czy Officer może strzelić tylko graczy którzy poprzednio zabili bądź zgadli rolę na spotkaniu | Przełącznik |    Tak    |  Tak / Nie  |
| ┣ Crewmate Killing Roles are Innocent           |           Gdy powyższe włączone: Ustawia czy Officer może zabić role Crew Killing bez kary            | Przełącznik |    Nie    |  Tak / Nie  |
| ┗ Non-Killing Neutrals are Innocent             |     Gdy powyższe wyłączone: Ustawia czy Officer może zabić role Neutralne niezabijające bez kary      | Przełącznik |    Nie    |  Tak / Nie  |
| Maximum Bullets in Total                        |                           Ilość pocisków które Officer dostaje na start gry                           |    Ilość    |     9     |    3-15     |
| Maximum Bullets at Once                         |             Maksymalna ilość załadowanych pocisków którą Officer może mieć jednocześniej              |    Ilość    |     3     |     2-9     |
| # of Rounds to Shoot Again After Misfire        |              Ilość rund przez którą Officer nie będzie mógł strzelać po błednym zabiciu               |    Ilość    |     1     |     1-5     |