const images = document.querySelectorAll(".landing-image");

if (images.length > 0) {
  let current = images.item(0)!;
  current.classList.add("is-visible");

  if (images.length > 1) {
    window.setTimeout(() => {
      for (const image of images) {
        image.classList.add("is-animating");
      }
    });

    window.setInterval(() => {
      const next = current.nextElementSibling ?? images.item(0)!;

      current.classList.remove("is-visible");
      next.classList.add("is-visible");

      current = next;
    }, 7500);
  }
}
