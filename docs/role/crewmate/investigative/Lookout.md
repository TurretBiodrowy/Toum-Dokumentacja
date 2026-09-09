import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Lookout.png')} alt="Icon" align="left" style={{height: 60}} />

# Lookout

### *Miej oczy szeroko otwarte!*

**Przynależność: Crew Investigative (Śledczy)**

**Lookout** może obserwować innych gracz podczas rundy.\
Gdy **Lookout** obserwuje gracza, na następnym spotkaniu dowie się jacy gracze, bądź rolę wykonały **Interakcje** na obserwowanym graczu.

### Umiejętności

| Przycisk                                                                                         | Umiejętność |                                                    Opis                                                     |  Użycie   |
|--------------------------------------------------------------------------------------------------|:-----------:|:-----------------------------------------------------------------------------------------------------------:|:---------:|
| <img src={useBaseUrl('/img/PrzyciskiCrew/LookoutWatch.png')} alt="Button" style={{width: 50}} /> |  **Watch**  | Pozwala Lookoutowi na obserwowanie graczy, aby dowiedzieć się jakie rolę/graczę wykonały na nim interakcje. | Na graczu |

### Opcje

| Ustawienie                             |                                  Opis                                   |     Typ     | Domyślnie |     Wartość     |
|----------------------------------------|:-----------------------------------------------------------------------:|:-----------:|:---------:|:---------------:|
| Watch Cooldown                         |         Czas który gracz musi odczekać pomiędzy użyciami Watch.         |    Czas     |    20s    |     1s-30s      |
| Watched Player Feedback Reveals        |           Decyduje o tym, czy Lookout widzi Graczy albo Rolę            |   String    |  Players  | Players / Roles |
| Initial Players That Can Be Watched    |              Ile graczy początkowo może być obserwowanych.              |    Ilość    |     5     |      1-15       |
| See Indirect Attacks                   | Ustawia czy Lookout może zobaczyć ataki pośrednie (Bomba, Spalenie itp) | Przełącznik |    Nie    |    Tak / Nie    |
| Lookout Watches Reset After Each Round |          Ustawia czy obserwowani gracze resetują się co rundę.          | Przełącznik |    Tak    |    Tak / Nie    |
| ┗ Get More Uses From Completing Tasks  |   Ustawia czy Lookout dostaje więcej użyć Watch za wykonywanie zadań.   | Przełącznik |    Nie    |    Tak / Nie    |