// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  roleSidebar: [
    {
      type: 'doc',
      label: 'O Rolach',
      id: 'role/O Rolach',
    },
    {
      type: 'category',
      label: 'Crewmate\'ci',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Crewmate\'ci',
        description: 'Crewmate\'ci to główna frakcja gry. Aby wygrać, muszą wykonać wszystkie przydzielone im zadania lub pozbyć się wszystkich Impostorów oraz Neutral Killerów. Crewmate\'ci dzielą się na następujące przynależności: Afterlife, Investigative, Protective, Killing, Power oraz Support.',
        image: 'img/ikony/Crewmate.png',
      },
      items:
          [
            {
              type: 'category',
              label: 'Crew Afterlife',
              collapsed: true,
              link: {
                type: 'generated-index',
                title: 'Crew Afterlife',
                description: 'Role Afterlife (Pośmiertne) dają pierwszemu poległemu Crewmate\'owi drugą szansę.',
              },
              items:
                  [
                   'role/crewmate/afterlife/Guardian Angel-Vanilla',
                   'role/crewmate/afterlife/Haunter',
                  ],
            },
            {
              type: 'category',
              label: 'Crew Investigative',
              collapsed: true,
              link: {
                type: 'generated-index',
                title: 'Crew Investigative',
                description: 'Celem ról Investigative (Śledczych) jest zbieranie informacji na temat innych graczy. Mogą oni używać swoich umiejętności, aby ustalić prawdziwe zamiary pozostałych, pomagając Crewmate\'om wyeliminować złych graczy. ',
              },
              items:
                  [
                    'role/crewmate/investigative/Aurial',
                    'role/crewmate/investigative/Detective-Vanilla',
                    'role/crewmate/investigative/Forensic',
                    'role/crewmate/investigative/Investigator',
                    'role/crewmate/investigative/Lookout',
                    'role/crewmate/investigative/Medium',
                    'role/crewmate/investigative/Mystic',
                    'role/crewmate/investigative/Seer',
                    'role/crewmate/investigative/Snitch',
                    'role/crewmate/investigative/Sonar',
                    'role/crewmate/investigative/Spy',
                    'role/crewmate/investigative/Trapper',
                  ],
            },
            {
              type: 'category',
              label: 'Crew Killing',
              collapsed: true,
              link: {
                type: 'generated-index',
                title: 'Crew Killing',
                description: 'Celem ról Killing (Zabijających) jest pomóc reszcie Crewmate\'ów pozbyć się złych graczy poprzez zabicie ich.',
              },
              items:
                  [
                    'role/crewmate/killing/Deputy',
                    'role/crewmate/killing/Hunter',
                    'role/crewmate/killing/Sheriff',
                    'role/crewmate/killing/Officer',
                    'role/crewmate/killing/Veteran',
                    'role/crewmate/killing/Vigilante',
                  ],
            },
            {
              type: 'category',
              label: 'Crew Power',
              collapsed: true,
              link: {
                type: 'generated-index',
                title: 'Crew Power',
                description: 'Celem ról Power (Wpływowych) jest poprowadzenie Crewmate\'ów do wygranej poprzez znacznie zwiększoną możliwość kontroli na spotkaniach.',
              },
              items:
                  [
                    'role/crewmate/power/Jailor',
                    'role/crewmate/power/Monarch',
                    'role/crewmate/power/Politician I Mayor',
                    'role/crewmate/power/Prosecutor',
                    'role/crewmate/power/Swapper',
                    'role/crewmate/power/Time Lord',
                  ],
            },
            {
              type: 'category',
              label: 'Crew Protective',
              collapsed: true,
              link: {
                type: 'generated-index',
                title: 'Crew Prostective',
                description: 'Celem ról Protective (Ochronnych) jest ochronienie pozostałych Crewmate\'ów oraz siebie przed zostaniem zabitym przez złych graczy.',
              },
              items:
                  [
                    'role/crewmate/protective/Altruist',
                    'role/crewmate/protective/Cleric',
                    'role/crewmate/protective/Medic',
                    'role/crewmate/protective/Mirrorcaster',
                    'role/crewmate/protective/Oracle',
                    'role/crewmate/protective/Warden',
                  ],
            },
            {
              type: 'category',
              label: 'Crew Support',
              collapsed: true,
              link: {
                type: 'generated-index',
                title: 'Crew Support',
                description: 'Celem ról Support (Wsparcia) jest pomoc reszcie Crewmate\'ów w zdobyciu mniejszych, lecz dalej przydatnych informacji, bądź lekkiej manipulacji gry.',
              },
              items:
                  [
                    'role/crewmate/support/Barkeeper',
                    'role/crewmate/support/Engineer',  
                    'role/crewmate/support/Imitator',
                    'role/crewmate/support/Plumber',
                    'role/crewmate/support/Scientist-Vanilla',  
                    'role/crewmate/support/Sentry',
                    'role/crewmate/support/Transporter',
                  ],
            },
          ],
    },
    {
      type: 'category',
      label: 'Impostorzy',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Impostorzy',
        description: 'Impostorzy to główna zła frakcja gry. Aby wygrać, muszą zabić wszystkich pozostałych graczy. W tym celu mają dostęp do umiejętności Kill która pozwala zabić jednego gracza co parenaście sekund, mogą także sabotować ważne systemy, bądź drzwi na mapie aby rozproszyć Crewmate\'ów. Impostorzy dzielą się na następujące przynależności: Concealing, Killing, Power, oraz Support.',
        image: 'img/ikony/Impostor.png',
      },
      items:
          [
            {
              type: 'category',
              label: 'Imp Concealing',
              collapsed: true,
              link: {
                type: 'generated-index',
                title: 'Imp Concealing',
                description: 'Celem ról Concealing (Skrywających) jest schowanie wszystkich dowodów po zabójstwie oraz zmylenie innych graczy.',
              },
              items:
                  [
                    'role/impostor/concealing/Eclipsal',
                    'role/impostor/concealing/Escapist',
                    'role/impostor/concealing/Grenadier',
                    'role/impostor/concealing/Morphling',
                    'role/impostor/concealing/Shapeshifter-Vanilla',  
                    'role/impostor/concealing/Swooper',
                    'role/impostor/concealing/Venerer',
                  ],
            },
            {
              type: 'category',
              label: 'Imp Killing',
              collapsed: true,
              link: {
                type: 'generated-index',
                title: 'Imp Killing',
                description: 'Celem ról Killing (Zabijających) jest pozbywanie się innych graczy w bardziej efektywne sposoby niż inni Impostorzy. Mają oni specjalne umiejętności które przy dobrym wykorzystaniu, pozwalają na zabicie wielu graczy naraz',
              },
              items:
                  [
                    'role/impostor/killing/Ambusher',
                    'role/impostor/killing/Bomber',
                    'role/impostor/killing/Parasite',
                    'role/impostor/killing/Scavenger',
                    'role/impostor/killing/Viper-Vanilla',  
                    'role/impostor/killing/Warlock',
                  ],
            },
            {
              type: 'category',
              label: 'Imp Power',
              collapsed: true,
              link: {
                type: 'generated-index',
                title: 'Imp Power',
                description: 'Celem ról Power (Silnych) jest poprowadzenie Impostorów do wygranej za pomocą swoich znacznie silniejszych umiejętności.',
              },
              items:
                  [
                    'role/impostor/power/Ambassador',
                    'role/impostor/power/Herbalist',
                    'role/impostor/power/Puppeteer',
                    'role/impostor/power/Spellslinger',
                    'role/impostor/power/Traitor',
                  ],
            },
            {
              type: 'category',
              label: 'Imp Support',
              collapsed: true,
              link: {
                type: 'generated-index',
                title: 'Imp Support',
                description: 'Celem ról Support (Wsparcia) jest pomoc reszcie Impostorów zmanipulować grę na korzyść Impostorów.',
              },
              items:
                  [
                    'role/impostor/support/Blackmailer',
                    'role/impostor/support/Bootlegger',  
                    'role/impostor/support/Hypnotist',
                    'role/impostor/support/Janitor',
                    'role/impostor/support/Miner',
                    'role/impostor/support/Undertaker',
                  ],
            },
          ],
    },
    {
      type: 'category',
      label: 'Neutralni',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Neutralni',
        description: 'Neutralni to dodatkowa frakcja w grze która przeważnie musi działać na własną rękę, aby wygrać. Nie grają z Crewmate\'ami ani Impostorami. Role Neutralne dzielą się na następujące przynależności: Afterlife, Benign, Evil, Killing, oraz Outlier.',
        image: 'img/ikony/Neutral.png',
      },
      items:
          [
            {
              type: 'category',
              label: 'Neut Afterlife',
              collapsed: true,
              link: {
                type: 'generated-index',
                title: 'Neut Afterlife',
                description: 'Role Afterlife (Pośmiertne) dają pierwszemu poległemu Neutralowi drugą szansę.',
              },
              items:
                  [
                    'role/neutral/afterlife/Spectre',
                  ],
            },
            {
              type: 'category',
              label: 'Neut Benign',
              collapsed: true,
              link: {
                type: 'generated-index',
                title: 'Neut Benign',
                description: 'Role Benign (Nieszkodliwe) zazwyczaj nie mają umiejętności które znacznie wpływają na bieg gry, a ich celem jest przeżyć.',
              },
              items:
                  [
                    'role/neutral/benign/Amnesiac',
                    'role/neutral/benign/Fairy',
                    'role/neutral/benign/Mercenary',
                    'role/neutral/benign/Survivor',
                  ],
            },
            {
              type: 'category',
              label: 'Neut Evil',
              collapsed: true,
              link: {
                type: 'generated-index',
                title: 'Neut Evil',
                description: 'Role Evil (Szkodliwe) mają swój własny, unikalny sposób na zwycięstwo. Po osiągnięciu go, mogą zakończyć grę',
              },
              items:
                  [
                    'role/neutral/evil/Doomsayer',
                    'role/neutral/evil/Executioner',
                    'role/neutral/evil/Jester',
                  ],
            },
            {
              type: 'category',
              label: 'Neut Killing',
              collapsed: true,
              link: {
                type: 'generated-index',
                title: 'Neut Killing',
                description: 'Celem ról Killing (Zabijających) jest pozbycie się wszystkich innych graczy. Ponieważ grają oni zazwyczaj sami, mają mocniejsze umiejętności które pozwalają im osiągnąć ich cel efektywniej',
              },
              items:
                  [
                    'role/neutral/killing/Arsonist',
                    'role/neutral/killing/Glitch',
                    'role/neutral/killing/Juggernaut',
                    'role/neutral/killing/Medusa',
                    'role/neutral/killing/Plaguebearer I Pestilence',
                    'role/neutral/killing/Vampire',
                    'role/neutral/killing/Werewolf',
                  ],
            },
            {
              type: 'category',
              label: 'Neut Outlier',
              collapsed: true,
              link: {
                type: 'generated-index',
                title: 'Neut Outlier',
                description: 'Role Outlier (Odrzutcy) mają swój własny, unikalny sposób na zwycięstwo. Po osiągnięciu go, opuszczają grę wygranym',
              },
              items:
                  [
                    'role/neutral/outlier/Chef',
                    'role/neutral/outlier/Inquisitor',
                  ],
            },
          ],
    },
  ],
  modyfikatorySidebar: [
      {
          type: 'doc',
          label: 'O Modyfikatorach',
          id: 'modyfikatory/O Modyfikatorach',
      },
    {
      type: 'category',
      label: 'Alliances',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'Alliances',
        description: 'Modyfikatory z kategorii Alliances zmieniają graczu jego domyślną frakcję na inną, sprawiając, że będzie on musiał teraz wygrać w inny sposób. ',
      },
      items:
          [
            'modyfikatory/alliance/Crewpostor',
            'modyfikatory/alliance/Egotist',
            'modyfikatory/alliance/Lovers',
          ]
    },
    {
      type: 'category',
      label: 'Assailant',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'Assailant',
        description: 'Modyfikatory z kategorii Assailant mogą być przyznane dla Impostorów oraz Neutralnych Zabójców.',
      },
      items:
          [
            'modyfikatory/assailant/Assassin', 
            'modyfikatory/assailant/Double Shot',
            'modyfikatory/assailant/Overclocker',
          ]
    },
    {
      type: 'category',
      label: 'Crewmate',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'Crewmate',
        description: 'Modyfikatory z kategorii Crewmate mogą być przyznane tylko dla Crewmate\'ów. Zazwyczaj dając im umiejętność która aktywuje się odrazu po śmierci, ale niektóre dają im dodatkowe umiejętności które pomogą w znalezieniu Impostorów.',
      },
      items:
          [
            'modyfikatory/crewmate/Aftermath',
            'modyfikatory/crewmate/Bait',
            'modyfikatory/crewmate/Celebrity',
            'modyfikatory/crewmate/Diseased',
            'modyfikatory/crewmate/Frosty',
            'modyfikatory/crewmate/Investigator',
            'modyfikatory/crewmate/Multitasker',
            'modyfikatory/crewmate/Noisemaker',
            'modyfikatory/crewmate/Operative',
            'modyfikatory/crewmate/Rotting',
            'modyfikatory/crewmate/Scientist',
            'modyfikatory/crewmate/Scout',
            'modyfikatory/crewmate/Spy',
            'modyfikatory/crewmate/Taskmaster',
            'modyfikatory/crewmate/Torch',
          ]
    },
    {
      type: 'category',
      label: 'Impostor',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'Impostor',
        description: 'Modyfikatory z kategorii Impostor mogą być przyznane tylko dla Impostorów. Mogą one pomóc, bądź przeszkodzić Impostorom w wygraniu.',
      },
      items:
          [
            'modyfikatory/impostor/Circumvent',
            'modyfikatory/impostor/Deadly Quota',
            'modyfikatory/impostor/Disperser',
            'modyfikatory/impostor/Saboteur',
            'modyfikatory/impostor/Telepath',
            'modyfikatory/impostor/Underdog',
          ]
    },
    {
      type: 'category',
      label: 'Universal',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'Universal',
        description: 'OPIS UNIVERSAL MODIFIERÓW TUTAJ.',
      },
      items:
          [
            'modyfikatory/universal/Button Barry',
            'modyfikatory/universal/Flash',
            'modyfikatory/universal/Giant',
            'modyfikatory/universal/Immovable',
            'modyfikatory/universal/Mini',
            'modyfikatory/universal/Radar',
            'modyfikatory/universal/Satellite',
            'modyfikatory/universal/Shy',
            'modyfikatory/universal/Sixth Sense',
            'modyfikatory/universal/Sleuth',
            'modyfikatory/universal/Tiebreaker',
          ]
    },
  ],
    ustawieniaSidebar: [
        {
            type: 'category',
            label: 'Ogólne',
            collapsed: false,
            link: {
                type: 'generated-index',
                title: 'Ogólne',
                description: 'OPIS Ustawień tutaj.',
            },
            items:
                [
                    'ustawienia/ogolne/Host-Specific Options',
                    'ustawienia/ogolne/Vanilla Tweaks',
                    'ustawienia/ogolne/Roleblock Mechanics',
                    'ustawienia/ogolne/Game Mechanics',
                    'ustawienia/ogolne/Round Start Options',
                    'ustawienia/ogolne/General',
                    'ustawienia/ogolne/Role Settings',
                    'ustawienia/ogolne/Postmortem Options',
                    'ustawienia/ogolne/End Game Timer',
                ]
        },
        {
            type: 'category',
            label: 'Mapy',
            collapsed: false,
            link: {
                type: 'generated-index',
                title: 'Mapy',
                description: 'OPIS Ustawień tutaj.',
            },
            items:
                [
                    'ustawienia/mapy/Better Maps',
                    'ustawienia/mapy/Advanced Sabo Utils',
                    'ustawienia/mapy/Better Skeld',
                    'ustawienia/mapy/Better Mira HQ',
                    'ustawienia/mapy/Better Polus',
                    'ustawienia/mapy/Better Airship',
                    'ustawienia/mapy/Better The Fungle',
                ]
        },
    ],
}
export default sidebars;