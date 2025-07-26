<script lang="ts">
  import ContactLink from "$components/contact-link.svelte";
  import barbara from "$img/employees/barbara.avif";
  import hansPeter from "$img/employees/hans-peter.avif";
  import ivan from "$img/employees/ivan.avif";
  import mariusz from "$img/employees/mariusz.avif";
  import markus from "$img/employees/markus.avif";
  import martin from "$img/employees/martin.avif";
  import miguel from "$img/employees/miguel.avif";
  import muhamet from "$img/employees/muhamet.avif";
  import sandro from "$img/employees/sandro.avif";
  import shpend from "$img/employees/shpend.avif";
  import telja from "$img/employees/telja.avif";
  import type { HTMLImgAttributes } from "svelte/elements";

  interface Member {
    name: string;
    position: string;
    image: HTMLImgAttributes;
    contact?: {
      email: string;
      phone: string;
    };
  }

  const members: Member[] = [
    {
      name: "Martin Löffel",
      position: "Geschäftsführer",
      image: {
        src: martin,
        alt: "Martin Loeffel"
      },
      contact: {
        email: "m.loeffel@swissplant.ch",
        phone: "+41 79 631 45 59"
      }
    },
    {
      name: "Sandro Löffel",
      position: "Stv. Geschäftsführer",
      image: {
        src: sandro,
        alt: "Sandro"
      },
      contact: {
        email: "s.loeffel@swissplant.ch",
        phone: "+41 79 641 52 10"
      }
    },
    {
      name: "Telja Baumann",
      position: "Empfang & Administration",
      image: {
        src: telja,
        alt: "Telja"
      },
      contact: {
        email: "t.baumann@swissplant.ch",
        phone: "+41 79 815 38 35"
      }
    },
    {
      name: "Ivan Gross",
      position: "Leiter Gewächshaus",
      image: {
        src: ivan,
        alt: "Ivan"
      }
    },
    {
      name: "Shpend Thaqi",
      position: "Leiter Produktion",
      image: {
        src: shpend,
        alt: "Shpend"
      }
    },
    {
      name: "Hans-Peter Schwab",
      position: "Transport",
      image: {
        src: hansPeter,
        alt: "Hans Peter"
      }
    },
    {
      name: "Mariusz Wronski",
      position: "Transport",
      image: {
        src: mariusz,
        alt: "Mariusz"
      }
    },
    {
      name: "Muhamet Duraku",
      position: "Produktion",
      image: {
        src: muhamet,
        alt: "Muhamet"
      }
    },
    {
      name: "Barbara Dubler",
      position: "Transport",
      image: {
        src: barbara,
        alt: "Barbara"
      }
    },
    {
      name: "Markus Niklaus",
      position: "Maschinenführer",
      image: {
        src: markus,
        alt: "Markus"
      }
    },
    {
      name: "Miguel Pereira",
      position: "Maschinenführer",
      image: {
        src: miguel,
        alt: "Miguel"
      }
    }
  ];

  const nameToAttribute = (name: string) => name.toLowerCase().replaceAll(" ", "-");
</script>

<section class="team-grid">
  <ul class="team-grid-list">
    {#each members as member (member.name)}
      <li class="team-grid-item">
        <img {...member.image} class="team-grid-item-image" />
        <div class="team-grid-item-info">
          <span class="team-grid-item-name">{member.name}</span>
          <span class="team-grid-item-position">{member.position}</span>

          {#if member.contact}
            <ContactLink
              data-umami-event={`team-email-click-${nameToAttribute(member.name)}`}
              href="mailto:{member.contact.email}"
            />
            <ContactLink
              data-umami-event={`team-phone-click-${nameToAttribute(member.name)}`}
              href="tel:{member.contact.phone}"
            />
          {/if}
        </div>
      </li>
    {/each}
  </ul>
</section>

<style lang="scss">
  .team-grid-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(215px, 1fr));
    gap: var(--space-16);
  }

  .team-grid-item {
    font-size: var(--type-16);
  }

  .team-grid-item-info {
    display: grid;
    padding: var(--space-8);
  }

  .team-grid-item-name {
    font-weight: bold;
  }

  .team-grid-item-image {
    border-radius: var(--space-16);
  }
</style>
