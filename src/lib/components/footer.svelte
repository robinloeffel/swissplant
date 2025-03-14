<script lang="ts">
  import Icon from "$components/icon.svelte";
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
      <p class="footer-text">
        &copy; SwissPlant GmbH 2025
      </p>
    </div>
    <div class="footer-content-center">
      <p class="footer-text">
        Spitzallmendweg 11c<br />
        CH-3225 Müntschemier
      </p>
      <p class="footer-text">
        <a data-umami-event="footer-swissplant-email" href="mailto:info@swissplant.ch">
          info@swissplant.ch
        </a>
        <br />
        <a data-umami-event="footer-agriplant-email" href="mailto:info@agriplant.ch">
          info@agriplant.ch
        </a>
      </p>
    </div>
    <div class="footer-content-right">
      <p class="footer-text">
        Montag bis Freitag<br />
        07:30 &ndash; 11:45 Uhr<br />
        13:30 &ndash; 17:30 Uhr
      </p>
      <p class="footer-text">
        <a data-umami-event="footer-phone" href="tel:+41 32 313 52 10">
          +41 32 313 52 10
        </a>
      </p>
    </div>
  </div>
  <hr class="footer-hr" />
  <nav class="footer-navigation" aria-label="Navigation in der Fusszeile">
    <ul class="footer-navigation-list">
      <li class="footer-navigation-item">
        <a data-umami-event="footer-link-home" href=".">Home</a>
      </li>
      <li class="footer-navigation-item">
        <a data-umami-event="footer-link-company" href="firma">Firma</a>
      </li>
      <li class="footer-navigation-item">
        <a data-umami-event="footer-link-team" href="team">Team</a>
      </li>
      <li class="footer-navigation-item">
        <a data-umami-event="footer-link-portfolio" href="angebot">Angebot</a>
      </li>
      <li class="footer-navigation-item">
        <a data-umami-event="footer-link-partners" href="partner">Partner</a>
      </li>
      <li class="footer-navigation-item">
        <a data-umami-event="footer-link-contact" href="kontakt">Kontakt</a>
      </li>
      <li class="footer-navigation-item">
        <a data-umami-event="footer-link-imprint" href="impressum">Impressum</a>
      </li>
      <li class="footer-navigation-item">
        <a data-umami-event="footer-link-privacy" href="datenschutz">Datenschutz</a>
      </li>
      <li class="footer-navigation-item">
        <a data-umami-event="footer-link-jobs" href="jobs">Jobs</a>
      </li>
    </ul>
  </nav>
  <div class="footer-content">
    <p class="footer-text">
      Entwickelt und gestaltet von <a href="https://robinloeffel.ch">Robin Löffel</a>
    </p>
  </div>
</footer>

<style lang="scss">
  @use "$styles/variables";

  .footer {
    padding: 75px;
    font-size: 0.8rem;
    color: variables.$color-white;
    background-color: variables.$color-text;
    border-top: 5px solid variables.$color-brand;

    a {
      color: inherit;
    }

    > * {
      width: min(900px, 100%);
      margin: auto;
    }
  }

  .footer-hr {
    height: 2px;
    margin: 50px auto;
    background-color: variables.$color-white-05;
  }

  .footer-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    place-items: center start;
  }

  .footer-content > .footer-text {
    grid-column: 1 / -1;
    justify-self: center;
    text-align: center;
    text-wrap: wrap;
  }

  .footer-navigation {
    margin-bottom: variables.$space-big;
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
    color: variables.$color-brand;
  }
</style>
