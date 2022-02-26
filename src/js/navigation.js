const trigger = document.querySelector('.header-navigation-link');
const navigation = document.querySelector('.header');

let listening = false;

const toggle = event => {
  event.preventDefault();
  navigation.classList.toggle('header-open');
};

const checkMatch = () => {
  const { matches } = matchMedia('(max-width: 900px)');

  if (matches && !listening) {
    trigger.addEventListener('click', toggle);
    listening = true;
  }

  if (!matches && listening) {
    trigger.removeEventListener('click', toggle);
    listening = false;
  }
};

window.addEventListener('resize', checkMatch);
checkMatch();
