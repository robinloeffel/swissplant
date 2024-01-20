const images = document.querySelectorAll(".landing-image");
const visibleClass = "is-visible";

if (images.length > 0) {
  let current = images.item(0);
  current.classList.add(visibleClass);

  if (images.length > 1) {
    window.setTimeout(() => {
      for (const image of images) {
        image.classList.add("is-animating");
      }
    });

    window.setInterval(() => {
      const next = current.nextElementSibling ?? images.item(0);

      current.classList.remove(visibleClass);
      next.classList.add(visibleClass);

      current = next;
    }, 7500);
  }
}
