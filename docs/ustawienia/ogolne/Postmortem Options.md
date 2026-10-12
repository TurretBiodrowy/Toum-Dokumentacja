import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Haunter.png')} alt="Icon" align="left" style={{height: 60}} />

# Host-Specific Options

| Ustawienie                       |                                         Opis                                         |     Typ     |      Domyślnie      |                        Wartość                        |
|----------------------------------|:------------------------------------------------------------------------------------:|:-----------:|:-------------------:|:-----------------------------------------------------:|
| The Dead Know Players            |                         Decyduje czy duchy widzą rolę graczy                         | Przełącznik |         Tak         |                       Tak / Nie                       |
| The Dead See Votes               |                        Decyduje czy duchy widzą głosy graczy                         | Przełącznik |         Tak         |                       Tak / Nie                       |
| The Dead See Private Chat        |           Decyduje czy duchy widzą wiadomości graczy na prywatnych czatach           |   String    | Disabled Upon Death | Disabled Upon Death / In Meetings / Always / Disabled |
| Haunt (Follow) Mode              | Decyduje czy duchy mają dostęp do Haunt (możliwości automatycznego śledzenia gracza) |   String    | Disabled Upon Death |        Disabled Upon Death / Always / Disabled        |
| Temporarily Hide Chat Upon Death |           Decyduje czy chat jest ukryty do pierwszego spotkania po śmierci           | Przełącznik |         Tak         |                       Tak / Nie                       |
| See Task Trackers When Dead      |              Decyduje czy duchy widzą ilość wykonanych tasków u graczy               | Przełącznik |         Tak         |                       Tak / Nie                       |