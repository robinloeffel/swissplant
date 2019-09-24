const trigger = document.getElementsByClassName('_header-navigation-link')[0];
const navigation = document.getElementsByClassName('_header')[0];
const className = '_header-open';

let match;
let listening;

const toggle = event => {
  event.preventDefault();
  navigation.classList.toggle(className);
}

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
}

window.addEventListener('resize', checkMatch);
checkMatch();
