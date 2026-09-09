import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Jester.png')} alt="Icon" align="left" style={{height: 60}} />

# Jester

### *Zostań wygłosowanym aby wygrać!*

**Przynależność: Neut Evil (Szkodliwy)**

**Jester** aby wygrać grę, musi zostać wygłosowany na spotkaniu.

### Umiejętności

|                                            Przycisk                                             | Umiejętność |                                                Opis                                                 |        Użycie        |
|:-----------------------------------------------------------------------------------------------:|:-----------:|:---------------------------------------------------------------------------------------------------:|:--------------------:|
| <img src={useBaseUrl('/img/PrzyciskiNeut/JesterPoke.png')} alt="Button" style={{width: 50}} />  |  **Poke**   |                       Pozwala wykonać interakcję na graczu która nic nie robi                       |      Na graczu       |
| <img src={useBaseUrl('/img/PrzyciskiNeut/JesterHaunt.png')} alt="Button" style={{width: 50}} /> |  **Haunt**  | Jeśli **Haunts** jest ustawione jako typ wygranej, Jester może zabić jedną osobę po opuszczeniu gry | Po śmierci na graczu |
| <img src={useBaseUrl('/img/PrzyciskiNeut/JesterVent.png')} alt="Button" style={{width: 50}} />  |  **Vent**   |                               Pozwala Jesterowi schować się w ventcie                               |      Na ventcie      |

### Opcje

| Ustawienie               |                                          Opis                                           |     Typ     | Domyślnie |           Wartość            |
|--------------------------|:---------------------------------------------------------------------------------------:|:-----------:|:---------:|:----------------------------:|
| Can Use Button           |                        Ustawia czy Jester może zwołać spotkanie                         | Przełącznik |    Tak    |          Tak / Nie           |
| Can Hide In Vents        |          Ustawia czy Jester może schować się, ale nie przemieszczać w ventach           | Przełącznik |    Tak    |          Tak / Nie           |
| ┣ Vent Cooldown          |                                                                                         |    Czas     |   15.0s   |          0.0s-25.0s          |
| ┗ Vent Duration          |                                                                                         |    Czas     |   45.0s   |        2.5s-60.0s / ∞        |
| Can Poke Others          |                         Ustawia czy Jester może dotknąć gracza                          | Przełącznik |    Tak    |          Tak / Nie           |
| ┗ Poke Cooldown          |                   Czas który Jester musi odczekać przed użyciem Poke                    |    Czas     |   25.0s   |         5.0s-120.0s          |
| Has Impostor Vision      | Ustawia czy Jester ma zwiększoną wizję i jest odporny na sabotaż świateł jak Impostorzy | Przełącznik |    Tak    |          Tak / Nie           |
| Scatter Mechanic Enabled |     Ustawia czy Jester umrze jeśli będzie stać w miejscu przez dłuższy okres czasu      | Przełącznik |    Tak    |          Tak / Nie           |
| ┗ Scatter Timer          |                  Czas który Jester ma na poruszenie się aby nie umrzeć                  |    Czas     |   25.0s   |         5.0s-120.0s          |
| After Win Type           |                            Co się dzieje po wygranej Jestera                            |   String    | Ends Game | Ends Game / Haunts / Nothing |
| ┗ Notify Others On Win   |                   Decyduje o tym, czy inni wiedzą o wygranej Jestera                    | Przełącznik |    Tak    |          Tak / Nie           |