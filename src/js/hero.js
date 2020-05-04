const images = document.querySelectorAll('._landing-image');
const visibleClass = '_landing-image-visible';
let idx = 0;

const rotate = () => {
  if (idx > 0) {
    images[idx - 1].classList.remove(visibleClass);
  }

  if (idx === 0) {
    images[images.length - 1].classList.remove(visibleClass);
  }

  images[idx].classList.add(visibleClass);
  idx = idx === images.length - 1 ? 0 : idx += 1;
};

if (images.length > 1) {
  setInterval(rotate, 7500);
  rotate();
}
