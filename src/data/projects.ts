import Countries from '../assets/work/countries.svg';
import Report from '../assets/work/Report.svg';
import Website from '../assets/work/Website.svg';
import Bulls from '../assets/work/BullCow.svg';
import Momentum from '../assets/work/Momentum.svg';
import ArtQuiz from '../assets/work/ArtQuiz.svg';

export const projects = [
  {
    id: 'countries',
    name: 'rest-countries',
    base_tech: 'vue',
    svg: Countries,
    about: `How much do you know about the countries you can name?
    Browse the world and choose your next holiday destination.`,
    tech_stack: 'HTML, CSS, Vue 3, vue-router, Tailwind CSS, Vite, npm, responsive',
    url: 'https://zeexas.github.io/rest-countries/'
  },
  {
    id: 'report',
    name: 'report',
    base_tech: 'react / nest',
    svg: Report,
    about: `Full-stack web application prototype for financial company.
    The application receives the data from database to display the reports on the screen with possibility to export to MS Excel.
    It also has the authentication functionality`,
    tech_stack: 'React, react-router-dom, TypeScript, Tailwind CSS, Webpack, Nest.js, passport, Prisma, PostgreSQL, REST, yarn, responsive',
    url: null
  },
  {
    id: 'website',
    name: 'website',
    base_tech: 'react',
    svg: Website,
    about: `This website you are browsing now is a basic project for my portfolio. Inspired by Sharlee`,
    tech_stack: 'HTML, CSS, React, react-router-dom, Redux Toolkit, Tailwind CSS, framer-motion, Vite, yarn, responsive',
    url: null
  },
  {
    id: 'art',
    name: 'art-quiz',
    base_tech: 'vanilla',
    svg: ArtQuiz,
    about: `Hundreds of world masterpieces are collected in this game, where you
    can test you knowledge in art. And don't forget to
    check out the settings.`,
    tech_stack: 'HTML, CSS, JavaScript, Webpack, npm',
    url: 'https://rolling-scopes-school.github.io/zeexas-JSFE2021Q3/art-quiz/'
  },
  {
    id: 'momentum',
    name: 'momentum',
    base_tech: 'vanilla',
    svg: Momentum,
    about: 'This is a clone of the popular Google Chrome extension Momentum (not exact but kind of)',
    tech_stack: 'HTML, CSS, JavaScript',
    url: 'https://rolling-scopes-school.github.io/zeexas-JSFE2021Q3/momentum/'
  },
  {
    id: 'bulls',
    name: 'bulls and cows',
    base_tech: 'vanilla',
    svg: Bulls,
    about: `I love games, challenges, numbers and "Bulls and Cows" was our favorite game at school.
    So, try to find the secret number and beat your own record.`,
    tech_stack: 'HTML, CSS, JavaScript',
    url: 'https://zeexas.github.io/Bulls_Cows/'
  },
];
