import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<img src={useBaseUrl('/img/Ikony/Role/PlaguePesti.png')} alt="Icon" align="left" style={{height: 60}} />

# Plaguebearer i Pestilence
<Tabs>
 <TabItem value="Plaguebearer" label="Plaguebearer" default> 

<img src={useBaseUrl('/img/Ikony/Role/Plaguebearer.png')} alt="Icon" align="left" style={{height: 50}} />

# Plaguebearer

### *Zainfekuj graczy by stać się Pestilencem, Jeźdźcą Apokalipsy!*

**Przynależność: Neut Killing (Zabijający)**

**Plaguebearer** może infekować innych graczy plagą. Zarażeni gracze przenoszą plagę poprzez interakcję z innymi.\
Gdy wszyscy żyjący graczę będą zainfekowani, zmieni się on w **Pestilence**’a.

### Umiejętności

|                                             Przycisk                                             | Umiejętność |                           Opis                            |  Użycie   |
|:------------------------------------------------------------------------------------------------:|:-----------:|:---------------------------------------------------------:|:---------:|
| <img src={useBaseUrl('/img/PrzyciskiNeut/PlagueInfect.png')} alt="Button" style={{width: 50}} /> | **Infect**  | Zaraża gracza plagą, ten gracz będzie ją teraz przenosić. | Na graczu |

### Opcje

| Ustawienie                |                                Opis                                |   Typ   | Domyślnie |   Wartość   |
|---------------------------|:------------------------------------------------------------------:|:-------:|:---------:|:-----------:|
| Instant Pestilence Chance | Szansa żeby Plaguebearer odrazu pojawił się w grze jako Pestilence | Procent |    0%     |   0%-100%   |
| Infect Cooldown           |     Czas który Plaguebearer musi odczekać przed użyciem Infect     |  Czas   |   25.0s   | 5.0s-120.0s |

</TabItem>

<TabItem value="Pestilence" label="Pestilence">

<img src={useBaseUrl('/img/Ikony/Role/Pestilence.png')} alt="Icon" align="left" style={{height: 50}}  />

# Pestilence

### *Jeźdźca Apokalipsy!*

**Pestilence** to niepowstrzymana siła którego da się zabić tylko przez wygłosowanie.\
**Pestilence** może zabijać normalnie oraz posiada pasywną umiejętność przez którą, zaatakuje on każdego kto wejdzie z nim w interakcję.\

### Umiejętności

|                                           Przycisk                                           | Umiejętność |                    Opis                    |   Użycie   |
|:--------------------------------------------------------------------------------------------:|:-----------:|:------------------------------------------:|:----------:|
| <img src={useBaseUrl('/img/PrzyciskiNeut/PestKill.png')} alt="Button" style={{width: 50}} /> |  **Kill**   |            Pozwala zabić gracza            | Na graczu  |
| <img src={useBaseUrl('/img/PrzyciskiNeut/PestVent.png')} alt="Button" style={{width: 55}} /> |  **Vent**   | Pozwala przemieszczać się pomiędzy Ventami | Na ventcie |

### Opcje

| Ustawienie                         |                                        Opis                                         |     Typ     | Domyślnie |   Wartość   |
|------------------------------------|:-----------------------------------------------------------------------------------:|:-----------:|:---------:|:-----------:|
| Announce Pestilence Transformation | Ustawia czy gracze dostaną powiadomienie gdy Plaguebearer zmieni się w Pestilence'a | Przełącznik |    Tak    |  Tak / Nie  |
| Pestilence Kill Cooldown           |                 Czas który Pestilence musi odczekać przed zabiciem                  |    Czas     |   25.0s   | 5.0s-120.0s |
| Pestilence Can Vent                |                      Ustawia czy Pestilence może używać ventów                      | Przełacznik |    Nie    |  Tak / Nie  |

</TabItem>
</Tabs>