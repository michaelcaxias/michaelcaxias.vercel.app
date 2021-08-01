const buttonMenu = document.querySelector('#btn-mobile');
const backButton = document.querySelector('#back-button');
const nextButton = document.querySelector('#next-button');
let index = 1;

const toggleMenu = (event) => {
  if (event.type === 'touchstart') {
    event.preventDefault()
  }
  const navHeader = document.querySelector('#nav-header');
  const headerMenu = document.querySelector('#header-menu');
  navHeader.classList.toggle('active');
  headerMenu.classList.toggle('active')
} 

buttonMenu.addEventListener('click', toggleMenu);
buttonMenu.addEventListener('touchstart', toggleMenu);

const projectsArray = [
  {
    title: 'TrybeWarts',
    description: 'Apenas um teste TrybeWarts',
    button: 'https://michaelcaxias.github.io/projects/trybewarts/',
  },

  {
    title: 'Lista de Tarefas',
    description: 'Apenas um teste Lista de Taregas',
    button: 'https://michaelcaxias.github.io/projects/todo-list/',
  }
];

const nextAndBack = (index) => {
  const projectIndex = document.querySelector('#project-index')
  const projectName = document.querySelector('#project-name');
  const projectDescription = document.querySelector('#project-description');
  const projectLink = document.querySelector('#project-link');
  projectIndex.innerHTML = `${index}/5`
  projectName.innerText = '';
  projectDescription.innerText = '';
  projectLink.setAttribute('href', 'https://michaelcaxias.github.io/projects/trybewarts/')
}

backButton.addEventListener('click', () => {
  if (index === 1) {
    index = 5;
  }
  else {
    index -= 1;
  }
  nextAndBack(index);
})

nextButton.addEventListener('click', () => {
  if (index === 5) {
    index = 1;
  }
  else {
    index += 1;
  }
  nextAndBack(index);
})