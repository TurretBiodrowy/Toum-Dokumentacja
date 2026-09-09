import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Imitator.png')} alt="Icon" align="left" style={{height: 60}} />

# Imitator

### *Użyj ról martwych by pomóc Crewmate'om!*

**Przynależność: Crew Support (Wsparcie)**

**Imitator** na spotkaniu może imitować rolę Crewmate’ów którzy umarli.\
Zostaje on imitowaną rolą tak długo aż jej nie zmieni.\
Gdy **Imitator** przynajmniej raz zimituje gracza, będzie miał permanentnie pokazane, jaką rolę z niego dostaje.\
Imitowany **Jailor** oraz **Prosecutor** nie będzie mógł używać swoich umiejętności na spotkaniu. Natomiast Imitowany **Vigilante** nie będzie miał żadnych bezpiecznych strzałów.

### Umiejętności

|                                              Przycisk                                               | Umiejętność |                            Opis                             |               Użycie                |
|:---------------------------------------------------------------------------------------------------:|:-----------:|:-----------------------------------------------------------:|:-----------------------------------:|
| <img src={useBaseUrl('/img/PrzyciskiCrew/ImitatorImitate.png')} alt="Button" style={{width: 50}} /> | **Imitate** | Pozwala wybrać gracza którego rolę Imitator będzie imitować | Na martwym graczu podczas spotkaniu |

### Opcje

| Ustawienie                                            |                                             Opis                                             |     Typ     |         Domyślnie         |                       Wartość                        |
|-------------------------------------------------------|:--------------------------------------------------------------------------------------------:|:-----------:|:-------------------------:|:----------------------------------------------------:|
| Imitate Specific Neutral Roles As Similar Crew Roles  | Ustawia czy Imitator może imitować niektóre role Neutralne aby dostać ich Crew odpowiedniki  | Przełącznik |            Tak            |                      Tak / Nie                       |
| Imitate Specific Impostor Roles As Similar Crew Roles | Ustawia czy Imitator może imitować niektóre role Impostorów aby dostać ich Crew odpowiedniki | Przełącznik |            Tak            |                      Tak / Nie                       |
| Imitate Basic Crewmate                                |                  Ustawia czy Imitator może Imitować podstawowego Crewmate'a                  | Przełącznik |            Tak            |                      Tak / Nie                       |
| Imitator Must Be Guessed As                           |                 Jako jaką rolę Assassin musi zgadnąć Imitatora aby go zabić                  |   String    | Imitator or Imitated Role | Imitator / Imitated Role / Imitator or Imitated Role |

### Crew Odpowiedniki Ról Neutralnych oraz Impostorów

| Rola Impostora | Odpowiednik  | | Rola Neutralna | Odpowiednik  |
|:--------------:|:------------:|-|:--------------:|:------------:|
|    Eclipsal    |      X       | |    Amnesiac    |    Mystic    |
|    Escapist    | Transporter  | |     Fairy      | Mirrorcaster |
|   Grenadier    |      X       | |   Mercenary    |    Warden    |
|   Morphling    |      X       | |    Survivor    |      X       |
|    Swooper     |      X       | |   Doomsayer    |  Vigilante   |
|    Venerer     |    Hunter    | |  Executioner   |    Snitch    |
|    Ambusher    |    Sonar     | |     Jester     |   Engineer   |
|     Bomber     |   Trapper    | |    Arsonist    |    Cleric    |
|    Parasite    |      X       | |     Glitch     |  Barkeeper   |
|   Scavenger    | Investigator | |   Juggernaut   |      X       |
|    Warlock     |   Veteran    | |  Plaguebearer  |    Aurial    |
|   Ambassador   |  Vigilante   | |   Pestilence   |   Veteran    |
|   Herbalist    |      X       | | Soul Collector |    Medium    |
|   Puppeteer    |      X       | |    Vampire     |     Seer     |
|  Spellslinger  |    Cleric    | |    Werewolf    |    Hunter    |
|    Traitor     |      X       | |      Chef      |   Forensic   |
|  Blackmailer   |     Spy      | |   Inquisitor   |   Sheriff    |
|   Bootlegger   |  Barkeeper   | |                |              |
|   Hypnotist    |   Lookout    | |                |              |
|    Janitor     |   Forensic   | |                |              |
|     Miner      |   Plumber    | |                |              |
|   Undertaker   |   Altruist   | |                |              | 