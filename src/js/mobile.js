const openButton = document.querySelector('.mobile-menu');
const closeButton = document.querySelector('.close-mobile-nav');
const nav = document.querySelector('.mobile-nav');

openButton.addEventListener('click', event => {
    event.preventDefault();

    nav.classList.add('open');
}, false);

closeButton.addEventListener('click', event => {
    event.preventDefault();

    nav.classList.remove('open');
}, false);
