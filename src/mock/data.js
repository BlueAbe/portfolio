import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Andrzej Jaworski - Portfolio', // e.g: 'Name | Developer'
  lang: 'pl', // e.g: en, es, fr, jp
  description: 'Welcome to my website, I hope We can make some deal.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Cześć, nazywam się',
  name: 'Andrzej Jaworski',
  subtitle: 'może uda się nam stworzyć coś wielkiego !',
  cta: 'Zobacz dalej',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://server672908.nazwa.pl/cv.jpg', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'mojadebnica.jpg',
    title: 'mojadebnica.pl',
    info: 'Mój pierwszy projekt prowadzony od 2008 roku na bazie Wordpress\'a. Oczywiście mam do niego szczególny sentyment, choć trzeba przyznać, że lata modyfikacji wykonanych przez niedoświadczonego programistę-amatora uczyniły jego kod "nieco skomplikowanym."',
    info2: 'Witryna postawiona na CMS Wordpress.',
    url: 'http://mojadebnica.pl/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'villa.jpg',
    title: 'villa-rowena.netlify.com',
    info: 'Estetyczna i przejrzysta stona nadmorskiego pensjonatu. Wyposarzona w bajery niezbędne do prowadzenia biznesu',
    info2: 'Witryna typu "Static Page" z kilkoma podstronami',
    url: 'https://villa-rowena.netlify.app/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'turnusy.jpg',
    title: 'turnusy.netlify.com',
    info: 'Strona wykonana w oparciu o kurs "ADVANCED CSS AND SASS" autorstwa Jonas\'a Schmedtmann\'a',
    info2: 'Witryna typu "Landing Page".',
    url: 'https://turnusy.netlify.app/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'andrzej.jan.jaworski@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/andrzej.jaworski.35762',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/BlueAbe',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
