const images = document.querySelectorAll('.landing-image');

if (images.length > 1) {
  const visibleClass = 'landing-image-visible';
  images[0].classList.add(visibleClass);

  const rotate = () => {
    let index = 0;

    window.setInterval(() => {
      const imageToHide = images[index];
      const imageToShow = images[index + 1] || images[0];

      window.requestAnimationFrame(() => {
        imageToHide.classList.remove(visibleClass);
        imageToShow.classList.add(visibleClass);
      });

      index = images[index + 1] ? index + 1 : 0;
    }, 7500);
  };

  rotate();
}
