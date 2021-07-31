const buttonMenu = document.querySelector('#btn-mobile');

buttonMenu.addEventListener('click', () => {
  const navHeader = document.querySelector('#nav-header');
  const header = document.querySelector('#header');
  navHeader.classList.toggle('active');
  header.classList.toggle('active')
});