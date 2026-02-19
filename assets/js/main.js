const projectCards = document.querySelectorAll('.project');
const navElement = document.querySelector('nav');
const navToggle = document.querySelector('.nav-toggle');
const mobileMediaQuery = window.matchMedia('(max-width: 600px)');

function toggleProject(card) {
  card.classList.toggle('open');
  const isOpen = card.classList.contains('open');
  card.setAttribute('aria-expanded', String(isOpen));
}

function closeNavMenu() {
  if (!navElement || !navToggle) {
    return;
  }

  navElement.classList.remove('menu-open');
  navToggle.setAttribute('aria-expanded', 'false');
}

if (navElement && navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = navElement.classList.toggle('menu-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navElement.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (mobileMediaQuery.matches) {
        closeNavMenu();
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeNavMenu();
    }
  });

  mobileMediaQuery.addEventListener('change', (event) => {
    if (!event.matches) {
      closeNavMenu();
    }
  });
}

projectCards.forEach((card) => {
  card.addEventListener('click', () => {
    toggleProject(card);
  });

  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleProject(card);
    }
  });
});
