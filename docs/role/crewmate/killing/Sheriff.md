import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Sheriff.png')} alt="Icon" align="left" style={{height: 60}} />

# Sheriff

### *Zastrzel zabójców!*

**Przynależność: Crew Killing (Zabijający)**

**Sheriff** może spróbować zastrzelić innego gracza.\
Jeśli gracz w którego strzelił, nie był Impostorem, bądź ustawioną przynależnością Neutralną, **Sheriff** poniesie ustawioną konsekwencję.

### Umiejętności

|                                             Przycisk                                             | Umiejętność |                                  Opis                                   |  Użycie   |
|:------------------------------------------------------------------------------------------------:|:-----------:|:-----------------------------------------------------------------------:|:---------:|
| <img src={useBaseUrl('/img/PrzyciskiCrew/SheriffShoot.png')} alt="Button" style={{width: 50}} /> |  **Shoot**  | Pozwala strzelić w gracza, zabijąc go jeśli był jedną z ustawionych ról | Na graczu |

### Opcje

| Ustawienie                       |                            Opis                             |     Typ     | Domyślnie |                Wartość                 |
|----------------------------------|:-----------------------------------------------------------:|:-----------:|:---------:|:--------------------------------------:|
| Kill Cooldown                    |  Czas który Sheriff musi odczekać pomiędzy użyciami Shoot   |    Czas     |   25.0s   |              10.0s-60.0s               |
| Can Self Report                  | Ustawia czy Sheriff może zgłosić ciała graczy których zabił | Przełącznik |    Nie    |               Tak / Nie                |
| Allow Shooting In First Round    |    Ustawia czy Sheriff może strzelać w pierwszej rundzie    | Przełącznik |    Nie    |               Tak / Nie                |
| Can Shoot Neutral Benign Roles   |    Ustawia czy Sheriff może zabić graczy Neutral Benign     | Przełącznik |    Nie    |               Tak / Nie                |
| Can Shoot Neutral Evils Roles    |     Ustawia czy Sheriff może zabić graczy Neutral Evil      | Przełącznik |    Tak    |               Tak / Nie                |
| Can Shoot Neutral Killings Roles |    Ustawia czy Sheriff może zabić graczy Neutral Killing    | Przełącznik |    Tak    |               Tak / Nie                |
| Can Shoot Neutral Outliers Roles |    Ustawia czy Sheriff może zabić graczy Neutral Outlier    | Przełącznik |    Tak    |               Tak / Nie                |
| Misfire Kills                    |          Kto zginie po nieudanym strzale Sheriffa           |   String    |   Self    | Self / Target / Self & Target / No one |