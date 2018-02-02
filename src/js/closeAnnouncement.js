const anchor = document.querySelector('.close-announcement');
const announcement = document.querySelector('#announcement');
const sections = Array.from(document.querySelectorAll('#announcement ~ section'));

const close = event => {
    event.preventDefault();
    const nodeHeight = announcement.clientHeight;

    announcement.classList.add('closing');

    for (let section of sections) {
        section.style.transform = `translateY(-${nodeHeight}px)`;
    }
};

const remove = event => {
    setTimeout(() => {
        announcement.parentNode.removeChild(announcement);

        for (let section of sections) {
            section.removeAttribute('style');
        }
    }, event.elapsedTime * 1000);
};

anchor.addEventListener('click', close);
announcement.addEventListener('transitionend', remove);
