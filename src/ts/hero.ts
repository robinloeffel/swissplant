const imagesWrapper = document.querySelector<HTMLDivElement>(".landing-images")!;
const visibleClass = "landing-image-visible";

if (imagesWrapper.childElementCount > 1) {
  const state = new Proxy({
    visibleImageIndex: 0
  }, {
    set: (target, property, value: number) => {
      const oldImage = imagesWrapper.children[target.visibleImageIndex]!.lastElementChild!;
      const newImage = imagesWrapper.children[value]!.lastElementChild!;

      oldImage.classList.remove(visibleClass);
      newImage.classList.add(visibleClass);

      return Reflect.set(target, property, value);
    }
  });

  state.visibleImageIndex = 0;

  window.setInterval(() => {
    state.visibleImageIndex = state.visibleImageIndex + 1 === imagesWrapper.childElementCount
      ? 0
      : state.visibleImageIndex + 1;
  }, 7500);
} else {
  imagesWrapper.firstElementChild!.lastElementChild!.classList.add(visibleClass);
}
