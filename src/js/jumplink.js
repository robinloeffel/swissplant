const links = document.querySelectorAll('[data-scroll-target]');

if (links.length > 0) {
  const smoothScroll = event => {
    event.preventDefault();

    const { scrollTarget: selector } = event.target.dataset;
    const { offsetTop: targetOffset } = document.querySelector(selector);
    const navigationHeight = document.querySelector('.header').clientHeight;

    window.scrollTo({
      top: targetOffset - navigationHeight,
      behavior: 'smooth'
    });
  };

  links.forEach(link => {
    link.addEventListener('click', smoothScroll);
  });
}

