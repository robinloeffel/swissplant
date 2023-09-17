const links = document.querySelectorAll<HTMLButtonElement>("[data-scroll-target]");

const smoothScroll = (event: Event) => {
  const clicked = event.target as HTMLButtonElement;
  const scrollTargetSelector = clicked.dataset.scrollTarget!;
  const scrollTargetElement = document.querySelector<HTMLElement>(scrollTargetSelector);

  scrollTargetElement?.scrollIntoView({
    behavior: "smooth"
  });
};

for (const link of links) {
  link.addEventListener("click", smoothScroll);
}
