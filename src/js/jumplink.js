const links = document.querySelectorAll('[data-scroll-target]');
const navigation = document.querySelector('nav');

const navigationHeight = navigation.getBoundingClientRect().height;
const navigationMarginY = window.getComputedStyle(navigation).marginBlock.replace('px', '') * 2;

if (links.length > 0) {
  const smoothScroll = ({ currentTarget }) => {
    const { scrollTarget: selector } = currentTarget.dataset;
    const { offsetTop } = document.querySelector(selector);

    window.scroll({
      top: offsetTop - navigationHeight - navigationMarginY,
      behavior: 'smooth'
    });
  };

  links.forEach(link => {
    link.addEventListener('click', smoothScroll);
  });
}
