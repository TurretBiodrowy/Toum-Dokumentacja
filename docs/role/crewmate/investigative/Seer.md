import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<img src={useBaseUrl('/img/Ikony/Role/Seer.png')} alt="Icon" align="left" style={{height: 60}} />

# Seer

### *Ujawnij przynależności innych graczy, bądź porównaj je ze sobą!*

**Przynależność: Crew Investigative (Śledczy)**

<Tabs>
 <TabItem value="Porównywanie" label="Porównywanie" default>

**Seer** może porównać dwóch graczy, sprawdzając czy są sobie przyjaźni, bądź przeciwni.\
Gracze nie w tej samej frakcji (np. Impostor + Crewmate) będą sobie przeciwni, a Seer zobaczy ich jako <b><font color="#D64042">Enemies</font></b>.\
Gracze w tej samej frakcji (np. Crewmate + Crewmate) będą sobie przyjaźni, a Seer zobaczy ich jako <b><font color="#4CF6FF">Friends</font></b>.

### Umiejętności

| Przycisk                                                                                       | Umiejętność |                                   Opis                                   |  Użycie   |
|------------------------------------------------------------------------------------------------|:-----------:|:------------------------------------------------------------------------:|:---------:|
| <img src={useBaseUrl('/img/PrzyciskiCrew/SeerGaze.png')} alt="Button" style={{width: 50}} />   |  **Gaze**   | Pozwala porównać wybranego gracza z graczem zaznaczonem za pomocą Intuit | Na graczu |
| <img src={useBaseUrl('/img/PrzyciskiCrew/SeerIntuit.png')} alt="Button" style={{width: 50}} /> | **Intuit**  |  Pozwala porównać wybranego gracza z graczem zaznaczonem za pomocą Gaze  | Na graczu |

 ### Opcje

| Ustawienie                                     |                                                     Opis                                                      |     Typ     | Domyślnie |   Wartość   |
|------------------------------------------------|:-------------------------------------------------------------------------------------------------------------:|:-----------:|:---------:|:-----------:|
| Compare Players Instead of Checking Alignments |     Zmienia Seera pomiędzy Porównywaniem i Ujawnianiem, zależnie od tego czy jest włączone, czy wyłączone     | Przełącznik |    Tak    |  Tak / Nie  |
| ┣ Compare Cooldown                             |                            Czas który Seer musi odczekać pomiędzy użyciami Reveal.                            |    Czas     |   25.0s   | 5.0s-120.0s |
| ┣ Max Uses Of Compare                          |                              Maksymalna ilość porównań które Seer może wykonać.                               |    Ilość    |     5     |  1-15 / ∞   |
| ┣ Can Compare More Than Once Per Round         |                         Ustawia czy Seer może porównać więcej niż jedną parę na rundę                         | Przełącznik |    Nie    |  Tak / Nie  |
| ┣ Can Only Compare Each Player Once            |                            Ustawia czy Seer może porównać każdego gracza tylko raz                            | Przełącznik |    Nie    |  Tak / Nie  |
| ┣ Neutral Benign Show Friends To All           |                Ustawia czy rolę Neutral Benign liczą się jako przyjazne dla każdej innej roli.                | Przełącznik |    Nie    |  Tak / Nie  |
| ┣ Neutral Evil Show Friends To All             |                 Ustawia czy rolę Neutral Evil liczą się jako przyjazne dla każdej innej roli.                 | Przełącznik |    Nie    |  Tak / Nie  |
| ┗ Neutral Outlier Show Friends To All          |               Ustawia czy rolę Neutral Outlier liczą się jako przyjazne dla każdej innej roli.                | Przełącznik |    Nie    |  Tak / Nie  |
</TabItem>

 <TabItem value="Ujawnianie" label="Ujawnianie">

**Seer** może ujawnić przynależność innego gracza, aby dowiedzieć się czy jest on <b><font color="#00F600">Dobry</font></b>, czy <b><font color="#D64042">Zły</font></b>.\
Nie zabijający Crewmate'ci będą **zawsze** ujawnione jako <b><font color="#00F600">dobre</font></b>.\
Role Impostorów będą **zawsze** ujawnione jako <b><font color="#D64042">złe</font></b>.

### Umiejętności

| Przycisk                                                                                       | Umiejętność |                                                 Opis                                                  |  Użycie   |
|------------------------------------------------------------------------------------------------|:-----------:|:-----------------------------------------------------------------------------------------------------:|:---------:|
| <img src={useBaseUrl('/img/PrzyciskiCrew/SeerReveal.png')} alt="Button" style={{width: 50}} /> | **Reveal**  | Ujawnia przynależność gracza na czerwono, bądź zielono zależnie od tego czy gracz jest zły czy dobry. | Na graczu |

### Opcje

| Ustawienie                                     |                                                     Opis                                                      |     Typ     | Domyślnie |   Wartość   |
|------------------------------------------------|:-------------------------------------------------------------------------------------------------------------:|:-----------:|:---------:|:-----------:|
| Compare Players Instead of Checking Alignments |     Zmienia Seera pomiędzy Porównywaniem i Ujawnianiem, zależnie od tego czy jest włączone, czy wyłączone     | Przełącznik |    Nie    |  Tak / Nie  |
| ┣ Reveal Cooldown                              |                            Czas który Seer musi odczekać pomiędzy użyciami Reveal.                            |    Czas     |   25.0s   | 5.0s-120.0s |
| ┣ Max Uses Of Reveal                           |                              Maksymalna ilość ujawnień które Seer może wykonać.                               |    Ilość    |     5     |  1-15 / ∞   |
| ┣ Can Reveal More Than Once Per Round          |                      Ustawia czy Seer może ujawnić jedną więcej niż jedną osobę na rundę                      | Przełącznik |    Nie    |  Tak / Nie  |
| ┣ Crewmate Killing Roles Are Red               |                        Ustawia czy rolę Crewmate Killing wyświetlają się na czerwono.                         | Przełącznik |    Nie    |  Tak / Nie  |
| ┣ Neutral Benign Roles Are Red                 |                         Ustawia czy rolę Neutral Benign wyświetlają się na czerwono.                          | Przełącznik |    Nie    |  Tak / Nie  |
| ┣ Neutral Evil Roles Are Red                   |                          Ustawia czy rolę Neutral Evil wyświetlają się na czerwono.                           | Przełącznik |    Nie    |  Tak / Nie  |
| ┣ Neutral Killing Roles Are Red                |                         Ustawia czy rolę Neutral Killing wyświetlają się na czerwono.                         | Przełącznik |    Tak    |  Tak / Nie  |
| ┣ Neutral Outlier Roles Are Red                |                         Ustawia czy rolę Neutral Outlier wyświetlają się na czerwono.                         | Przełącznik |    Nie    |  Tak / Nie  |
| ┗ Traitor Swaps Colors                         |                      Ustawia czy gracz któty stał się Traitorem zmienia kolor dla Seera.                      | Przełącznik |    Tak    |  Tak / Nie  |
</TabItem>
</Tabs>
