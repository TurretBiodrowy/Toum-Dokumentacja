import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Chef.png')} alt="Icon" align="left" style={{height: 60}} />

# Chef

### *Świeżo upieczone i gotowe do jedzenia!*

**Przynależność: Neutral Outlier (Odrzutek)**

**Chef** aby opuścić grę wygranym musi ugotować martwe ciała i nakarmić nimi parę graczy.\
Gdy ugotuje ciało martwego gracza sprawi, że zniknie ono z mapy, vitalsów oraz nie pokaże się na spotkaniu mimo, że gracz będzie martwy.\
Zależnie od tego, jaki modyfikator globalny miało ciało ugotowane przez **Chefa**, nakarmiony gracz będzie miał nałożony na siebie efekt uboczny.\
Na spotkaniu gracz dowie się o tym, że został nakarmiony.

### Umiejętności

|                                            Przycisk                                            | Umiejętność |                                         Opis                                          |  Użycie   |
|:----------------------------------------------------------------------------------------------:|:-----------:|:-------------------------------------------------------------------------------------:|:---------:|
| <img src={useBaseUrl('/img/PrzyciskiNeut/ArsoIgnite.png')} alt="Button" style={{width: 50}} /> |  **Cook**   | Gotuje ciało sprawiając, że jest ono wyczyszczone oraz dostaje jedno użycie **Serve** | Na ciele  |
| <img src={useBaseUrl('/img/PrzyciskiNeut/ChefServe.png')} alt="Button" style={{width: 50}} />  |  **Serve**  |                  Pozwala nakarmić gracza wcześniej ugotowanym ciałem                  | Na graczu |

### Opcje

| Ustawienie                            |                                 Opis                                 |     Typ     | Domyślnie |    Wartość     |
|---------------------------------------|:--------------------------------------------------------------------:|:-----------:|:---------:|:--------------:|
| Cook Cooldown                         |           Czas który Chef musi odczekać przed użyciem Cook           |    Czas     |   25.0s   |  5.0s-120.0s   |
| Serve Cooldown                        |          Czas który Chef musi odczekać przed użyciem Serve           |    Czas     |   25.0s   |  5.0s-120.0s   |
| Reset Cook & Serve Cooldowns Together |          Ustawia czy Cook oraz Serve mają dzielony cooldown          | Przełącznik |    Tak    |   Tak / Nie    |
| Amount Of Servings Needed             |      Ile razy podczas gry Chef musi nakarmić graczy aby wygrać       |    Ilość    |     3     |      2-5       |
| Duration Of Side Effects              |  Przez jaki czas efekt uboczny będzie aktywny na nakarmionym graczu  |    Czas     |    60s    |    0s-120s     |
| Show Arrows Pointing To Dead Bodies   |      Ustawia czy Chef dostanie strzałkę w stronę martwego ciała      | Przełącznik |    Tak    |   Tak / Nie    |
| ┣ Dead Body Arrow Delay               | Ile sekund Chef musi odczekać zanim dostanie strzałkę w stronę ciała |    Czas     |   0.5s    |   0.0s-15.0s   |
| ┗ Dead Body Arrow Duration            |           Jak długo Chef będzie widział strzałkę do ciała            |    Czas     |   10.0s   | 0.5s-15.0s / ∞ |
| ┗ Hide Role On Win Notification       |       Decyduje, czy informacja o wygranej Chefa jest anonimowa       | Przełącznik |    Nie    |   Tak / Nie    |


### Efekty Uboczne

| Modyfikator | Efekt Uboczny  |                                            Wygląd Serve                                             |
|:-----------:|:--------------:|:---------------------------------------------------------------------------------------------------:|
|    Flash    | Przyśpieszenie | <img src={useBaseUrl('/img/PrzyciskiNeut/ChefServeBurger.png')} alt="Button" style={{width: 50}} /> |
|    Giant    |  Spowolnienie  | <img src={useBaseUrl('/img/PrzyciskiNeut/ChefServeTurkey.png')} alt="Button" style={{width: 50}} /> |
|    Mini     | Przyśpieszenie |  <img src={useBaseUrl('/img/PrzyciskiNeut/ChefServeCake.png')} alt="Button" style={{width: 50}} />  |