const links = document.querySelectorAll<HTMLButtonElement>("[data-scroll-target]");

const smoothScroll = (event: Event) => {
  const clicked = event.currentTarget as HTMLButtonElement;
  const scrollTargetSelector = clicked.dataset.scrollTarget;

  if (scrollTargetSelector) {
    const scrollTargetElement = document.querySelector<HTMLElement>(scrollTargetSelector);
    scrollTargetElement?.scrollIntoView({ behavior: "smooth" });
    scrollTargetElement?.focus();
  }
};

for (const link of links) {
  link.addEventListener("click", smoothScroll);
}
