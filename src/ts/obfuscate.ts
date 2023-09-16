const obfuscated = document.querySelectorAll<HTMLAnchorElement>("[data-obfuscate]");

const sr = (link: HTMLAnchorElement, text: string) => {
  const srTextElement = document.createElement("span");
  srTextElement.classList.add("visually-hidden");
  srTextElement.textContent = text;
  link.append(srTextElement);
};

const handleClick = (event: MouseEvent) => {
  event.preventDefault();

  const target = event.target as HTMLAnchorElement;
  window.location.href = window.atob(target.dataset.obfuscate!);
};

for (const obfuscatedElement of obfuscated) {
  const obfuscatedText = obfuscatedElement.dataset.obfuscate!;

  if (obfuscatedText === "bWFpbHRvOmluZm9Ac3dpc3NwbGFudC5jaA==") {
    obfuscatedElement.dataset.obfuscateEsp = "";
    sr(obfuscatedElement, "SwissPlant eine E-Mail schreiben");
  }

  if (obfuscatedText === "bWFpbHRvOmluZm9AYWdyaXBsYW50LmNo") {
    obfuscatedElement.dataset.obfuscateEap = "";
    sr(obfuscatedElement, "AgriPlant eine E-Mail schreiben");
  }

  if (obfuscatedText === "dGVsOiArNDEgMzIgMzEzIDUyIDEw") {
    obfuscatedElement.dataset.obfuscateT = "";
    sr(obfuscatedElement, "SwissPlant anrufen");
  }

  obfuscatedElement.addEventListener("click", handleClick);
}
