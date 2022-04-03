import backendDefault from '../images/backend.jpg';
import trybeSchedule from '../images/trybe-schedule.png';
import twelveStore from '../images/twelveStore.png';
import recipesApp from '../images/recipes-app.png';

const REACT = 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB';
const JAVASCRIPT = 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=323330';
const CSS3 = 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white';
const SASS = 'https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white';
const CYPRESS = 'https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white';
const BOOTSTRAP = 'https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white';
const TESTING_LIBRARY = 'https://img.shields.io/badge/testing%20library-F22F46?style=for-the-badge&logo=testing-library&logoColor=white';
const MATERIALUI = 'https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white';
const SEMANTICUI = 'https://img.shields.io/badge/semantic%20ui%20react-35BDB2?style=for-the-badge&logo=semanticuireact&logoColor=white';

const MYSQL = 'https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white';
const SEQUELIZE = 'https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white';
const NODE = 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white';
const JWT = 'https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white';

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
    Projeto criado com o intuito de ajudar os estudantes da Trybe
    a sincronizarem as suas aulas com o Google Calendar.
    `,
    github: 'https://github.com/michaelcaxias/trybe-schedule',
    repositoryPath: 'michaelcaxias/trybe-schedule',
    website: 'https://trybe-schedule.vercel.app/',
    modalInfo: {
      deepDescription: GENERAL_DESCRIPTION,
      stacks: [REACT, JAVASCRIPT, SASS, MATERIALUI, CYPRESS],
    },
  },
  {
    image: backendDefault,
    title: 'Blogs API',
    description: `
    Projeto com objetivo de criar um CRUD
    a partir da criação de uma API RESTful utilizando as estruturas ORM e MSC.
    `,
    github: 'https://github.com/michaelcaxias/blogs-api',
    repositoryPath: 'michaelcaxias/blogs-api',
    website: false,
    modalInfo: {
      deepDescription: GENERAL_DESCRIPTION,
      stacks: [MYSQL, NODE, SEQUELIZE, JWT],
    },
  },
  {
    image: twelveStore,
    title: 'Twelve Store',
    description: `
    Projeto feito em grupo com o objetivo de treinar as metodologias ágeis
    com DM's e Kanbam, além de utilizarmos Redux para o gerenciamento de estados.
    `,
    github: 'https://github.com/michaelcaxias/twelve-store',
    repositoryPath: 'michaelcaxias/twelve-store',
    website: 'https://twelve-store.vercel.app/',
    modalInfo: {
      deepDescription: GENERAL_DESCRIPTION,
      stacks: [REACT, JAVASCRIPT, CSS3, SEMANTICUI],
    },
  },
  {
    image: recipesApp,
    title: 'Recipes App',
    description: `
    Front-end de um aplicativo de receitas de
    bebidas e comidas com React, Context API e metodologias àgeis.
    `,
    github: 'https://github.com/michaelcaxias/recipes-app',
    repositoryPath: 'michaelcaxias/recipes-app',
    website: 'https://recipes-app-drink.vercel.app/',
    modalInfo: {
      deepDescription: GENERAL_DESCRIPTION,
      stacks: [REACT, JAVASCRIPT, CSS3, BOOTSTRAP, TESTING_LIBRARY],
    },
  },
];
