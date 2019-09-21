import jump from 'jump.js';
const links = document.querySelectorAll('[data-scroll-target]');

const scrollToTarget = event => {
  let anchor = event.target;

  while (!anchor.dataset.scrollTarget) {
    anchor = anchor.parentNode;
  }

  jump(anchor.dataset.scrollTarget);

  event.preventDefault();
};

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', scrollToTarget);
}
