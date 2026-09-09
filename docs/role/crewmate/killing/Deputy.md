import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Deputy.png')} alt="Icon" align="left" style={{height: 60}} />

# Deputy

### *Przyczaj się na Crewmate'cie by złapać jego zabójce!*

**Przynależność: Crew Killing (Zabijający)**

**Deputy** może użyć **Camp** na jednym graczu, aby dowiedzieć się, kiedy ten zginie.\
Na następnym spotkaniu może pomścić tego gracza strzelając do jego zabójcy. \
Jeśli się pomyli lub zabójca jest nieśmiertelny, nic się nie stanie, a **Deputy** straci możliwość dokonania zemsty w tym spotkaniu.\
Jeżeli po udanym strzale **Deputy** jest ujawniony, nie będzie można go zgadnąć.

### Umiejętności

|                                           Przycisk                                           | Umiejętność |                                   Opis                                   |                Typ                |
|:--------------------------------------------------------------------------------------------:|:-----------:|:------------------------------------------------------------------------:|:---------------------------------:|
| <img src={useBaseUrl('/img/PrzyciskiCrew/DepCamp.png')} alt="Button" style={{width: 50}} />  |  **Camp**   | Pozwala na przyczajenie się na graczu by dowiedzieć się kiedy ten zginie |       Interakcja na graczu        |
| <img src={useBaseUrl('/img/PrzyciskiCrew/DepShoot.png')} alt="Button" style={{width: 50}} /> |  **Shoot**  |   Na spotkaniu Deputy może użyć Shoot aby spróbować zastrzelić zabójce   | Interakcja z graczem na spotkaniu |

### Opcje

| Ustawienie                             |                                 Opis                                 |     Typ     |   Domyślnie   |                 Wartość                  |
|----------------------------------------|:--------------------------------------------------------------------:|:-----------:|:-------------:|:----------------------------------------:|
| Warn Killer Upon Killing Camped Target | Ustawia czy zabójca jest powiadomiony o tym, że zabił cel Deputy'ego | Przełącznik |      Tak      |                Tak / Nie                 |
| Reveal Deputy Upon Succesful Shot      |   Decyduje, czy Deputy jest ujawniony publicznie po udanym strzale   |   String    | Reveal Deputy | Disabled / Reveal Deputy / Announce Role |