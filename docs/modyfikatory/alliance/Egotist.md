import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Mody/Egotist.png')} alt="Icon" align="left" style={{height: 60}} />

# Egotist

### *Zdradź Crewmate'ów aby nakarmić swoje ego!*

**Egotist** to modyfikator tylko dla **Crewmate**'ów.\
**Crewmate** z tym modyfikatorem będzie zmuszony grać ze złymi graczami (**Impostorami**/**Neutralami**), i nie będzie mógł już wygrać z resztą **Crewmate**'ów.\
**Egotist** opuści gre wygranym gdy po spotkaniu nie będą żyli żadni **Crewmate**'ci.

**Egotist** **Mayor** oraz **Snitch** będą ujawnieni dla złych graczy jako **Egotist**.

### Opcje

| Ustawienie                                   |                                                                                Opis                                                                                 |     Typ     | Domyślnie |    Wartość    |
|----------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------:|:---------:|:-------------:|
| Egotist Must Stay Alive To Win               |                                       Ustawia czy Egotist musi przeżyć do momentu gdy wszyscy **Crewmate**'ci umrą aby wygrać                                       | Przełącznik |    Nie    |   Tak / Nie   |
| Egotist Speeds Up The Game                   | Ustawia czy Egotist będzie przyśpieszał grę (Zwiększał prędkość graczy, zmniejszał cooldowny) tak długo jak żyje. Adrenalina Egotisty resetuje się po jego śmierci. | Przełącznik |    Tak    |   Nie / Tak   |
| ┣ Rounds Required For Speed/Cooldown Changes |                                                                Co ile rund gra będzie przyśpieszona                                                                 |    Ilość    |     1     |      1-5      |
| ┣ Speed Addition                             |                                                         Ile razy szybszy gracze stają się co przyśpieszenie                                                         |   Mnożnik   |  0.100x   | 0.000x-1.500x |
| ┗ Cooldown Reduction                         |                                                        O ile sekund krótsze będą cooldowny co przyśpieszenie                                                        |    Czas     |   1.50s   |  0.10s-5.00s  |