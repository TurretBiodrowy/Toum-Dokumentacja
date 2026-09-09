import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Scavenger.png')} alt="Icon" align="left" style={{height: 60}} />

# Scavenger

### *Zapoluj na swoją ofiarę!*

**Przynależność: Imp Killing (Zabijający)**

**Scavenger** na początku gry oraz co zabójstwo dostaje najbliższego gracza jako swój **cel**.\
Gdy zabije on swój **cel**, jego kill cooldown zostanie skrócony, a jeżeli zabije innego gracza, jego kill cooldown będzie wydłużony.\
Jeśli nie zdąży zabić swojego **celu** w danym czasie, jego kill cooldown się zresetuje.

### Opcje

| Ustawienie                                 |                                  Opis                                  |   Typ   | Domyślnie |   Wartość   |
|--------------------------------------------|:----------------------------------------------------------------------:|:-------:|:---------:|:-----------:|
| Scavenge Duration                          |     Ile czasu Scavenger dostaje na początek aby zabić swoją ofiarę     |  Czas   |   25.0s   | 5.0s-120.0s |
| Scavenge Duration Increase Per Kill        |          Ile czas Scavenger dostaje co zabicie swojej ofiary           |  Czas   |   10.0s   | 5.0s-15.0s  |
| Scavenge Kill Cooldown On Correct Kill     |      Kill cooldown Scavengera po poprawnym zabiciu swojej ofiary       |  Czas   |   10.0s   | 5.0s-15.0s  |
| Scavenge Kill Multiplier On Incorrect Kill | Ile razy dłuższy cooldown będzie miał Scavenger po zabicu kogoś innego | Mnożnik |    3x     |  1.3x-5.0x  |