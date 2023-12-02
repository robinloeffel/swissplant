const navigation = document.querySelector<HTMLElement>(".navigation");
const trigger = navigation?.querySelector<HTMLButtonElement>(".navigation-mobile-button");
const scrollBuffer = 50;

let oldScrollY = window.scrollY;

// eslint-disable-next-line github/prefer-observers -- no way to do that here
window.addEventListener("scroll", () => {
  if (window.scrollY > oldScrollY + scrollBuffer) {
    navigation?.classList.add("navigation--hidden");
    oldScrollY = window.scrollY;
  }

  if (window.scrollY < oldScrollY - scrollBuffer) {
    navigation?.classList.remove("navigation--hidden");
    oldScrollY = window.scrollY;
  }
});

trigger?.addEventListener("click", () => {
  navigation?.classList.toggle(
    "navigation--open",
    !navigation.classList.contains("navigation--open")
  );
});
