import jump from 'jump.js';

const smoothScrollTriggers = document.querySelectorAll('[data-scroll-target]');
const mobileMenuOpenTrigger = document.querySelector('.mobile-menu');
const mobileMenuCloseTrigger = document.querySelector('.close-mobile-nav');
const navHeight = document.querySelector('.desktop-nav').clientHeight;

const rotateHeroImage = () => {
    if (!window.matchMedia('(max-width: 1200px)').matches) {
        const currentlyVisible = document.querySelector('.cover-parent-background.rotate.top');
        const soonToBeVisible = currentlyVisible.nextElementSibling.classList.contains('cover-parent-background') ? currentlyVisible.nextElementSibling : document.querySelector('.cover-parent-background.rotate');

        currentlyVisible.classList.remove('top');
        soonToBeVisible.classList.add('top');
    }
};

setInterval(() => {
    rotateHeroImage();
}, 7500);

for (let i = 0; i < smoothScrollTriggers.length; i++) {
    smoothScrollTriggers[i].addEventListener('click', (event) => {
        event.preventDefault();

        jump(event.currentTarget.dataset.scrollTarget, {
            offset: -navHeight
        });
    });
}

mobileMenuOpenTrigger.addEventListener('click', (event) => {
    event.preventDefault();

    document.querySelector('.mobile-nav').classList.add('open');
});

mobileMenuCloseTrigger.addEventListener('click', (event) => {
    event.preventDefault();

    document.querySelector('.mobile-nav').classList.remove('open');
});
