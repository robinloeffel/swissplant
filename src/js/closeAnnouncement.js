'use strict';

const anchor = document.querySelector('.close-announcement');
const announcement = document.querySelector('#announcement');

const close = event => {
    event.preventDefault();

    announcement.classList.add('closing');
};

const remove = event => {
    //announcement.remove();
}

anchor.addEventListener('click', close);
announcement.addEventListener('transitionend', remove);
