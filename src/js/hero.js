const images = document.querySelectorAll('._landing-image');

if (images.length > 0) {
  const visibleClass = '_landing-image-visible';
  let [ currentlyVisible ] = images;
  currentlyVisible.classList.add(visibleClass);

  window.setInterval(() => {
    const hasNextSibling = !!currentlyVisible.parentElement.nextElementSibling;
    const nextVisible = hasNextSibling
      ? currentlyVisible.parentElement.nextElementSibling.lastElementChild
      : images[0];

    currentlyVisible.classList.remove(visibleClass);
    nextVisible.classList.add(visibleClass);
    currentlyVisible = nextVisible;
  }, 7500);
}
