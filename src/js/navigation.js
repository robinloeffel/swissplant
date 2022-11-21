const navigation = document.querySelector('.navigation');
const list = navigation.querySelector('.navigation-list');
const logo = navigation.querySelector('.navigation-item-logo');
const trigger = navigation.querySelector('.navigation-mobile-button');

const listGap = Number(window.getComputedStyle(list).rowGap.replace('px', ''));
const navigationHeightCollapsed = logo.clientHeight + listGap * 2;
navigation.style.setProperty('--navigation-height-collapsed', `${navigationHeightCollapsed}px`);

const scrollBuffer = 50;
let oldScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (window.scrollY > oldScrollY + scrollBuffer) {
    navigation.classList.add('navigation--hidden');
    oldScrollY = window.scrollY;
  }

  if (window.scrollY < oldScrollY - scrollBuffer) {
    navigation.classList.remove('navigation--hidden');
    oldScrollY = window.scrollY;
  }
}, { passive: true });

window.addEventListener('load', () => {
  navigation.style.setProperty('--navigation-height-expanded', `${list.clientHeight}px`);
});

trigger.addEventListener('click', () => {
  navigation.classList.toggle('navigation--open', !navigation.classList.contains('navigation--open'));
});
