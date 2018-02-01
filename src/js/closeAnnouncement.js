const anchor = document.querySelector('.close-announcement');
const announcement = document.querySelector('#announcement');
const sections = Array.from(document.querySelectorAll('#announcement ~ section'));
let originalHeight;

const close = event => {
    event.preventDefault();

    originalHeight = announcement.clientHeight;
    announcement.classList.add('closing');

    for (let section of sections) {
        section.style.transform = `translateY(-${originalHeight}px)`;
    }
};

const remove = event => {
    setTimeout(() => {
        announcement.remove();

        for (let section of sections) {
            section.removeAttribute('style');
        }
    }, event.elapsedTime * 1000);
};

anchor.addEventListener('click', close);
announcement.addEventListener('transitionend', remove);
