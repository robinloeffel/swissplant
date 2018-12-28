const node = document.querySelector('.settings');
const icon = node.querySelector('.feather');
const list = node.querySelector('.settings-list');
const toggleList = () => {
    node.classList.toggle('settings--open');
    list.classList.toggle('settings-list--open');
};

icon.addEventListener('click', toggleList);
