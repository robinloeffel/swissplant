const navigation = document.querySelector('.navigation');
const list = navigation.querySelector('.navigation-list');
const logo = navigation.querySelector('.navigation-item-logo');
const trigger = navigation.querySelector('.navigation-mobile-button');

const listGap = Number(window.getComputedStyle(list).gap.replace('px', ''));
const logoHeight = logo.getBoundingClientRect().height;

const navigationHeightExpanded = navigation.getBoundingClientRect().height;
const navigationHeightCollapsed = listGap * 2 + logoHeight;

navigation.style.setProperty('--navigation-height-expanded', `${navigationHeightExpanded}px`);
navigation.style.setProperty('--navigation-height-collapsed', `${navigationHeightCollapsed}px`);

trigger.addEventListener('click', () => {
  navigation.classList.toggle('navigation--open', !navigation.classList.contains('navigation--open'));
});
