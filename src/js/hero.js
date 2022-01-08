const images = document.querySelectorAll('.landing-image');

if (images.length > 1) {
  let index = 0;
  const firstImage = images[index];
  const visibleClass = 'landing-image-visible';
  firstImage.classList.add(visibleClass);

  const rotate = () => {
    window.setInterval(() => {
      const imageToHide = images[index];
      const imageToShow = images[index + 1] || firstImage;

      window.requestAnimationFrame(() => {
        imageToHide.classList.remove(visibleClass);
        imageToShow.classList.add(visibleClass);
      });

      index = images[index + 1] ? index + 1 : 0;
    }, 7500);
  };

  rotate();
}
