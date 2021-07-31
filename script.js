const buttonMenu = document.querySelector('#btn-mobile');

const toggleMenu = (event) => {
  if (event.type === 'touchstart') {
    event.preventDefault()
  }
  const navHeader = document.querySelector('#nav-header');
  const header = document.querySelector('#header');
  navHeader.classList.toggle('active');
  header.classList.toggle('active')
} 


buttonMenu.addEventListener('click', toggleMenu);
buttonMenu.addEventListener('touchstart', toggleMenu);