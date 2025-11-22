// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ColinLeDev', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'QuentinGrnr/compte_personne',
          'ColinLeDev/yagpdb',
          'ColinLeDev/IFT3913',
          'ColinLeDev/compilateur',
          // 'ColinLeDev/compilateur',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Avignon Université : UEO/R',
          description:
            'Create a web platform to manage and display items, incorporating a system to acknowledge and progress through a predefined list of instances.',
          imageUrl:
            'https://univ-avignon.fr/wp-content/themes/avignon-universite/dist/images/logos/logo-white.svg',
          link: 'https://ueo.univ-avignon.fr/',
        },
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
      ],
    },
  },
  seo: {
    title: 'Colin PALAZZETTI RUBERA',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'colin-palazzetti-rubera',
    twitter: 'colinledev',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'colin.rba',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'col1n',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://www.col1n.fr',
    phone: '',
    email: 'colin@col1n.fr',
    credly: 'colin.palazzetti-rubera',
  },
  resume: {
    fileUrl:
      'https://cloud.col1n.fr/s/cv', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'HTML/CSS/JS',
    'PHP',
    'SQL',
    'Python',
    'C++',
    'Git',
    'Java (bases)',
  ],
  skillsPerso: [
    'HTML/CSS/JS',
    'PHP',
    'SQL',
    'nginx',
    'Docker (compose,swarm)',
    'Portainer',
    'Linux',
    'Git',
    'Symfony',
  ],
  experiences: [
    {
      from: 'May 2025',
      to: 'July 2025',
      title: 'Stage',
      description: 'Équipe Identité, Accès et Modern Workplace - Groupement Hospitalier de Territoire du Vaucluse (CH Avignon)', 
      descriptionLink: 'https://www.ch-avignon.fr/hopitaux-publics-de-vaucluse',
    },
    {
      from: 'June 2024',
      to: 'June 2024',
      title: 'Stage',
      description: 'APUI - Avignon Université',
      descriptionLink: 'https://apui.univ-avignon.fr/',
    },
    {
      from: 'February 2022',
      to: 'August 2024',
      title: 'Assistant numérique',
      description: 'APUI - Avignon Université',
      descriptionLink: 'https://apui.univ-avignon.fr/',
    },
  ],
  certifications: [
    {
      from: '19/02/2025',
      title: 'Languagecert English',
      titleLink: 'https://cloud.col1n.fr/s/2025_LanguageCert_C2',
      description: 'C2 (Listening, Reading)',
    },
    {
      from: '19/12/2023',
      title: 'CCNA 1',
      titleLink: 'https://www.credly.com/badges/1bd6a75e-fac6-4be6-b2e4-946664d2621c/public_url',
      description: 'Introduction to Networks',
    },
    {
      from: '08/03/2022 (expires 08/03/2025)',
      title: 'PIX - Compétences numériques',
      titleLink: 'https://app.pix.fr/verification-certificat',
      description: 'Verification code : P-TYMXWXFD',
    },
    {
      from: '03/2022',
      title: 'Cambridge English',
      titleLink: 'https://cloud.col1n.fr/s/2022_cambridge_B2',
      description: 'B2 First (FCE)',
    },
  ],
  educations: [
    {
      from: '2025',
      to: 'expected 2027',
      title: 'Graduate in Computer Science',
      description: 'Avignon Université',
      descriptionLink: 'https://www.univ-avignon.fr/',
    },
    {
      from: '2022',
      to: '2025',
      title: 'Undergraduate in Computer Science',
      description: 'Avignon Université',
      descriptionLink: 'https://www.univ-avignon.fr/',
    },
    {
      from: 'Sept. 2024',
      to: 'Dec. 2024',
      title: 'Exchange student in Computer Science',
      description: 'Université de Montréal',
      descriptionLink: 'https://diro.umontreal.ca/',
    },
    {
      from: '2019',
      to: '2022',
      title: 'Baccalauréat : Maths - Numérique et Sciences Informatiques',
      description: 'Lycée Alphonse Benoît',
    },
  ],
  benevolats: [
    {
      institution: 'CERI - Avignon Université',
      title: 'Représentant des étudiants au Conseil de perfectionnement',
      from: 'Sept. 2022',
      to: 'present',
      link: 'https://ceri.univ-avignon.fr/presentation-2/#:~:text=le%20Conseil%20de%20Perfectionnement%20(2%20fois%20par%20an)%20qui%20a%20pour%20objectif%20le%20suivi%20de%20la%20discipline%20et%20des%20m%C3%A9tiers%2C%20des%20poursuites%20d%E2%80%99%C3%A9tude%20et%20de%20l%E2%80%99insertion%20professionnelle%20des%20%C3%A9tudiants%2C%20ainsi%20que%20la%20vie%20des%20formations%20d%C3%A9livr%C3%A9es%20au%20sein%20du%20CERI',
      companyLink: 'https://ceri.univ-avignon.fr/',
    },
    {
      institution: 'CERI - Avignon Université',
      title: 'Élu étudiant au Conseil de la composante',
      from: 'Mars 2024',
      to: 'Mars 2026',
      link: 'https://ceri.univ-avignon.fr/presentation-2/#:~:text=Le%20Conseil%20du%20CERI%20(1%20par%20mois)%20qui%20est%20le%20conseil%20de%20la%20composante%20qui%20traite%20de%20la%20vie%20p%C3%A9dagogique%20et%20de%20recherche%20au%20sein%20du%20CERI',
      companyLink: 'https://ceri.univ-avignon.fr/',
    },
    {
      institution: 'Journées Portes Ouvertes - CERI - Avignon Université',
      title: 'Présentation des formations et du batiment aux futurs étudiants et leurs familles',
      from: '1 fev. 2025',
      link: 'https://ceri.univ-avignon.fr/journees-portes-ouvertes-2025/',
      // to: 'mars 2026',
    },
    {
      institution: 'Forum des Études Supérieures - Avignon Université',
      title: 'Staff (responsable accueil des visiteurs, orientation)',
      from: '25 jan. 2025',
      link: 'https://univ-avignon.fr/forum-des-etudes-superieures/',
      // to: 'mars 2026',
    },
    {
      institution: 'Journées Portes Ouvertes - CERI - Avignon Université',
      title: 'Présentation des formations et du batiment aux futurs étudiants et leurs familles',
      from: '3 fev. 2025',
      link: 'https://ceri.univ-avignon.fr/jpo-journee-portes-ouvertes-le-3-fevrier-2024/',
      // to: 'mars 2026',
    },
    {
      institution: 'Forum des Études Supérieures - Avignon Université',
      title: 'Staff (accueil des visiteurs, orientation)',
      from: '27 jan. 2024',
      // to: 'mars 2026',
      link: 'https://univ-avignon.fr/forum-des-etudes-superieures/',
    },
    {
      institution: 'Forum des Études Supérieures - Avignon Université',
      title: 'Présentation des formations CMI et Licence Informatique',
      from: '4 fev. 2023',
      // to: 'mars 2026',
      link: 'https://ceri.univ-avignon.fr/formations/cursus-master-ingenierie-en-informatique/',
      companyLink: 'https://univ-avignon.fr/forum-des-etudes-superieures/',
    },
    {
      institution: 'Association Dire et Lire – École Lucie Aubrac',
      title: 'Participation à la buvette (service et encaissement), Vente des livres (scanner, encaissement : espèces, chèques, CB). \nAssistances ponctuelles pour la partie informatique depuis 2019',
      from: '2013',
      to: '2019',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '3907858',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'sunset',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `From <a 
    class="text-primary" href="https://github.col1n.fr/gitprofile"
    target="_blank"
    rel="noreferrer"
  >GitProfile (fork)</a>`,

  enablePWA: true,
};

export default CONFIG;
