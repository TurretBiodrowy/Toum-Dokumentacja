import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Barkeeper.png')} alt="Icon" align="left" style={{height: 60}} />

# Roleblock Mechanics

| Ustawienie                         |                                            Opis                                             |     Typ     | Domyślnie |  Wartość   |
|------------------------------------|:-------------------------------------------------------------------------------------------:|:-----------:|:---------:|:----------:|
| Roleblock Affects Non-Role Actions |    Ustawia czy Roleblock blokuje także przycisk **Use** i **Report** (Tak jak **Hack**)     | Przełącznik |    Nie    | Tak / Nie  |
| Roleblock Duration                 |           Czas przez który gracz nie będzie mógł korzystać ze swoich umiejętności           |    Czas     |   15.0s   | 5.0s-30.0s |
| Invert Controls Of Roleblocked     |             Ustawia czy Roleblock także odwraca sterowanie (Tak jak **Drunk**)              | Przełącznik |    Tak    | Tak / Nie  |
| Grant Hangover                     | Ustawia czy gracz który został Roleblockowany będzie chwilowo odporny na kolejne blokowanie | Przełącznik |    Tak    | Tak / Nie  |
| ┗ Hangover Duration                |          Czas przez który gracz po Roleblocku będzie odporny na kolejne blokowanie          |    Czas     |    30s    |  15s-120s  |