import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Mody/DeadlyQuota.png')} alt="Icon" align="left" style={{height: 60}} />

# Deadly Quota

### *Zabij wystarczającą ilość graczy aby móc wygrać!*

**Typ: Passive (Pasywny)**

Gracz z modyfikatorem **Deadly Quota** będzie musiał zabić podaną ilość osób aby móc wygrać z resztą **Impostorów**.

### Opcje

| Ustawienie                          |                                         Opis                                          |     Typ     | Domyślnie |  Wartość  |
|-------------------------------------|:-------------------------------------------------------------------------------------:|:-----------:|:---------:|:---------:|
| Minimum Kill Qouta                  |         Minimalna ilość zabójstw które gracz z tym modyfikatorem musi wykonać         |    Ilość    |     2     |    1-5    |
| Maximum Kill Qouta                  |        Maksymalna ilość zabójstw które gracz z tym modyfikatorem musi wykonać         |    Ilość    |     4     |    1-5    |
| Meeting Kills Count Towards Quota   |      Ustawia czy zgadywanie roli będzie się liczyć do wymaganej ilości zabójstw       | Przełącznik |    Tak    | Tak / Nie |
| Temporary Shield Until Quota Is Met | Ustawia czy Impostor dostaje tarczę do czasu aż nie zabije wystarczającej ilości osób | Przełącznik |    Nie    | Tak / Nie |
| Remove Quota Upon Death             |            Ustawia czy wymaganie zabójstw jest usunięte po twojej śmierci             | Przełącznik |    Tak    | Tak / Nie |