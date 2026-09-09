import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Morphling.png')} alt="Icon" align="left" style={{height: 60}} />

# Morphling

### *Zamień się w innego gracza!*

**Przynależność: Imp Concealing (Skrywający)**

**Morphling** może pobrać próbkę od innego gracza.\
Gdy pobierze już próbkę, będzie mógł zmienić się w tego gracza na parę sekund.

### Umiejętności

|                                              Przycisk                                              | Umiejętność |                               Opis                               |  Użycie   |
|:--------------------------------------------------------------------------------------------------:|:-----------:|:----------------------------------------------------------------:|:---------:|
| <img src={useBaseUrl('/img/PrzyciskiImp/MorphlingSample.png')} alt="Button" style={{width: 50}} /> | **Sample**  |           Pobiera próbkę z wybranego gracza na później           | Na graczu |
| <img src={useBaseUrl('/img/PrzyciskiImp/MorphlingMorph.png')} alt="Button" style={{width: 50}} />  |  **Morph**  | Pozwala zamienić się w wybranego wcześniej gracza na parę sekund | Bez celu  |

### Opcje

| Ustawienie           |                            Opis                            |  Typ   | Domyślnie |             Wartość              |
|----------------------|:----------------------------------------------------------:|:------:|:---------:|:--------------------------------:|
| Samples Per Game     |         Ile razy na grę Morphling może użyć Sample         | Ilość  |     ∞     |             1-15 / ∞             |
| Morph Uses Per Round |        Ile razy na rundę Morphling może użyć Morph         | Ilość  |     ∞     |             1-10 / ∞             |
| Morph Cooldown       | Czas który Morphling musi odczekać pomiędzy użyciami Morph |  Czas  |   25.0s   |           5.0s-120.0s            |
| Morph Duration       |           Czas przez który Morph będzie aktywny            |  Czas  |    10s    |              5s-15s              |
| Morphling Can Vent   |        Decyduje kiedy Morphling może używać ventów         | String |  Always   | Always / Unless Morphed / Always |