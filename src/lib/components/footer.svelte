<script lang="ts">
  import { resolve } from "$app/paths";
  import ContactLink from "$components/contact-link.svelte";
  import Icon from "$components/icon.svelte";

  interface FooterProps {
    lang: string;
  }

  const { lang }: FooterProps = $props();
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
      <p class="footer-text">
        Montag bis Freitag<br />
        07:30 &ndash; 11:45 Uhr<br />
        13:30 &ndash; 17:30 Uhr
      </p>
      <p class="footer-text">
        <ContactLink data-umami-event="footer-phone" href="tel:+41 32 313 52 10" />
      </p>
    </div>
  </div>
  <hr class="footer-hr" />
  <nav class="footer-navigation" aria-label="Navigation in der Fusszeile">
    <ul class="footer-navigation-list">
      <li class="footer-navigation-item">
        <a
          data-umami-event="footer-link-home"
          href={resolve("/[lang=lang]", { lang })}
        >Home</a>
      </li>
      <li class="footer-navigation-item">
        <a
          data-umami-event="footer-link-company"
          href={resolve("/[lang=lang]/firma", { lang })}
        >Firma</a>
      </li>
      <li class="footer-navigation-item">
        <a
          data-umami-event="footer-link-team"
          href={resolve("/[lang=lang]/team", { lang })}
        >Team</a>
      </li>
      <li class="footer-navigation-item">
        <a
          data-umami-event="footer-link-portfolio"
          href={resolve("/[lang=lang]/angebot", { lang })}
        >Angebot</a>
      </li>
      <li class="footer-navigation-item">
        <a
          data-umami-event="footer-link-partners"
          href={resolve("/[lang=lang]/partner", { lang })}
        >Partner</a>
      </li>
      <li class="footer-navigation-item">
        <a
          data-umami-event="footer-link-contact"
          href={resolve("/[lang=lang]/kontakt", { lang })}
        >Kontakt</a>
      </li>
      <li class="footer-navigation-item">
        <a
          data-umami-event="footer-link-imprint"
          href={resolve("/[lang=lang]/impressum", { lang })}
        >Impressum</a>
      </li>
      <li class="footer-navigation-item">
        <a
          data-umami-event="footer-link-privacy"
          href={resolve("/[lang=lang]/datenschutz", { lang })}
        >Datenschutz</a>
      </li>
      <li class="footer-navigation-item">
        <a
          data-umami-event="footer-link-jobs"
          href={resolve("/[lang=lang]/jobs", { lang })}
        >Jobs</a>
      </li>
    </ul>
  </nav>
  <div class="footer-content">
    <p class="footer-text">
      &copy; SwissPlant GmbH &amp; AgriPlant AG, 2025
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

  .footer-content > .footer-text {
    grid-column: 1 / -1;
    justify-self: center;
    text-align: center;
    text-wrap: wrap;
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
      content: " — ";
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
