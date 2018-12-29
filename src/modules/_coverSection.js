const node = document.querySelector('.cover-section');
const images = node.querySelectorAll('.cover-section__image');

const rotate = () => {
    const visible = [...images].find(image => !image.classList.contains('cover-section__image--hidden'));
    const next = visible.nextElementSibling ? visible.nextElementSibling : images[0];

    next.classList.toggle('cover-section__image--hidden');
    visible.classList.toggle('cover-section__image--hidden');
};

if (images.length > 1) {
    const toHide = [...images].splice(1);

    toHide.forEach(node => {
        node.classList.add('cover-section__image--hidden');
    });

    setInterval(rotate, 7500);
}
