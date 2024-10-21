function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var mehrsprachig$1;
var hasRequiredMehrsprachig;

function requireMehrsprachig () {
	if (hasRequiredMehrsprachig) return mehrsprachig$1;
	hasRequiredMehrsprachig = 1;

	var index = ({
	  selector = '[data-mehrsprachig]',
	  trigger = '[data-mehrsprachig-trigger]',
	  fallback = 'en',
	  sources = {}
	} = {}) => {
	  const cachedLocales = {};
	  const toTranslate = document.querySelectorAll(selector);
	  const triggers = document.querySelectorAll(trigger);

	  const localize = (localeKey, propertyToFind) => {
	    const newLocale = cachedLocales[localeKey];

	    // find the provided prop, which may be nested,
	    // inside newLocale and return that prop's value
	    return propertyToFind.split('.').reduce(
	      (previousValue, currentValue) => previousValue[currentValue], newLocale
	    );
	  };

	  const translate = localeKey => {
	    toTranslate.forEach(element => {
	      const propertiesToLocalize = element.dataset.mehrsprachig.replace(/ /g, '').split(',');

	      propertiesToLocalize.forEach(propertyToLocalize => {
	        let localizedPropertyValue = '';

	        if (propertyToLocalize.includes('=')) {
	          // manipulating an element's property's content
	          const [ elementPropertyName, elementPropertyValue ] = propertyToLocalize.split('=');
	          localizedPropertyValue = localize(localeKey, elementPropertyValue);
	          element[elementPropertyName] = localizedPropertyValue;
	        } else if (propertyToLocalize.includes('html:')) {
	          // manipulating an element's html content
	          localizedPropertyValue = localize(localeKey, propertyToLocalize.replace('html:', ''));
	          element.innerHTML = localizedPropertyValue;
	        } else {
	          // manipulating an element's text content
	          localizedPropertyValue = localize(localeKey, propertyToLocalize);
	          element.textContent = localizedPropertyValue;
	        }

	        const mehrsprachigTranslatedEvent = new CustomEvent('mehrsprachigTranslated', {
	          bubbles: true,
	          detail: {
	            localeKey,
	            element,
	            propertyToLocalize,
	            localizedPropertyValue
	          }
	        });
	        element.dispatchEvent(mehrsprachigTranslatedEvent);
	      });
	    });

	    localStorage.setItem('mehrsprachig', localeKey);
	  };

	  const changeLanguage = async localeKey => {
	    if (!cachedLocales[localeKey]) {
	      const fetchResponse = await fetch(sources[localeKey]);
	      const fetchedLocale = await fetchResponse.json();
	      cachedLocales[localeKey] = fetchedLocale;
	    }

	    translate(localeKey);
	  };

	  const handleTriggerClick = event => {
	    const { mehrsprachigTrigger: localeKey } = event.target.dataset;
	    changeLanguage(localeKey);
	    event.preventDefault();
	  };

	  triggers.forEach(element => {
	    element.addEventListener('click', handleTriggerClick);
	  });

	  if (localStorage.getItem('mehrsprachig')) {
	    changeLanguage(localStorage.getItem('mehrsprachig'));
	  } else {
	    changeLanguage(fallback);
	  }
	};

	mehrsprachig$1 = index;
	return mehrsprachig$1;
}

var mehrsprachigExports = requireMehrsprachig();
var mehrsprachig = /*@__PURE__*/getDefaultExportFromCjs(mehrsprachigExports);

const liveRegion$1 = document.querySelector("[data-live-region]");
const handleMehrsprachigTranslated = ({ detail }) => {
    if (detail?.localeKey && liveRegion$1) {
        document.documentElement.lang = detail.localeKey;
        if (detail.localeKey === "de") {
            liveRegion$1.textContent = "Die Sprache der Webseite wurde auf Deutsch geändert.";
        }
        if (detail.localeKey === "en") {
            liveRegion$1.textContent = "The language of the page has been changed to English.";
        }
    }
};
document.addEventListener("mehrsprachigTranslated", handleMehrsprachigTranslated);
mehrsprachig({
    fallback: "de",
    sources: {
        de: "/data/de.json",
        en: "/data/en.json"
    }
});

const links = document.querySelectorAll("[data-scroll-target]");
const smoothScroll = ({ currentTarget }) => {
    if (currentTarget instanceof HTMLButtonElement) {
        const scrollTargetSelector = currentTarget.dataset.scrollTarget;
        if (scrollTargetSelector) {
            const scrollTargetElement = document.querySelector(scrollTargetSelector);
            scrollTargetElement?.scrollIntoView({ behavior: "smooth" });
            scrollTargetElement?.focus();
        }
    }
};
for (const link of links) {
    link.addEventListener("click", smoothScroll);
}

const images = document.querySelectorAll(".landing-image");
const visibleClass = "is-visible";
if (images.length > 0) {
    let current = images.item(0);
    current.classList.add(visibleClass);
    if (images.length > 1) {
        window.setInterval(() => {
            const next = current.nextElementSibling ?? images.item(0);
            current.classList.remove(visibleClass);
            next.classList.add(visibleClass);
            current = next;
        }, 7500);
    }
}

const i=Symbol.for("preact-signals");function t(){if(r>1){r--;return}let i,t=!1;while(void 0!==s){let o=s;s=void 0;f++;while(void 0!==o){const n=o.o;o.o=void 0;o.f&=-3;if(!(8&o.f)&&v(o))try{o.c();}catch(o){if(!t){i=o;t=!0;}}o=n;}}f=0;r--;if(t)throw i}let n,s;let r=0,f=0,e=0;function c(i){if(void 0===n)return;let t=i.n;if(void 0===t||t.t!==n){t={i:0,S:i,p:n.s,n:void 0,t:n,e:void 0,x:void 0,r:t};if(void 0!==n.s)n.s.n=t;n.s=t;i.n=t;if(32&n.f)i.S(t);return t}else if(-1===t.i){t.i=0;if(void 0!==t.n){t.n.p=t.p;if(void 0!==t.p)t.p.n=t.n;t.p=n.s;t.n=void 0;n.s.n=t;n.s=t;}return t}}function u(i){this.v=i;this.i=0;this.n=void 0;this.t=void 0;}u.prototype.brand=i;u.prototype.h=function(){return !0};u.prototype.S=function(i){if(this.t!==i&&void 0===i.e){i.x=this.t;if(void 0!==this.t)this.t.e=i;this.t=i;}};u.prototype.U=function(i){if(void 0!==this.t){const t=i.e,o=i.x;if(void 0!==t){t.x=o;i.e=void 0;}if(void 0!==o){o.e=t;i.x=void 0;}if(i===this.t)this.t=o;}};u.prototype.subscribe=function(i){return E(()=>{const t=this.value,o=n;n=void 0;try{i(t);}finally{n=o;}})};u.prototype.valueOf=function(){return this.value};u.prototype.toString=function(){return this.value+""};u.prototype.toJSON=function(){return this.value};u.prototype.peek=function(){const i=n;n=void 0;try{return this.value}finally{n=i;}};Object.defineProperty(u.prototype,"value",{get(){const i=c(this);if(void 0!==i)i.i=this.i;return this.v},set(i){if(i!==this.v){if(f>100)throw new Error("Cycle detected");this.v=i;this.i++;e++;r++;try{for(let i=this.t;void 0!==i;i=i.x)i.t.N();}finally{t();}}}});function d(i){return new u(i)}function v(i){for(let t=i.s;void 0!==t;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return !0;return !1}function l(i){for(let t=i.s;void 0!==t;t=t.n){const o=t.S.n;if(void 0!==o)t.r=o;t.S.n=t;t.i=-1;if(void 0===t.n){i.s=t;break}}}function y(i){let t,o=i.s;while(void 0!==o){const i=o.p;if(-1===o.i){o.S.U(o);if(void 0!==i)i.n=o.n;if(void 0!==o.n)o.n.p=i;}else t=o;o.S.n=o.r;if(void 0!==o.r)o.r=void 0;o=i;}i.s=t;}function a(i){u.call(this,void 0);this.x=i;this.s=void 0;this.g=e-1;this.f=4;}(a.prototype=new u).h=function(){this.f&=-3;if(1&this.f)return !1;if(32==(36&this.f))return !0;this.f&=-5;if(this.g===e)return !0;this.g=e;this.f|=1;if(this.i>0&&!v(this)){this.f&=-2;return !0}const i=n;try{l(this);n=this;const i=this.x();if(16&this.f||this.v!==i||0===this.i){this.v=i;this.f&=-17;this.i++;}}catch(i){this.v=i;this.f|=16;this.i++;}n=i;y(this);this.f&=-2;return !0};a.prototype.S=function(i){if(void 0===this.t){this.f|=36;for(let i=this.s;void 0!==i;i=i.n)i.S.S(i);}u.prototype.S.call(this,i);};a.prototype.U=function(i){if(void 0!==this.t){u.prototype.U.call(this,i);if(void 0===this.t){this.f&=-33;for(let i=this.s;void 0!==i;i=i.n)i.S.U(i);}}};a.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(let i=this.t;void 0!==i;i=i.x)i.t.N();}};Object.defineProperty(a.prototype,"value",{get(){if(1&this.f)throw new Error("Cycle detected");const i=c(this);this.h();if(void 0!==i)i.i=this.i;if(16&this.f)throw this.v;return this.v}});function _(i){const o=i.u;i.u=void 0;if("function"==typeof o){r++;const s=n;n=void 0;try{o();}catch(t){i.f&=-2;i.f|=8;g(i);throw t}finally{n=s;t();}}}function g(i){for(let t=i.s;void 0!==t;t=t.n)t.S.U(t);i.x=void 0;i.s=void 0;_(i);}function p(i){if(n!==this)throw new Error("Out-of-order effect");y(this);n=i;this.f&=-2;if(8&this.f)g(this);t();}function b(i){this.x=i;this.u=void 0;this.s=void 0;this.o=void 0;this.f=32;}b.prototype.c=function(){const i=this.S();try{if(8&this.f)return;if(void 0===this.x)return;const t=this.x();if("function"==typeof t)this.u=t;}finally{i();}};b.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1;this.f&=-9;_(this);l(this);r++;const i=n;n=this;return p.bind(this,i)};b.prototype.N=function(){if(!(2&this.f)){this.f|=2;this.o=s;s=this;}};b.prototype.d=function(){this.f|=8;if(!(1&this.f))g(this);};function E(i){const t=new b(i);try{t.c();}catch(i){t.d();throw i}return t.d.bind(t)}

const navigation = document.querySelector("[data-module~=navigation]");
const toggle = navigation?.querySelector("[data-navigation~=toggle]");
const liveRegion = document.querySelector("[data-live-region]");
const scrollBuffer = 50;
const isOpen = d(false);
let oldScrollY = window.scrollY;
E(() => {
    navigation?.classList.toggle("open", isOpen.value);
    toggle?.setAttribute("aria-expanded", String(isOpen.value));
    if (liveRegion) {
        liveRegion.textContent = isOpen.value ? "Navigation geöffnet." : "Navigation geschlossen.";
    }
});
toggle?.addEventListener("click", () => {
    isOpen.value = !isOpen.value;
});
// eslint-disable-next-line github/prefer-observers -- no way to do that here
window.addEventListener("scroll", () => {
    if (window.scrollY > oldScrollY + scrollBuffer) {
        navigation?.classList.add("hidden");
        oldScrollY = window.scrollY;
    }
    if (window.scrollY < oldScrollY - scrollBuffer) {
        navigation?.classList.remove("hidden");
        oldScrollY = window.scrollY;
    }
});
window.addEventListener("keydown", ({ key }) => {
    if (isOpen.value && key === "Escape") {
        isOpen.value = false;
    }
});
window.addEventListener("click", ({ target }) => {
    if (target instanceof HTMLElement && isOpen.value && !toggle?.contains(target)) {
        isOpen.value = false;
    }
});

const obfuscated = document.querySelectorAll("[data-obfuscate]");
const pairs = new Map([
    ["bWFpbHRvOmluZm9Ac3dpc3NwbGFudC5jaA==", {
            attribute: "obfuscateEsp",
            text: "SwissPlant eine E-Mail schreiben"
        }],
    ["bWFpbHRvOmluZm9AYWdyaXBsYW50LmNo", {
            attribute: "obfuscateEap",
            text: "AgriPlant eine E-Mail schreiben"
        }],
    ["bWFpbHRvOm0ubG9lZmZlbEBzd2lzc3BsYW50LmNo", {
            attribute: "obfuscateEml",
            text: "Martin Löffel eine E-Mail schreiben"
        }],
    ["bWFpbHRvOnQuYmF1bWFubkBzd2lzc3BsYW50LmNo", {
            attribute: "obfuscateEtb",
            text: "Telja Baumann eine E-Mail schreiben"
        }],
    ["bWFpbHRvOnMubG9lZmZlbEBzd2lzc3BsYW50LmNo", {
            attribute: "obfuscateEsl",
            text: "Sandro Löffel eine E-Mail schreiben"
        }],
    ["dGVsOiArNDEgMzIgMzEzIDUyIDEw", {
            attribute: "obfuscateT",
            text: "SwissPlant anrufen"
        }],
    ["dGVsOis0MTc5NjMxNDU1OQ==", {
            attribute: "obfuscateTml",
            text: "Martin Löffel anrufen"
        }],
    ["dGVsOis0MTc5ODE1MzgzNQ==", {
            attribute: "obfuscateTtb",
            text: "Telja Baumann anrufen"
        }],
    ["dGVsOis0MTc5NjQxNTIxMA==", {
            attribute: "obfuscateTsl",
            text: "Sandro Löffel anrufen"
        }]
]);
const sr = (link, text) => {
    const srTextElement = document.createElement("span");
    srTextElement.classList.add("sr-only");
    srTextElement.textContent = text;
    link.append(srTextElement);
};
const handleClick = (event) => {
    event.preventDefault();
    if (event.currentTarget instanceof HTMLAnchorElement && event.currentTarget.dataset.obfuscate) {
        window.location.href = window.atob(event.currentTarget.dataset.obfuscate);
    }
};
for (const obfuscatedElement of obfuscated) {
    const pair = pairs.get(obfuscatedElement.dataset.obfuscate ?? "");
    if (pair) {
        obfuscatedElement.addEventListener("click", handleClick);
        obfuscatedElement.dataset[pair.attribute] = "";
        sr(obfuscatedElement, pair.text);
    }
}

const domParser = new DOMParser();
const response = await fetch("/img/sprite.svg");
const spriteAsText = await response.text();
const { documentElement: spriteElement } = domParser.parseFromString(spriteAsText, "image/svg+xml");
spriteElement.classList.add("sr-only");
spriteElement.setAttribute("aria-hidden", "true");
document.body.append(spriteElement);
//# sourceMappingURL=script.js.map
