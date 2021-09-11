const images = document.querySelectorAll('.landing-image');

if (images.length > 1) {
  const visibleClass = 'landing-image-visible';
  let index = 0;

  const rotate = () => {
    const toShow = images.item(index);
    const toHide = images.item(index - 1) ? images.item(index - 1) : images.item(images.length - 1);

    window.requestAnimationFrame(() => {
      toShow.classList.add(visibleClass);
      toHide.classList.remove(visibleClass);
    });

    index = index > images.length - 2 ? 0 : index + 1;
  };

  window.setInterval(rotate, 7500);
  rotate();
}
