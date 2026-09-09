import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<img src={useBaseUrl('/img/Ikony/Role/PoliMayo.png')} alt="Icon" align="left" style={{height: 60}} />

# Politician i Mayor
<Tabs>
 <TabItem value="Politician" label="Politician" default> 

<img src={useBaseUrl('/img/Ikony/Role/Politician.png')} alt="Icon" align="left" style={{height: 50}} />

# Politician

### *Przeprowadź kampanie aby zostać Mayorem!*

**Przynależność: Crew Power (Wpływowy)**

**Politician** musi rozdać swoją kampanie przynajmniej połowie żyjących Crewmate'ów, aby móc ujawnić się jako **Mayor**.\
Osoby z kampanią będą zaznaczone dla **Politiciana** oraz **Mayora** na <b><font color="#4CF6FF">cyjanowy</font></b>.

### Umiejętności

|                                             Przycisk                                             | Umiejętność  |                                              Opis                                               |  Użycie   |
|:------------------------------------------------------------------------------------------------:|:------------:|:-----------------------------------------------------------------------------------------------:|:---------:|
| <img src={useBaseUrl('/img/PrzyciskiCrew/PoliCampaign.png')} alt="Button" style={{width: 50}} /> | **Campaign** |                           Pozwala rozdać swoją kampanie innemu graczu                           | Na graczu |
|  <img src={useBaseUrl('/img/PrzyciskiCrew/PoliReveal.png')} alt="Button" style={{width: 50}} />  |  **Reveal**  | Politician może spróbować się ujawnić, gdy uzna, że ma już wystarczającą ilość graczy w kampani | Bez celu  |

### Opcje

| Ustawienie                           |                                                           Opis                                                           |     Typ     | Domyślnie |   Wartość   |
|--------------------------------------|:------------------------------------------------------------------------------------------------------------------------:|:-----------:|:---------:|:-----------:|
| Campaign Cooldown                    |                              Czas który Politician musi odczekać pomiędzy użyciami Campaign                              |    Czas     |   25.0s   | 10.0s-60.0s |
| Prevent Campaigning On Failed Reveal | Ustawia czy Politician będzie mógł rozdawać kampanie w następnej rundzie, jeśli podczas spotkania nie uda mu się ujawnić | Przełacznik |    Tak    |  Tak / Nie  |

</TabItem>

<TabItem value="Mayor" label="Mayor">

<img src={useBaseUrl('/img/Ikony/Role/Mayor.png')} alt="Icon" align="left" style={{height: 50}}  />

# Mayor

### *Poprowadź załogę do zwycięstwa*

Ujawniony **Mayor**, ma swoje głosy liczone jako 3, zmienia wygląd na spotkaniu oraz staje się niemożliwy do zgadnięcia przez Assassina.

</TabItem>
</Tabs>

