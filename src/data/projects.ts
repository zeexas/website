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
    about_ru: `Как много Вы знаете о странах, которые можете назвать?
    Исследуйте мир и выберите свой пункт назначения на следующий отпуск.`,
    tech_stack: 'HTML, CSS, Vue 3, vue-router, Tailwind CSS, Vite, npm, responsive',
    url: 'https://zeexas.github.io/rest-countries/',
    code: 'https://github.com/zeexas/rest-countries',
  },
  {
    id: 'report',
    name: 'report',
    base_tech: 'react / nest',
    svg: Report,
    about: `Full-stack web application prototype for financial company.
    The application receives the data from database to display the reports on the screen with possibility to export to MS Excel.
    It also has the authentication functionality.`,
    about_ru: `Прототип full-stack веб приложения для финансовой компании.
    Приложение получает сведения из базы данных, выводит их в виде регуляторной отчетности с возможностью экспортировать в Excel.
    Также в наличии функциональность аутентификации пользователя.`,
    tech_stack: 'React, react-router-dom, TypeScript, Tailwind CSS, Webpack, Nest.js, passport, Prisma, PostgreSQL, REST, yarn, responsive',
    url: null,
    code: 'https://github.com/zeexas/broker-server',
  },
  {
    id: 'website',
    name: 'website',
    base_tech: 'react',
    svg: Website,
    about: `This website you are browsing now is a basic project for my portfolio. Inspired by Sharlee`,
    about_ru: `Этот сайт, который Вы в настоящее время исследуете, является базовым проектом моего портфолио. Вдохновлен Sharlee`,
    tech_stack: 'HTML, CSS, React, react-router-dom, Redux Toolkit, Tailwind CSS, framer-motion, Vite, yarn, responsive',
    url: null,
    code: 'https://github.com/zeexas/website',
  },
  {
    id: 'art',
    name: 'art-quiz',
    base_tech: 'vanilla',
    svg: ArtQuiz,
    about: `Hundreds of world masterpieces are collected in this game, where you
    can test you knowledge in art. And don't forget to
    check out the settings.`,
    about_ru: `Сотни шедевров живописи собраны в этой игре, где Вы можете проверить свои познания в данном виде искусства.
    И не забудьте заглянуть в настройки.`,
    tech_stack: 'HTML, CSS, JavaScript, Webpack, npm',
    url: 'https://rolling-scopes-school.github.io/zeexas-JSFE2021Q3/art-quiz/',
    code: 'https://github.com/zeexas/art-quiz',
  },
  {
    id: 'momentum',
    name: 'momentum',
    base_tech: 'vanilla',
    svg: Momentum,
    about: 'This is a clone of the popular Google Chrome extension Momentum (not exact but kind of)',
    about_ru: 'Клон популярного одноименного расширения Google Chrome (не то, чтобы 100% копия, но все же)',
    tech_stack: 'HTML, CSS, JavaScript',
    url: 'https://rolling-scopes-school.github.io/zeexas-JSFE2021Q3/momentum/',
    code: 'https://github.com/zeexas/momentum',
  },
  {
    id: 'bulls',
    name: 'bulls and cows',
    base_tech: 'vanilla',
    svg: Bulls,
    about: `I love games, challenges, numbers and "Bulls and Cows" was our favorite game at school.
    So, try to find the secret number and beat your own record.`,
    about_ru: `Обожаю игры, числа и испытания ума, а игра "Быки и Коровы" была нашим любимым развлечением на уроках в школе.
    Готовы угадать число и установить свой личный рекорд?`,
    tech_stack: 'HTML, CSS, JavaScript',
    url: 'https://zeexas.github.io/Bulls_Cows/',
    code: 'https://github.com/zeexas/Bulls_Cows',
  },
];
