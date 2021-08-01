const buttonMenu = document.querySelector('#btn-mobile');

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