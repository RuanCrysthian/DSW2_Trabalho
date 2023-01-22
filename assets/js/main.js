const toggleHamburgerMenu = () => {
  const menuSectionEl = document.querySelector('div.menu-section');
  const classList = menuSectionEl.classList;

  classList.toggle('on');

};

document.querySelector('button.menu-toggle').addEventListener('click', toggleHamburgerMenu);
