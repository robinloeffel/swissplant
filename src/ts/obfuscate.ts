const obfuscated = document.querySelectorAll<HTMLAnchorElement>("[data-obfuscate]");

const pairs = new Map([
  [ "bWFpbHRvOmluZm9Ac3dpc3NwbGFudC5jaA==", {
    attribute: "obfuscateEsp",
    text: "SwissPlant eine E-Mail schreiben"
  }],
  [ "bWFpbHRvOmluZm9AYWdyaXBsYW50LmNo", {
    attribute: "obfuscateEap",
    text: "AgriPlant eine E-Mail schreiben"
  }],
  [ "bWFpbHRvOm0ubG9lZmZlbEBzd2lzc3BsYW50LmNo", {
    attribute: "obfuscateEml",
    text: "Martin Löffel eine E-Mail schreiben"
  }],
  [ "bWFpbHRvOnQuYmF1bWFubkBzd2lzc3BsYW50LmNo", {
    attribute: "obfuscateEtb",
    text: "Telja Baumann eine E-Mail schreiben"
  }],
  [ "bWFpbHRvOnMubG9lZmZlbEBzd2lzc3BsYW50LmNo", {
    attribute: "obfuscateEsl",
    text: "Sandro Löffel eine E-Mail schreiben"
  }],
  [ "dGVsOiArNDEgMzIgMzEzIDUyIDEw", {
    attribute: "obfuscateT",
    text: "SwissPlant anrufen"
  }],
  [ "dGVsOis0MTc5NjMxNDU1OQ==", {
    attribute: "obfuscateTml",
    text: "Martin Löffel anrufen"
  }],
  [ "dGVsOis0MTc5ODE1MzgzNQ==", {
    attribute: "obfuscateTtb",
    text: "Telja Baumann anrufen"
  }],
  [ "dGVsOis0MTc5NjQxNTIxMA==", {
    attribute: "obfuscateTsl",
    text: "Sandro Löffel anrufen"
  }]
]);

const sr = (link: HTMLAnchorElement, text: string) => {
  const srTextElement = document.createElement("span");
  srTextElement.classList.add("sr-only");
  srTextElement.textContent = text;
  link.append(srTextElement);
};

const handleClick = (event: MouseEvent) => {
  event.preventDefault();

  const target = event.target as HTMLAnchorElement;
  window.location.href = window.atob(target.dataset.obfuscate ?? "");
};

for (const obfuscatedElement of obfuscated) {
  const pair = pairs.get(obfuscatedElement.dataset.obfuscate ?? "");

  if (pair) {
    obfuscatedElement.addEventListener("click", handleClick);
    obfuscatedElement.dataset[pair.attribute] = "";
    sr(obfuscatedElement, pair.text);
  }
}
