// ================ SHOW MENU ===============
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  // Убедимся, что данные в переменные получены
  if(toggle && nav) {
    toggle.addEventListener('click', () => {
      // При клике по кнопке меню, мы будем добавлять или убирать класс "show-menu" у div c классом nav__menu
      nav.classList.toggle('show-menu');
    });
  }
};

showMenu('nav-toggle', 'nav-menu');


// ================ REMOVE MENU MOBILE ===============
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');

  // При клике по любой ссылке в меню, мы должны убрать класс show-menu у div.nav-menu
  navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));