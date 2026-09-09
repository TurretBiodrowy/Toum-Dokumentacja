import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Detective.png')} alt="Icon" align="left" style={{height: 60}} />

# Detective

### *Zbierz informację, rozwiąż morderstwa!*

**Przynależność: Crew Investigative (Śledczy)**

**Detective** za każdym razem gdy zostanie zgłoszone ciało, będzie miał dodaną sprawę do swoich notatek.\
Może on potem wybrać jedną sprawę i przepytać parę graczy, aby dowiedzieć sie gdzie byli podczas zabójstwa.

### Umiejętności

| Przycisk                                                                                             |   Umiejętność   |                                     Opis                                      |  Użycie   |
|------------------------------------------------------------------------------------------------------|:---------------:|:-----------------------------------------------------------------------------:|:---------:|
| <img src={useBaseUrl('/img/PrzyciskiCrew/DetInterrogate.png')} alt="Przycisk" style={{width: 50}} /> | **Interrogate** |    Pozwala przepytać gracza, dowiadując się gdzie był w momencie zabójstwa    | Na graczu |
| <img src={useBaseUrl('/img/PrzyciskiCrew/DetNotes.png')} alt="Przycisk" style={{width: 50}} />       |    **Notes**    | Pokazuje wszystkie zebrane informacje. Może być użyte także podczas spotkania | Bez celu  |

### Opcje

| Ustawienie        |                       Opis                       |  Typ  | Domyślnie | Wartość |
|-------------------|:------------------------------------------------:|:-----:|:---------:|:-------:|
| Suspects Per Case | Ile osób na jedno ciało może przepytać Detective | Ilość |     3     |   2-4   |