import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Juggernaut.png')} alt="Icon" align="left" style={{height: 60}} />

# Juggernaut

### *Zabijaj graczy aby stać się silniejszym!*

**Przynależność: Neut Killing (Zabijający)**

**Juggernaut** co zabójstwo ma skrócony Kill Cooldown o parę sekund.

### Umiejętności

|                                           Przycisk                                           | Umiejętność |                          Opis                          |   Użycie   |
|:--------------------------------------------------------------------------------------------:|:-----------:|:------------------------------------------------------:|:----------:|
| <img src={useBaseUrl('/img/PrzyciskiNeut/JuggKill.png')} alt="Button" style={{width: 50}} /> |  **Kill**   | Pozwala zabić gracza, aby zmiejszyć sobie killcooldown | Na graczu  |
| <img src={useBaseUrl('/img/PrzyciskiNeut/JuggVent.png')} alt="Button" style={{width: 55}} /> |  **Vent**   |       Pozwala przemieszczać się pomiędzy Ventami       | Na ventcie |

### Opcje

| Ustawienie              |                                 Opis                                 |     Typ     | Domyślnie |   Wartość   |
|-------------------------|:--------------------------------------------------------------------:|:-----------:|:---------:|:-----------:|
| Initial Kill Cooldown   | Początkowy Czas który Juggernaut musi odczekać przed zabiciem gracza |    Czas     |   25.0s   | 5.0s-120.0s |
| Kill Cooldown Reduction |     O ile sekund skraca się Kill Cooldown Juggernauta co zabicie     |    Czas     |   5.0s    | 2.5s-15.0s  |
| Juggernaut Can Vent     |              Ustawia czy Juggernaut może używać ventów               | Przełącznik |    Tak    |  Tak / Nie  |