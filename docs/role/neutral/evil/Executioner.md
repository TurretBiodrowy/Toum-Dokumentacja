import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Executioner.png')} alt="Icon" align="left" style={{height: 60}} />

# Executioner

### *Doprowadź do wygłosowania twojego celu aby wygrać!*

**Przynależność: Neut Evil (Szkodliwy)**

**Executioner** na początek gry dostaje jednego gracza jak swój **cel** oznaczonego brązowym **X**.\
Aby wygrać musi on sprawić, że jego **cel** zostanie wygłosowany na spotkaniu.\
Gdy jego **cel** umrze, zmieni się on w inną rolę.

**Celem** **Executionera** może być tylko gracz z rolą **Crewmate**'ową.\
W przypadku gdy **cel** stanie się zły (**Vampire**/**Traitor**) **Executioner** nie zakończy gry po swoim zwycięstwie.


### Umiejętności

|                                            Przycisk                                            | Umiejętność |                                                        Opis                                                         |        Użycie        |
|:----------------------------------------------------------------------------------------------:|:-----------:|:-------------------------------------------------------------------------------------------------------------------:|:--------------------:|
| <img src={useBaseUrl('/img/PrzyciskiNeut/ExeTorment.png')} alt="Button" style={{width: 50}} /> | **Torment** | Jeśli **Leaves & Torments** jest ustawione jako typ wygranej, Executioner może zabić jedną osobę po opuszczeniu gry | Po śmierci na graczu |

### Opcje

| Ustawienie                           |                              Opis                               |     Typ     |     Domyślnie     |                       Wartość                       |
|--------------------------------------|:---------------------------------------------------------------:|:-----------:|:-----------------:|:---------------------------------------------------:|
| On Target Death, Executioner Becomes |        Jaką rolą zostaje Executioner gdy jego cel umrze         |   String    |      Jester       | Crewmate / Amnesiac / Survivor / Mercenary / Jester |
| Executioner Can Button               |          Ustawia czy Executioner może zwołać spotkanie          | Przełącznik |        Tak        |                      Tak / Nie                      |
| Executioner Win                      |             Co się dzieje po wygranej Executionera              |   String    | Leaves & Torments |       Ends Game / Leaves & Torments / Nothing       |
| ┗ Hide Role On Win Notification      | Decyduje, czy informacja o wygranej Executionera jest anonimowa | Przełącznik |        Nie        |                      Tak / Nie                      |