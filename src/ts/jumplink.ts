const links = document.querySelectorAll<HTMLButtonElement>("[data-scroll-target]");

const smoothScroll = ({ currentTarget }: MouseEvent) => {
  if (currentTarget instanceof HTMLButtonElement) {
    const scrollTargetSelector = currentTarget.dataset.scrollTarget;

    if (scrollTargetSelector) {
      const scrollTargetElement = document.querySelector<HTMLElement>(scrollTargetSelector);
      scrollTargetElement?.scrollIntoView({ behavior: "smooth" });
      scrollTargetElement?.focus();
    }
  }
};

for (const link of links) {
  link.addEventListener("click", smoothScroll);
}
