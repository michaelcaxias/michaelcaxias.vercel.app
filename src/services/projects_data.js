import backendDefault from '../images/backend.jpg';
import trybeSchedule from '../images/trybe-schedule.png';
import twelveStore from '../images/twelveStore.png';
import recipesApp from '../images/recipes-app.jpg';

const GENERAL_DESCRIPTION = `
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
consequat sunt nostrud amet.
`;

export default [
  {
    image: trybeSchedule,
    title: 'Trybe Schedule',
    description: `
    Aplicação de Calendário criado com o intuito de ajudar os estudantes da Trybe
    a sincronizarem as suas aulas com o Google Calendar
    feito com React, Material UI e Cypress.
    `,
    github: 'https://github.com/michaelcaxias/trybe-schedule',
    repositoryPath: 'michaelcaxias/trybe-schedule',
    website: 'https://trybe-schedule.vercel.app/',
  },
  {
    image: backendDefault,
    title: 'Blogs API',
    description: `
    API Restful de um Blog com NodeJs, Express, Sequelize e JWT
    com o banco de dados MySQL
    utilizando a estrutura ORM e MSC.
    `,
    github: 'https://github.com/michaelcaxias/blogs-api',
    repositoryPath: 'michaelcaxias/blogs-api',
    website: false,
  },
  {
    image: twelveStore,
    title: 'Twelve Store',
    description: `
    Front-end de uma aplicação de uma loja de produtos variados
    com React, Redux, Semantic UI e metodologias àgeis feito em grupo.
    `,
    github: 'https://github.com/michaelcaxias/twelve-store',
    repositoryPath: 'michaelcaxias/twelve-store',
    website: 'https://twelve-store.vercel.app/',
  },
  {
    image: recipesApp,
    title: 'Recipes App',
    description: `
    Front-end de um aplicativo de receitas de
    bebidas e comidas com React, Context API e metodologias àgeis feito em grupo.
    `,
    github: 'https://github.com/michaelcaxias/recipes-app',
    repositoryPath: 'michaelcaxias/recipes-app',
    website: 'https://recipes-app-drink.vercel.app/',
  },
];
