import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Doomsayer.png')} alt="Icon" align="left" style={{height: 60}} />

# Doomsayer

### *Zgadnij rolę graczy aby wygrać!*

**Przynależność: Neut Evil (Szkodliwy)**

**Doomsayer** aby wygrać musi zgadnąć rolę paru graczy.\
Aby mu w tym pomóc może mieć dostęp do umiejętności **Observe**, gdy użyję ją na kogoś, na spotkaniu dowie się jakie rolę może mieć ten gracz.\
Gdy **Doomsayer** zgadnie niepoprawnie, nie zginie ale straci możliwość zgadywania do końca spotkania.

### Umiejętności

|                                            Przycisk                                             | Umiejętność |                                              Opis                                              |           Użycie            |
|:-----------------------------------------------------------------------------------------------:|:-----------:|:----------------------------------------------------------------------------------------------:|:---------------------------:|
| <img src={useBaseUrl('/img/PrzyciskiNeut/DoomObserve.png')} alt="Button" style={{width: 50}} /> | **Observe** |                                     Pozwala obserwować się                                     |          Na graczu          |
|  <img src={useBaseUrl('/img/PrzyciskiNeut/DoomGuess.png')} alt="Button" style={{width: 50}} />  |  **Guess**  | Pozwala Doomsayerowi strzelić w gracza na spotkaniu, zabijając go jeśli poprawnie zgadnie role | Na graczu podczas spotkania |

### Opcje

| Ustawienie                                   |                                    Opis                                     |     Typ     |     Domyślnie     |                 Wartość                 |
|----------------------------------------------|:---------------------------------------------------------------------------:|:-----------:|:-----------------:|:---------------------------------------:|
| Observe Cooldown                             |          Czas który Doomsayer musi odczekać przed użyciem Observe           |    Czas     |        20s        |                 1s-30s                  |
| Number Of Guesses Needed To Win              |              Ilość ról które Doomsayer musi zgadnać aby wygrać              |    Ilość    |         3         |                   2-5                   |
| Doomsayer Can Guess Crew Investigative Roles |       Ustawia czy Doomsayer może zgadywać rolę Crewmate Investigative       | Przełacznik |        Nie        |                Tak / Nie                |
| Doomsayer Guesses All Roles At Once          | Ustawia czy Doomsayer musi zgadnąć wszystkie rolę podczas jednego spotkania | Przełacznik |        Nie        |                Tak / Nie                |
| ┗ Kill Only Last Victim                      |         Ustawia czy Doomsayer zabije tylko ostatnią zgadywaną osobę         | Przełacznik |        Nie        |                Tak / Nie                |
| Doomsayer Can't Observe                      |                Ustawia czy Doomsayer nie może używać Observe                | Przełacznik |        Nie        |                Tak / Nie                |
| Doomsayer Win                                |                    Co się dzieje po wygranej Doomsayera                     |   String    | Leaves In Victory | Ends Game / Leaves In Victory / Nothing |
| ┗ Hide Role On Win Notification              |        Decyduje, czy informacja o wygranej Doomsayera jest anonimowa        | Przełącznik |        Nie        |                Tak / Nie                |
| Doomsayer Continues The Game                 |                   Ustawia czy Doomsayer przetrzymuję grę                    | Przełącznik |        Tak        |                Tak / Nie                |

### Wyniki Observe

| Podpowiedź                                                            |                                                                        Lista ról                                                                         |
|-----------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------:|
| You observe that (gracz) has an altered perception of reality.        |                                     Aurial, Eclipsal, Glitch, Imitator, Morphling, Mystic, Parasite, Spy, Time Lord                                      | 
| You observe that (gracz) is capable of performing relentless attacks. |                                             Bomber, Deputy, Jailor, Juggernaut, Sheriff, Vigilante, Warlock                                              |
| You observe that (gracz) has an insight for private information.      |                           Ambassador, Blackmailer, Doomsayer, Forensic, Herbalist, Mercenary, Oracle, Sentry, Snitch, Trapper                            |
| You observe that (gracz) is well trained in hunting down prey         |                                      Hunter, Inquisitor, Investigator, Lookout, Scavenger, Sonar, Swooper, Werewolf                                      |
| You observe that (gracz) has an unusual obsession with dead bodies.   |                                          Altruist, Amnesiac, Chef, Janitor, Medium, Medusa, Undertaker, Vampire                                          |
| You observe that (gracz) spreads fear amongst the group.              |         Ambusher, Arsonist, Barkeeper, Bootlegger, Hypnotist, Miner, Monarch, Officer, Plaguebearer, Prosecutor, Seer, Spellslinger, Transporter         | 
| You observe that (gracz) has a trick up their sleeve.                 |                                      Executioner, Jester, Plumber, Politician, Puppeteer, Swapper, Venerer, Veteran                                      | 
| You observe that (gracz) hides to guard themself or others.           |                                   Cleric, Engineer, Escapist, Fairy, Grenadier, Medic, Mirrorcaster, Survivor, Warden                                    | 
| You observe that (gracz) is not from this town.                       | Role z Vanilli (Detective, Tracker, Scientist, Viper, Phantom, Crewmate, Impostor), oraz rolę z innych modów które nie zostały przypisane gdzieindziej . |