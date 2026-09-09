import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Haunter.png')} alt="Icon" align="left" style={{height: 60}} />

# Haunter

### *Ukończ wszystkie swoje zadania bez zostania złapanym by ujawnić Impostorów!*

**Przynależność: Crew Afterlife (Pośmiertny)**

**Haunter** to pośmiertna rola dla Crewmate’a, która pojawia się po spotkaniu jako pół-przezroczysty gracz.\
Celem **Hauntera** jest wykonanie wszystkich swoich tasków, aby ujawnić Impostorów żywym graczom.\
Gdy zbliża się on do ukończenia wszystkich tasków, ustawione rolę mogą go kliknąć, co sprawi, że stanie się zwykłym duchem.

### Opcje

| Ustawienie                  |                                         Opis                                         |     Typ     | Domyślnie |             Wartość             |
|-----------------------------|:------------------------------------------------------------------------------------:|:-----------:|:---------:|:-------------------------------:|
| Tasks Left Before Clickable |            Ile zadań musi zostać Haunterowi zanim będzie można go kliknąć            |    Ilość    |     3     |               0-5               |
| Tasks Left Before Alerted   | Ile zadań musi zostać Haunterowi zanim jego lokalizacja zostanie ujawniona Impostorą |    Ilość    |     1     |              0-15               |
| Reveal Neutral Roles        |                  Czy rolę Neutralne zostają ujawione przez Hauntera                  | Przełącznik |    Nie    |            Tak / Nie            |
| Can Be Clicked By           |                           Jakie rolę mogą kliknąć Hauntera                           |   String    | Non-Crew  | Everyone / Non-Crew / Imps Only |