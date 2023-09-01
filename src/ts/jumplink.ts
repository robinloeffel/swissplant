const links = document.querySelectorAll<HTMLAnchorElement>("[data-scroll-target]");

if (links.length > 0) {
  const smoothScroll = ({ target }: Event) => {
    const { dataset: { selector } } = target as HTMLElement;
    const { offsetTop } = document.querySelector<HTMLElement>(selector!)!;

    window.scroll({
      top: offsetTop,
      behavior: "smooth"
    });
  };

  for (const link of links) {
    link.addEventListener("click", smoothScroll);
  }
}
