import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('/img/Ikony/Role/Noisemaker.png')} alt="Icon" align="left" style={{height: 60}} />

# Noisemaker

### *Powiadom wszystkich graczy o miejscu twojej śmierci!*

**Typ: Postmortem (Pośmiertny)**

Zabicie gracza z modyfikatorem **Noisemaker** spowoduje, że każdy gracz dostanie strzałkę w stronę ciała.

### Opcje

| Ustawienie                     |                                                          Opis                                                          |     Typ     | Domyślnie |  Wartość  |
|--------------------------------|:----------------------------------------------------------------------------------------------------------------------:|:-----------:|:---------:|:---------:|
| Impostors Get Alert            |                           Ustawia czy Impostorzy będą widzieć strzałkę do ciała Noisemakera                            | Przełącznik |    Tak    | Tak / Nie |
| Neutral Killers Get Alert      |                        Ustawia czy Neutralni Zabójcy będą widzieć strzałkę do ciała Noisemakera                        | Przełącznik |    Tak    | Tak / Nie |
| Comms Sabotage Prevents Alert  |                   Ustawia czy sabotaż komunikacji wyłączy w pełni ostrzeżenie o zabiciu Noisemakera                    | Przełącznik |    Nie    | Tak / Nie |
| Only Triggers If A Body Exists | Ustawia czy ostrzeżenie będzie aktywne w momencie gdy ciało nie będzie już istnieć (np. Zabicie przez Soul Collectora) | Przełącznik |    Tak    | Tak / Nie |
| Alert Duration                 |                               Przez ile sekund będzie widoczna strzałka do twojego ciała                               |    Czas     |    5s     |  1s-20s   |