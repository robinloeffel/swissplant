const links = document.querySelectorAll("[data-scroll-target]");

if (links.length > 0) {
  const smoothScroll = ({ currentTarget }) => {
    const { scrollTarget: selector } = currentTarget.dataset;
    const { offsetTop } = document.querySelector(selector);

    window.scroll({
      top: offsetTop,
      behavior: "smooth"
    });
  };

  for (const link of links) {
    link.addEventListener("click", smoothScroll);
  }
}
