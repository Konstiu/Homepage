const projectCards = document.querySelectorAll('.project');

function toggleProject(card) {
  card.classList.toggle('open');
  const isOpen = card.classList.contains('open');
  card.setAttribute('aria-expanded', String(isOpen));
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
