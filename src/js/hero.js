const images = document.querySelectorAll('._landing-image');
const visible = '_landing-image-visible';
let idx = 0;

const rotate = () => {
  if (idx > 0) {
    images[idx - 1].classList.remove(visible);
  }

  if (idx === 0) {
    images[images.length - 1].classList.remove(visible);
  }

  images[idx].classList.add(visible);
  idx = idx === images.length - 1 ? 0 : idx += 1;
};

setInterval(rotate, 7500);
rotate();
