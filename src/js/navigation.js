const trigger = document.querySelector('.header-navigation-link');
const navigation = document.querySelector('.header');

let match = false;
let listening = false;

const toggle = event => {
  event.preventDefault();
  navigation.classList.toggle('header-open');
};

const checkMatch = () => {
  match = matchMedia('(max-width: 900px)').matches;

  if (match && !listening) {
    trigger.addEventListener('click', toggle);
    listening = true;
  }

  if (!match && listening) {
    trigger.removeEventListener('click', toggle);
    listening = false;
  }
};

window.addEventListener('resize', checkMatch);
checkMatch();
