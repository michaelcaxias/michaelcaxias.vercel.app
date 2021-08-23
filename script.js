const buttonMenu = document.querySelector('#btn-mobile');
const backButton = document.querySelector('#back-button');
const nextButton = document.querySelector('#next-button');
const projectIndex = document.querySelector('#project-index')
const projectName = document.querySelector('#project-name');
const projectDescription = document.querySelector('#project-description');
const projectImage = document.querySelectorAll('.project-image')
const projectLink = document.querySelector('#project-link');
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
    description: 'Projeto de formulário com o tema Harry Potter utilizando JavaScript, HTML e CSS',
    image: 'images/laptop-trybewarts.png',
    link: 'https://michaelcaxias.github.io/projects/trybewarts/',
  },
  {
    title: 'Lista de Tarefas',
    description: 'Projeto Lista de Tarefas feito com JavaScript, HTML e CSS',
    image: 'images/laptop-todolist.png',
    link: 'https://michaelcaxias.github.io/projects/todo-list/',
  },
  {
    title: 'Carrinho de Compras',
    description: 'Projeto Carrinho de Compras utilizando a API do Mercado Livre e JavaScript Assíncrono',
    image: 'images/shopping-cart-project.png',
    link: 'https://michaelcaxias.github.io/projects/shopping-cart/',
  }
];

const nextAndBack = (index) => {
  projectIndex.innerHTML = `${index}/${projectsArray.length}`
  projectName.innerText = `${projectsArray[index -1].title}`;
  projectDescription.innerText = `${projectsArray[index -1].description}`;
  projectImage[0].setAttribute('src', `${projectsArray[index -1].image}`)
  projectImage[1].setAttribute('src', `${projectsArray[index -1].image}`)
  projectLink.setAttribute('href', `${projectsArray[index -1].link}`)
}

nextAndBack(index);

backButton.addEventListener('click', () => {
  if (index === 1) {
    index = projectsArray.length;
  }
  else {
    index -= 1;
  }
  nextAndBack(index);
})

nextButton.addEventListener('click', () => {
  if (index === projectsArray.length) {
    index = 1;
  }
  else {
    index += 1;
  }
  nextAndBack(index);
})

AOS.init();