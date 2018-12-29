import jump from 'jump.js';

const jumplinks = document.querySelectorAll('[data-jump-link]');

for (const link of jumplinks.values()) {
    link.addEventListener('click', event => {
        jump(event.target.dataset.jumpLink, {
            offset: -document.querySelector('.navigation').clientHeight
        });

        event.preventDefault();
    });
}
