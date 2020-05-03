import 'mdn-polyfills/Node.prototype.append';
import 'mdn-polyfills/Node.prototype.remove';

if (navigator.userAgent.includes('Trident')) {
  const body = document.querySelector('body');
  const notice = document.createElement('div');
  const content = document.createElement('div');
  const heading = document.createElement('h1');
  const paragraph = document.createElement('p');
  const anyway = document.createElement('a');

  notice.classList.add('_notice');
  content.classList.add('_notice-content');
  heading.textContent = 'Ihr Browser ist veraltet';
  paragraph.innerHTML = 'Sie verwenden den Internet Explorer – dieser Browser wird von Microsoft nicht mehr gewartet. Auf dieser und vielen anderen Webseiten können Probleme auftreten. Um schnell und sicher im Internet zu surfen, wechseln Sie zu <a href="https://www.mozilla.org/de/firefox">Mozilla Firefox</a>, <a href="https://www.google.com/intl/de/chrome">Google Chrome</a> oder <a href="https://www.microsoft.com/de-ch/windows/microsoft-edge">Microsoft Edge</a>.';
  anyway.textContent = 'Trotzdem weiter zur Webseite.';
  anyway.href = '#';
  anyway.addEventListener('click', event => {
    event.preventDefault();
    notice.remove();
  });

  content.append(heading);
  content.append(paragraph);
  content.append(anyway);
  notice.append(content);
  body.append(notice);
}
