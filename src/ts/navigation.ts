import { effect, signal } from "@preact/signals-core";

const navigation = document.querySelector<HTMLElement>("[data-module~=navigation]");
const toggle = navigation?.querySelector<HTMLButtonElement>("[data-navigation~=toggle]");

const scrollBuffer = 50;
const isOpen = signal(false);

let oldScrollY = window.scrollY;

effect(() => {
  navigation?.classList.toggle("open", isOpen.value);
  toggle?.setAttribute("aria-expanded", String(isOpen.value));
});

toggle?.addEventListener("click", () => {
  isOpen.value = !isOpen.value;
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
  if (isOpen.value && key === "Escape") {
    isOpen.value = false;
  }
});

window.addEventListener("click", ({ target }) => {
  if (isOpen.value && !navigation?.contains(target as HTMLElement)) {
    isOpen.value = false;
  }
});
