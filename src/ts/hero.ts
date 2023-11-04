const imagesWrapper = document.querySelector<HTMLDivElement>(".landing-images");
const visibleClass = "landing-image-visible";

if (imagesWrapper) {
  if (imagesWrapper.childElementCount > 1) {
    const state = new Proxy({
      visibleImageIndex: 0
    }, {
      set: (target, property, value: number) => {
        const oldImage = imagesWrapper.children.item(target.visibleImageIndex)?.lastElementChild;
        const newImage = imagesWrapper.children.item(value)?.lastElementChild;

        oldImage?.classList.remove(visibleClass);
        newImage?.classList.add(visibleClass);

        return Reflect.set(target, property, value);
      }
    });

    state.visibleImageIndex = 0;

    window.setInterval(() => {
      state.visibleImageIndex
        = imagesWrapper.childElementCount > state.visibleImageIndex + 1
          ? state.visibleImageIndex + 1
          : 0;
    }, 7500);
  } else {
    imagesWrapper.firstElementChild?.lastElementChild?.classList.add(visibleClass);
  }
}
