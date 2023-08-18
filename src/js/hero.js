const images = document.querySelectorAll(".landing-image");
const visibleClass = "landing-image-visible";

if (images.length > 1) {
  let [ visibleImage ] = images;
  visibleImage.classList.add(visibleClass);

  window.setInterval(() => {
    visibleImage.classList.remove(visibleClass);
    visibleImage = visibleImage.parentElement.nextElementSibling?.lastElementChild || images[0];
    visibleImage.classList.add(visibleClass);
  }, 7500);
}
