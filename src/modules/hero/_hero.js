const rotate = () => {
    if (window.matchMedia('(min-width: 1200px)').matches) {
        const current = document.querySelector('.cover-parent-background.rotate.top');
        const next = current.nextElementSibling.classList.contains('cover-parent-background') ? current.nextElementSibling : document.querySelector('.cover-parent-background.rotate');

        current.classList.remove('top');
        next.classList.add('top');
    }
};

setInterval(() => {
    rotate();
}, 7500);
