import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Ambassador.png')} alt="Icon" align="left" style={{height: 60}} />

# Ambassador

### *Poprowadź Impostorów do wygranej!*

**Przynależność: Imp Power (Silny)**

**Ambassador** na spotkaniu może zmienić swoją rolę, bądź rolę swojego partnera na inną jeśli osoba zmieniana będzie miała wystarczająco zabójstw.\
**Ambassador** może zmienić rolę tylko jednego Impostora na spotkaniu, i będzie musiał odczekać przynajmniej jedno spotkanie zanim będzie mógł znowu zmienić rolę.

**Imp Killing** nie mogą zostać **Imp Power**.\
**Imp Concealing/Support** nie mogą zostać **Imp Killing/Power**\
**Imp Power** może zostać jakąkolwiek przynależnością Impostora.

### Umiejętności

|                                            Przycisk                                            | Umiejętność |                               Opis                               |           Użycie            |
|:----------------------------------------------------------------------------------------------:|:-----------:|:----------------------------------------------------------------:|:---------------------------:|
| <img src={useBaseUrl('/img/PrzyciskiImp/AmbaRetrain.png')} alt="Button" style={{width: 50}} /> | **Retrain** | Na spotkaniu pozwala zamienić swoją rolę, bądź partnera na inną. | Na graczu podczas spotkania |

### Opcje

| Ustawienie                                        |                                   Opis                                    |     Typ     | Domyślnie |  Wartość  |
|---------------------------------------------------|:-------------------------------------------------------------------------:|:-----------:|:---------:|:---------:|
| Max Retrains Available                            |      Ile razy na grę Ambassador może zmienić czyjąś, bądź swoją role      |    Ilość    |     2     |    1-3    |
| Retrain Requires Confirmation                     |          Ustawia czy zmiana roli wymaga potwierdzenia od gracza           | Przełącznik |    Tak    | Tak / Nie |
| Kills Needed By Ambassador Or Teammate To Retrain | Ile zabójstw potrzebuje Ambassador bądź jego partner aby móc zmienić rolę |    Ilość    |     2     |    0-4    |
| Round In Which Retraining Is Possible             |      Po którym spotkaniu Ambassador będzie mógł zmieniać innym role       |    Ilość    |     2     |    1-5    |
| Rounds Needed To Retrain Again                    |             Co ile spotkań Ambassador może zmienić komuś rolę             |    Ilość    |     2     |    1-5    |