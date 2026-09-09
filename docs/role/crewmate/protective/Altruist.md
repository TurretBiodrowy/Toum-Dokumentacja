import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Altruist.png')} alt="Icon" align="left" style={{height: 60}} />

# Altruist

### *Ożyw martwych Crewmate'ów!*

**Przynależność: Crew Protective (Ochronny)**

**Altruista** może ożywić martwych graczy jeśli znajdzie ich ciała.\
Przed oraz po wskrzeszeniu lokalizacja **Altruisty** oraz graczy ożywionych będzie widoczna dla Impostorów i Neutralnych Zabójców.\
Wskrzeszenie gracze, oraz **Altruista** permanentnie stracą możliwość zwoływania spotkania.

### Umiejętności

|                                            Przycisk                                             | Umiejętność |                        Opis                         |      Użycie      |
|:-----------------------------------------------------------------------------------------------:|:-----------:|:---------------------------------------------------:|:----------------:|
| <img src={useBaseUrl('/img/PrzyciskiCrew/AltruRevive.png')} alt="Button" style={{width: 50}} /> | **Revive**  | Pozwala odrodzić jednego, bądź grupę osób w pobliżu | Na ciele/ciałach |

### Opcje

| Ustawienie                         |                                  Opis                                  |     Typ     |       Domyślnie        |                            Wartość                            |
|------------------------------------|:----------------------------------------------------------------------:|:-----------:|:----------------------:|:-------------------------------------------------------------:|
| Revive Type                        |             W jaki sposób Altruista może odradzać innych.              |   String    |    Group Sacrifice     |          Group Sacrifice / Group Revive / Sacrifice           |
| ┗ Revive Range                     | Jak blisko ciał Altruista musi się znaleźć aby móc zacząć je odradzać  |   Mnożnik   |         0.25x          |                          0.05x-1.00x                          |
| Revive Duration                    |                Jak długo zajmuje próba odrodzenia kogoś                |    Czas     |           5s           |                            1s-15s                             |
| Revive Uses                        |        Ile razy Altruista może spróbować odrodzić innych graczy        |    Ilość    |           2            |                              1-5                              |
| Kill Altruist When Starting Revive |   Ustawia czy Altruista zostanie zabity odrazu po kliknięciu Revive    |  Przełanik  |          Nie           |                           Tak / Nie                           |
| ┗ Freeze Altruist During Revive    | Ustawia czy Altruista zostaje zatrzymany w miejscu  podczas odradzania | Przełącznik |          Tak           |                           Tak / Nie                           |
| Hide Bodies At Beginning Of Revive |   Ustawia czy ciała odradzanych graczy są ukryte podczas odradzania    | Przełącznik |          Nie           |                           Tak / Nie                           |
| Killers Alerted Before Revive      |     Którzy zabójcy będą powiadomienie zanim odrodzenie się skończy     |   String    |         Nobody         | Nobody / Neutral Killers / Impostors / Neutrals And Impostors |
| Killers Alerted After Revive       |      Którzy zabójcy będą powiadomienie po zakończonym odradzaniu       |   String    | Neutrals And Impostors | Nobody / Neutral Killers / Impostors / Neutrals And Impostors |