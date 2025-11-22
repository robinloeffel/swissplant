<script lang="ts">
  import { resolve } from "$app/paths";
  import { page } from "$app/state";
  import { ContactLink, Icon } from "$components";

  const pageLang = $derived.by<App.Lang>(() => {
    const { lang } = page.params;
    return lang === "de" || lang === "en" ? lang : "de";
  });

  const openingHours = $derived.by(() => ({
    de: "Montag bis Freitag\n07:30–11:45 Uhr\n13:30–17:30 Uhr",
    en: "Mondays to Fridays\n07:30–11:45\n13:30–17:30"
  }[pageLang]));

  const navigationItems = [
    {
      de: {
        label: "Home"
      },
      en: {
        label: "Home"
      },
      event: "footer-link-home",
      route: "/[lang=lang]"
    },
    {
      de: {
        label: "Firma"
      },
      en: {
        label: "Company"
      },
      event: "footer-link-company",
      route: "/[lang=lang]/firma"
    },
    {
      de: {
        label: "Team"
      },
      en: {
        label: "Team"
      },
      event: "footer-link-team",
      route: "/[lang=lang]/team"
    },
    {
      de: {
        label: "Angebot"
      },
      en: {
        label: "Portfolio"
      },
      event: "footer-link-portfolio",
      route: "/[lang=lang]/angebot"
    },
    {
      de: {
        label: "Partner"
      },
      en: {
        label: "Partners"
      },
      event: "footer-link-partners",
      route: "/[lang=lang]/partner"
    },
    {
      de: {
        label: "Kontakt"
      },
      en: {
        label: "Contact"
      },
      event: "footer-link-contact",
      route: "/[lang=lang]/kontakt"
    },
    {
      de: {
        label: "Impressum"
      },
      en: {
        label: "Imprint"
      },
      event: "footer-link-imprint",
      route: "/[lang=lang]/impressum"
    },
    {
      de: {
        label: "Datenschutz"
      },
      en: {
        label: "Privacy"
      },
      event: "footer-link-privacy",
      route: "/[lang=lang]/datenschutz"
    },
    {
      de: {
        label: "Jobs"
      },
      en: {
        label: "Jobs"
      },
      event: "footer-link-jobs",
      route: "/[lang=lang]/jobs"
    }
  ];
</script>

<footer class="footer">
  <div class="footer-content">
    <div class="footer-content-left" aria-hidden="true">
      <div class="footer-logo">
        <Icon name="swissplant-bare" />
      </div>
      <div class="footer-logo">
        <Icon name="agriplant-bare" />
      </div>
    </div>
    <div class="footer-content-center">
      <p class="footer-text">
        Spitzallmendweg 11c<br />
        CH-3225 Müntschemier
      </p>
      <p class="footer-text">
        <ContactLink data-umami-event="footer-swissplant-email" href="mailto:info@swissplant.ch" />
        <br />
        <ContactLink data-umami-event="footer-agriplant-email" href="mailto:info@agriplant.ch" />
      </p>
    </div>
    <div class="footer-content-right">
      <p class="footer-text footer-opening-hours">
        {openingHours}
      </p>
      <p class="footer-text">
        <ContactLink data-umami-event="footer-phone" href="tel:+41 32 313 52 10" />
      </p>
    </div>
  </div>
  <hr class="footer-hr" />
  <nav class="footer-navigation" aria-label="Navigation in der Fusszeile">
    <ul class="footer-navigation-list">
      {#each navigationItems as item (item.route)}
        <li class="footer-navigation-item">
          <a data-umami-event={item.event} href={resolve(item.route, { lang: pageLang })}>
            {item[pageLang].label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
  <div class="footer-content">
    <p class="footer-text footer-copyright">
      &copy; SwissPlant GmbH &amp; AgriPlant AG, 2026
    </p>
  </div>
</footer>

<style lang="scss">
  @use "$styles/media-queries";

  .footer {
    padding: var(--space-64);
    font-size: var(--type-16);
    color: var(--color-white);
    background-color: var(--color-text);
    border-top: 5px solid var(--color-brand);

    > * {
      width: min(900px, 100%);
      margin: auto;
    }
  }

  .footer-hr {
    margin: var(--space-48) auto;
  }

  .footer-content {
    display: grid;
    gap: var(--space-16);
    place-items: center start;

    @include media-queries.above-phone {
      grid-template-columns: repeat(2, 1fr);
    }

    @include media-queries.above-tablet {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  * + .footer-text {
    margin-top: var(--space-8);
  }

  .footer-opening-hours {
    white-space: pre-line;
  }

  .footer-content > .footer-text {
    grid-column: 1 / -1;
    justify-self: center;
    text-align: center;
    text-wrap: wrap;

    &.footer-copyright {
      text-wrap: balance;
    }
  }

  .footer-navigation {
    margin-bottom: var(--space-32);
  }

  .footer-navigation-list {
    padding: 0;
    margin: 0;
    text-align: center;
    list-style: none;
  }

  .footer-navigation-item {
    display: inline-block;

    &:not(:last-child)::after {
      margin: 0 var(--space-8);
      content: "—";
    }
  }

  .footer-logo {
    width: 100px;
    height: 30px;
    color: var(--color-brand);

    & + & {
      margin-top: var(--space-4);
    }
  }
</style>
