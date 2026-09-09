import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Fairy.png')} alt="Icon" align="left" style={{height: 60}} />

# Fairy

### *Obroń swój cel!*

**Przynależność: Neut Benign (Nieszkodliwy)**

**Fairy** na początku dostaje jednego gracza, oznaczonego symbolem ★ jako swój **cel** którego musi dopilnować, by przeżył aby wygrać.\
Parę razy na grę **Fairy**, może nadać ochrone na swój **cel**, dzięki której będzie mógł przeżyć on wszelkimi atakami.\
Gdy jego **cel** umrze, zmieni się on w inną rolę.


### Umiejętności

|                                             Przycisk                                             | Umiejętność |             Opis             |       Użycie        |
|:------------------------------------------------------------------------------------------------:|:-----------:|:----------------------------:|:-------------------:|
| <img src={useBaseUrl('/img/PrzyciskiNeut/FairyProtect.png')} alt="Button" style={{width: 50}} /> | **Protect** | Nakłada ochrone na cel Fairy | Globalne na graczem |

### Opcje

| Ustawienie                     |                                 Opis                                 |     Typ     |   Domyślnie    |                       Wartość                       |
|--------------------------------|:--------------------------------------------------------------------:|:-----------:|:--------------:|:---------------------------------------------------:|
| Protect Cooldown               |         Czas który Fairy musi odczekać przed użyciem Protect         |    Czas     |     25.0s      |                     5.0s-120.0s                     |
| Protect Duration               |        Czas przez który Protect będzie aktywny na celu Fairy         |    Czas     |      10s       |                       5s-15s                        |
| Max Numbers Of Protects        |            Maksymalna ilość ochron które Fairy może nadać            |    Ilość    |       5        |                        1-15                         |
| Show Protected Players         |                      Kto widzi tarcze od Fairy                       |   String    | Fairy + Target |     Fairy / Target / Fairy + Target / Everyone      |
| On Target Death, Fairy Becomes |              Jaką rolą, po śmierci celu zostanie Fairy               |   String    |    Amnesiac    | Crewmate / Amnesiac / Survivor / Mercenary / Jester |
| Target Knows Fairy Exists      |                Ustawia czy cel wie o tym, że ma Fairy                | Przełącznik |      Tak       |                      Tak / Nie                      |
| Fairy Knows Target's Role      |               Ustawia czy Fairy zna rolę swojego celu                | Przełącznik |      Tak       |                      Tak / Nie                      |
| Odds Of Target Being Evil      | Jaka jest szansa na to, że cel Fairy będzie zły (Impostor / Neutral) |   Procent   |      20%       |                       0%-100%                       |