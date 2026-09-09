import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Hypnotist.png')} alt="Icon" align="left" style={{height: 60}} />

# Hypnotist

### *Zahipnotyzuj Crewmate'ów!*

**Przynależność: Imp Support (Wsparcie)**

**Hypnotist** może **zahipnotyzować** innych graczy.\
Na spotkaniu, będzie mógł on permanentnie wprowadzić wszystkich **zahipnotyzowanych** graczy w stan **masowej histerii**.\
Podczas **masowej histerii**, każdy **zahipnotyzowany** gracz będzie widział innych jako zakamuflowanych sposoby.\
**Hypnotist** nie może używać **Hypnotise** po użyciu **Mass Hysteria**.

### Umiejętności

|                                             Przycisk                                              |    Umiejętność    |                                                        Opis                                                        |      Użycie       |
|:-------------------------------------------------------------------------------------------------:|:-----------------:|:------------------------------------------------------------------------------------------------------------------:|:-----------------:|
| <img src={useBaseUrl('/img/PrzyciskiImp/HypnoHypnotise.png')} alt="Button" style={{width: 50}} /> |   **Hypnotise**   |                                           Pozwala zahipnotyzować gracza                                            |     Na graczu     |
| <img src={useBaseUrl('/img/PrzyciskiImp/HypnoHysteria.png')} alt="Button" style={{width: 50}} />  | **Mass Hysteria** | Na spotkaniu Hypnotist może użyć Mass Hysteria aby po spotkaniu każdy zahipnotyzowany gracz widział innych inaczej | Podczas spotkania |

### Opcje

| Ustawienie                       |                            Opis                             |     Typ     | Domyślnie |   Wartość   |
|----------------------------------|:-----------------------------------------------------------:|:-----------:|:---------:|:-----------:|
| Hypnotise Cooldown               | Czas który Hypnotist musi odczekać przed użyciem Hypnotise  |    Czas     |   25.0s   | 5.0s-120.0s |
| Hypnotist Can Kill With Teammate | Ustawia czy Hypnotist może zabijać gdy ma żyjącego partnera | Przełącznik |    Tak    |  Tak / Nie  |