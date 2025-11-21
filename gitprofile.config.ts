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
            'https://img.col1n.fr/UAPVlarge.png',
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
    // credly: 'colin.palazzetti-rubera',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
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
  experiences: [
    {
      company: 'APUI - Avignon Université',
      position: 'Assistant numérique',
      from: 'February 2022',
      to: 'August 2024',
      companyLink: 'https://apui.univ-avignon.fr/',
    },
    {
      company: 'APUI - Avignon Université',
      position: 'Stage',
      from: 'June 2024',
      to: 'June 2024',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'CCNA 1',
      body: 'Introduction to Networks',
      year: '19/12/2023',
      link: 'https://www.credly.com/badges/1bd6a75e-fac6-4be6-b2e4-946664d2621c/public_url',
    },
    {
      name: 'PIX - Compétences numériques',
      body: 'Verification code : P-TYMXWXFD',
      year: '08/03/2022 (expires 08/03/2025)',
      link: 'https://app.pix.fr/verification-certificat',
    },
  ],
  educations: [
    {
      institution: 'Avignon Université',
      degree: 'Master en Informatique - Parcours Intelligence Artificielle',
      from: '2025',
      to: 'expected 2027',
    },
    {
      institution: 'Avignon Université',
      degree: 'Licence en Informatique',
      from: '2022',
      to: '2025',
    },
    {
      institution: 'Lycée Alphonse Benoît',
      degree: 'Baccalauréat : Maths - Numérique et Sciences Informatiques',
      from: '2019',
      to: '2022',
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
    username: 'col1n', // to hide blog section, keep it empty
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
    class="text-primary" href="https://github.com/arifszn/gitprofile"
    target="_blank"
    rel="noreferrer"
  >GitProfile</a>`,

  enablePWA: true,
};

export default CONFIG;
