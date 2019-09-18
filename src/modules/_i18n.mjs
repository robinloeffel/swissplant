import Mehrsprachig from 'mehrsprachig';

const mehrsprachig = new Mehrsprachig({
    language: 'de',
    sources: {
        de: '/data/de.json',
        en: '/data/en.json'
    }
});

const setLanguage = event => {
    mehrsprachig.setLanguage(event.target.dataset.mehrsprachigToggle);
    event.preventDefault();
};

const nodes = document.querySelectorAll('[data-mehrsprachig-toggle]');

for (const node of nodes.values()) {
    node.addEventListener('click', setLanguage);
}
