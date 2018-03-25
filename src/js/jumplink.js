import jump from 'jump.js';

const jumplinks = document.querySelectorAll('[data-scroll-target]');
const navHeight = document.querySelector('.desktop-nav').clientHeight;

for (let link of jumplinks.values()) {
    link.addEventListener('click', event => {
        event.preventDefault();

        jump(event.target.dataset.scrollTarget, {
            offset: -navHeight
        });
    }, false);
}
