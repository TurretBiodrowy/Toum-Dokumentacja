import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Inne/FirstRoundShield.png')} alt="Icon" align="left" style={{height: 60}} />

# Round Start Options

| Ustawienie                           |                                                                         Opis                                                                          |     Typ     |     Domyślnie      |                    Wartość                    |
|--------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------:|:------------------:|:---------------------------------------------:|
| Modifier Type To Show In Role Intro  |                                     Decyduje jaki rodzaj Modyfikatorów będzie wyświetlony podczas ujawnienia roli                                     |   String    |     Universal      |        Universal / Neither / Alliance         |
| Show Faction Modifier On Role Reveal |                                      Decyduje czy Modyfikator Frakcji będzie wyświetlony podczas ujawnienia roli                                      | Przełącznik |        Tak         |                   Tak / Nie                   |
| Initial Button Cooldowns             |                                                 Cooldown z jakim gracze zaczynają po rozpoczęciu gry                                                  |    Czas     |        10s         |                    10s-30s                    |
| Initial Cooldowns Apply For          |                          Decyduje czy Cooldown startowy jest nadawany na wszystkie umiejętności / tylko specyficzne / żadne                           |   String    | Specific Cooldowns | Specific Cooldowns / No Buttons / All Buttons |
| ┣ Minimum Cooldown To Be Applicable  |                                           Minimalny Cooldown umiejętności aby mogła mieć startowy Cooldown                                            |    Czas     |         5s         |                    0s-60s                     |
| ┗ Maximum Cooldown To Be Applicable  |                                           Maksymalny Cooldown umiejętności aby mogła mieć startowy Cooldown                                           |    Czas     |        60s         |                    0s-60s                     |
| First Death Shield Next Game         |                        Ustawia czy gracz który umrze pierwszy w grze dostanie tarczę w pierwszej rundzie podczas kolejnej gry                         | Przełącznik |        Tak         |                   Tak / Nie                   |
| Indicate Round One Victims           | Ustawia czy gracze którzy umarli w pierwszej rundzie gry będzie zaznaczeni w następnej grze (Za pomocą <b><font color="#EFDC04">(Died R1)</font></b>) | Przełącznik |        Tak         |                        Tak / Nie              |