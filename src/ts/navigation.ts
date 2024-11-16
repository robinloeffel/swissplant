import { effect, signal } from "alien-signals";

const navigation = document.querySelector<HTMLElement>("[data-module~=navigation]");
const toggle = navigation?.querySelector<HTMLButtonElement>("[data-navigation~=toggle]");
const liveRegion = document.querySelector<HTMLSpanElement>("[data-live-region]");

const scrollBuffer = 50;
const isOpen = signal(false);

let oldScrollY = window.scrollY;

effect(() => {
  navigation?.classList.toggle("open", isOpen.get());
  toggle?.setAttribute("aria-expanded", String(isOpen.get()));

  if (liveRegion) {
    liveRegion.textContent = isOpen.get() ? "Navigation geöffnet." : "Navigation geschlossen.";
  }
});

toggle?.addEventListener("click", () => {
  isOpen.set(!isOpen.get());
});

// eslint-disable-next-line github/prefer-observers -- no way to do that here
window.addEventListener("scroll", () => {
  if (window.scrollY > oldScrollY + scrollBuffer) {
    navigation?.classList.add("hidden");
    oldScrollY = window.scrollY;
  }

  if (window.scrollY < oldScrollY - scrollBuffer) {
    navigation?.classList.remove("hidden");
    oldScrollY = window.scrollY;
  }
});

window.addEventListener("keydown", ({ key }) => {
  if (isOpen.get() && key === "Escape") {
    isOpen.set(false);
  }
});

window.addEventListener("click", ({ target }) => {
  if (target instanceof HTMLElement && isOpen.get() && !toggle?.contains(target)) {
    isOpen.set(false);
  }
});
