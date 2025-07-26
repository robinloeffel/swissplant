<script lang="ts">
  import { page } from "$app/state";
  import Icon from "$components/icon.svelte";

  let isOpen = $state(false);
  let navigationRef: HTMLElement;

  const toggle = () => {
    isOpen = !isOpen;
  };

  const handleWindowClick = ({ target }: MouseEvent) => {
    if (
      isOpen
      && target instanceof HTMLElement
      && !navigationRef.contains(target)
    ) {
      isOpen = false;
    }
  };

  const handleItemClick = () => {
    isOpen = false;
  };
</script>

<svelte:window onclick={handleWindowClick} />

<nav
  bind:this={navigationRef}
  class="navigation"
  class:open={isOpen}
  aria-label="Hauptnavigation"
>
  <div class="navigation-bar">
    <a
      class="navigation-bar-logo"
      data-umami-event="navigation-bar-link-home"
      href="./"
      onclick={handleItemClick}
    >
      <span class="sr-only">Zur Startseite gehen.</span>
      <div class="header-navigation-logo">
        <Icon name="swissplant-bare" />
      </div>
    </a>
    <button
      id="navigation-bar-toggle"
      class="navigation-bar-toggle"
      aria-controls="navigation-expando"
      aria-expanded={isOpen}
      data-umami-event="navigation-bar-toggle"
      onclick={toggle}
      type="button"
    >
      <div class="sr-only">
        {#if isOpen}
          <span>Das Navigationsmenü zuklappen.</span>
        {:else}
          <span>Das Navigationsmenü aufklappen.</span>
        {/if}
      </div>
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
      <li class="navigation-item">
        <a
          class="navigation-link"
          class:active={page.route.id?.includes("/firma")}
          data-umami-event="navigation-bar-link-company"
          href="firma"
          onclick={handleItemClick}
        >
          Firma
        </a>
      </li>
      <li class="navigation-item">
        <a
          class="navigation-link"
          class:active={page.route.id?.includes("/team")}
          data-umami-event="navigation-bar-link-team"
          href="team"
          onclick={handleItemClick}
        >
          Team
        </a>
      </li>
      <li class="navigation-item">
        <a
          class="navigation-link"
          class:active={page.route.id?.includes("/angebot")}
          data-umami-event="navigation-bar-link-portfolio"
          href="angebot"
          onclick={handleItemClick}
        >
          Angebot
        </a>
      </li>
      <li class="navigation-item">
        <a
          class="navigation-link"
          class:active={page.route.id?.includes("/partner")}
          data-umami-event="navigation-bar-link-partners"
          href="partner"
          onclick={handleItemClick}
        >
          Partner
        </a>
      </li>
      <li class="navigation-item">
        <a
          class="navigation-link"
          class:active={page.route.id?.includes("/kontakt")}
          data-umami-event="navigation-bar-link-contact"
          href="kontakt"
          onclick={handleItemClick}
        >
          Kontakt
        </a>
      </li>
      <li class="navigation-item">
        <a
          class="navigation-link"
          class:active={page.route.id?.includes("/jobs")}
          data-umami-event="navigation-bar-link-jobs"
          href="jobs"
          onclick={handleItemClick}
        >
          Jobs
        </a>
      </li>
      <li class="navigation-item">
        <button
          class="navigation-language-toggle"
          data-umami-event="navigation-bar-change-lang-de"
          type="button"
        >
          <span class="sr-only">Sprache der Webseite auf Deutsch wechseln.</span>
          <span aria-hidden="true">DE</span>
        </button>
        <button
          class="navigation-language-toggle"
          data-umami-event="navigation-bar-change-lang-en"
          type="button"
        >
          <span class="sr-only">Sprache der Webseite auf Englisch wechseln.</span>
          <span aria-hidden="true">EN</span>
        </button>
      </li>
    </ul>
  </div>
</nav>

<style lang="scss">
  @forward "$styles/utils";

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
    background-blend-mode: soft-light;
    isolation: isolate;
    backdrop-filter: blur(var(--space-8));
    transition: translate 0.3s ease-in-out;
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
    place-items: center;
    width: var(--space-32);
    height: var(--space-32);
    background: 0;
    border: 0;
  }

  .navigation-expando {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.3s ease-in-out;
    will-change: grid-template-rows;

    .open & {
      grid-template-rows: 1fr;
    }
  }

  .navigation-bar-toggle-icon-menu,
  .navigation-bar-toggle-icon-x {
    grid-area: 1 / 1 / 1 / 1;
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
    text-decoration: none;

    &.active {
      text-decoration: underline solid var(--color-brand);
    }
  }

  .navigation-language-toggle {
    display: inline-block;
    padding: var(--space-16);
    background: 0;
    border: 0;
  }

  .header-navigation-logo {
    width: 121px;
    height: var(--space-32);
    color: var(--color-brand);
  }
</style>
