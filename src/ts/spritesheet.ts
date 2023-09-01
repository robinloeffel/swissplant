const inject = async () => {
  const domParser = new DOMParser();
  const response = await fetch("/img/sprite.svg");
  const spriteAsText = await response.text();

  const { documentElement: spriteElement } = domParser.parseFromString(spriteAsText, "image/svg+xml");
  spriteElement.classList.add("visually-hidden");
  document.body.prepend(spriteElement);
};

inject();
