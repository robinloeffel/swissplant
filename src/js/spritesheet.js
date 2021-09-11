const pageHasIcons = document.querySelectorAll('.icon').length > 0;

if (pageHasIcons) {
  const inject = async () => {
    const domParser = new DOMParser();
    const response = await fetch('/img/sprite.svg');
    const spriteAsText = await response.text();

    const {
      documentElement: spriteElement
    } = domParser.parseFromString(spriteAsText, 'image/svg+xml');
    spriteElement.style.display = 'none';
    document.body.append(spriteElement);
  };

  inject();
}
