<script lang="ts">
  import { resolve } from "$app/paths";
  import { page } from "$app/state";
  import { Icon } from "$components";
  import { match as isLang } from "$params/lang";
  import { throttle } from "es-toolkit";
  import type { Attachment } from "svelte/attachments";
  import { on } from "svelte/events";

  let prevScrollY = $state.raw(0);
  let isHidden = $state.raw(false);
  let isOpen = $state.raw(false);
  let navigationRef: HTMLElement;

  const lang = $derived(
    isLang(page.params.lang) ? page.params.lang : "de"
  );
  const route = $derived(page.route.id ?? "/[lang=lang]");

  const toggleSrOnlyText = $derived({
    de: isOpen ? "Das Navigationsmenü zuklappen." : "Das Navigationsmenü aufklappen.",
    en: isOpen ? "Close the navigation menu." : "Open the navigation menu."
  }[lang]);

  const homeLinkSrOnlyText = $derived({
    de: "Zur Startseite gehen.",
    en: "Go to the homepage."
  }[lang]);

  const mainNavigationAriaLabel = $derived({
    de: "Hauptnavigation",
    en: "Main navigation"
  }[lang]);

  const navigationItems = [
    {
      de: "Firma",
      en: "Company",
      event: "navigation-bar-link-company",
      route: "/[lang=lang]/firma"
    },
    {
      de: "Team",
      en: "Team",
      event: "navigation-bar-link-team",
      route: "/[lang=lang]/team"
    },
    {
      de: "Angebot",
      en: "Portfolio",
      event: "navigation-bar-link-portfolio",
      route: "/[lang=lang]/angebot"
    },
    {
      de: "Partner",
      en: "Partners",
      event: "navigation-bar-link-partners",
      route: "/[lang=lang]/partner"
    },
    {
      de: "Kontakt",
      en: "Contact",
      event: "navigation-bar-link-contact",
      route: "/[lang=lang]/kontakt"
    },
    {
      de: "Jobs",
      en: "Jobs",
      event: "navigation-bar-link-jobs",
      route: "/[lang=lang]/jobs"
    }
  ];

  const toggle = () => {
    isOpen = !isOpen;
  };

  const handleOutsideClick: EventListener = ({ target }) => {
    if (isOpen && target instanceof HTMLElement && !navigationRef.contains(target)) {
      isOpen = false;
    }
  };

  const handleWindowScroll = () => {
    const newValue = window.scrollY > prevScrollY && window.scrollY > 100;

    if (isHidden !== newValue) {
      isHidden = newValue;

      if (isHidden && isOpen) {
        isOpen = false;
      }
    }

    prevScrollY = window.scrollY;
  };

  const handleItemClick = () => {
    isOpen = false;
  };

  const mounted: Attachment<Window> = (element) => {
    prevScrollY = element.scrollY;

    const offOutsideClick = on(element, "click", handleOutsideClick);
    const offScrollDir = on(element, "scroll", throttle(handleWindowScroll, 100));

    return () => {
      offOutsideClick();
      offScrollDir();
    };
  };
</script>

<svelte:window {@attach mounted} />

<nav
  bind:this={navigationRef}
  class={["navigation", { open: isOpen, hidden: isHidden }]}
  aria-label={mainNavigationAriaLabel}
>
  <div class="navigation-bar">
    <a
      class="navigation-bar-logo"
      data-sveltekit-noscroll
      data-umami-event="navigation-bar-link-home"
      href={resolve("/[lang=lang]", { lang })}
      onclick={handleItemClick}
    >
      <span class="sr-only">{homeLinkSrOnlyText}</span>
      <div class="header-navigation-logo">
        <Icon name="swissplant-bare" />
      </div>
    </a>
    <button
      id="navigation-bar-toggle"
      class="navigation-bar-toggle"
      aria-controls="navigation-expando"
      aria-expanded={isOpen}
      data-umami-event={isOpen ? "navigation-bar-toggle-close" : "navigation-bar-toggle-open"}
      onclick={toggle}
      type="button"
    >
      <span class="sr-only">{toggleSrOnlyText}</span>
      <div class="navigation-bar-toggle-icon-menu">
        <Icon name="menu" size="small" />
      </div>
      <div class="navigation-bar-toggle-icon-x">
        <Icon name="x" size="small" />
      </div>
    </button>
  </div>
  <div
    id="navigation-expando"
    class="navigation-expando"
  >
    <ul class="navigation-list">
      {#each navigationItems as item (item.route)}
        <li class="navigation-item">
          <a
            class="navigation-link"
            class:active={item.route === route}
            data-umami-event={item.event}
            href={resolve(item.route, { lang })}
            onclick={handleItemClick}
          >{item[lang]}</a>
        </li>
      {/each}
      <li class="navigation-item">
        <a
          class="navigation-language-toggle"
          class:active={page.params.lang === "de"}
          data-sveltekit-noscroll
          data-umami-event="change-language-to-de"
          href={resolve(route, { lang: "de" })}
        >DE</a>
        <a
          class="navigation-language-toggle"
          class:active={page.params.lang === "en"}
          data-sveltekit-noscroll
          data-umami-event="change-language-to-en"
          href={resolve(route, { lang: "en" })}
        >EN</a>
      </li>
    </ul>
  </div>
</nav>

<style lang="scss">
  .navigation {
    position: fixed;
    inset: var(--space-16) 0 auto;
    z-index: 9;
    width: min(100% - var(--space-32), 480px);
    margin: auto;
    background-color: var(--color-white-90);
    border: 1px solid var(--color-black-05);
    border-radius: var(--space-16);
    box-shadow: 0 var(--space-4) var(--space-8) var(--color-black-05);
    backdrop-filter: blur(var(--space-8));
    transition:
      scale 0.3s ease-in-out,
      translate 0.3s ease-in-out;

    &.hidden {
      scale: 0.9;
      translate: 0 calc(-100% - var(--space-16) - var(--space-8));
    }

    a {
      text-decoration: none;
    }
  }

  .navigation-bar,
  .navigation-list {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .navigation-bar {
    display: flex;
    justify-content: space-between;
    padding: var(--space-32);
  }

  .navigation-bar-logo,
  .navigation-bar-toggle {
    display: grid;
    place-content: center;
  }

  .navigation-bar-toggle {
    display: grid;
    grid-template-areas: "all";
    place-items: center;
    width: var(--space-32);
    height: var(--space-32);
    background: 0;
    border: 0;
  }

  .navigation-expando {
    display: grid;
    grid-template-rows: 0fr;
    contain: content;
    transition: grid-template-rows 0.3s ease-in-out;

    .open & {
      grid-template-rows: 1fr;
    }
  }

  .navigation-bar-toggle-icon-menu,
  .navigation-bar-toggle-icon-x {
    grid-area: all;
    width: var(--space-24);
    height: var(--space-24);
    transition:
      scale 0.3s ease-in-out,
      opacity 0.3s ease-in-out;
  }

  .open .navigation-bar-toggle-icon-menu {
    opacity: 0;
    scale: 0;
  }

  .navigation-bar-toggle-icon-x {
    opacity: 0;
    scale: 0;

    .open & {
      opacity: 1;
      scale: 1;
    }
  }

  .navigation-list {
    display: grid;
    visibility: hidden;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
    transition: visibility 0.3s ease-in-out;

    .open & {
      visibility: unset;
    }
  }

  .navigation-item {
    &:nth-child(-n + 2) {
      border-top: 1px solid var(--color-black-05);
    }

    &:not(:last-child) {
      border-bottom: 1px solid var(--color-black-05);
    }

    &:nth-child(odd) {
      border-right: 0.5px solid var(--color-black-05);
    }

    &:nth-child(even) {
      border-left: 0.5px solid var(--color-black-05);
    }

    &:last-child {
      grid-column: span 2;
      text-align: center;
      border: 0;
    }
  }

  .navigation-link {
    display: block;
    padding: var(--space-16);
    text-align: center;
  }

  .navigation-language-toggle {
    display: inline-block;
    padding: var(--space-16);
    background: 0;
    border: 0;
  }

  .navigation-link,
  .navigation-language-toggle {
    &.active {
      // safari workaround
      text-decoration-line: underline;
      text-decoration-thickness: 2px;
      text-decoration-color: var(--color-brand);
    }
  }

  .header-navigation-logo {
    width: 121px;
    height: var(--space-32);
    color: var(--color-brand);
  }
</style>
