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


// ================ SCROLL SECTIONS ACTIVE LINK ===============
const sections = document.querySelectorAll('section[id]');

function scrollActive() {

  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);

// ================ CHANGE BACKGROUND HEADER ===============
function scrollHeader() {
  const header = document.getElementById('header');

  // when the scroll is grather than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader);


// ================ SHOW SCROLL UP ===============
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');

  // when the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with a scroll-top class tag
  if(this.scrollY >= 560) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll', scrollUp);