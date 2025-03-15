<script lang="ts">
  import ContactLink from "$components/contact-link.svelte";
  import barbara from "$img/employees/barbara.jpg";
  import hansPeter from "$img/employees/hans-peter.jpg";
  import ivan from "$img/employees/ivan.jpg";
  import mariusz from "$img/employees/mariusz.jpg";
  import markus from "$img/employees/markus.jpg";
  import martin from "$img/employees/martin.jpg";
  import miguel from "$img/employees/miguel.jpg";
  import muhamet from "$img/employees/muhamet.jpg";
  import sandro from "$img/employees/sandro.jpg";
  import shpend from "$img/employees/shpend.jpg";
  import telja from "$img/employees/telja.jpg";
  import type { HTMLImgAttributes } from "svelte/elements";

  interface Member {
    name: string;
    position: string;
    contatct?: {
      email: string;
      phone: string;
    };
    image: HTMLImgAttributes;
  }

  const members: Member[] = [
    {
      name: "Martin Löffel",
      position: "Geschäftsführer",
      image: {
        src: martin,
        alt: "Martin Loeffel"
      },
      contatct: {
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
      contatct: {
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
      contatct: {
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

          {#if member.contatct}
            <ContactLink
              data-umami-event={`team-email-click-${nameToAttribute(member.name)}`}
              value="mailto:{member.contatct.email}"
            />
            <ContactLink
              data-umami-event={`team-phone-click-${nameToAttribute(member.name)}`}
              value="tel:{member.contatct.phone}"
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
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1rem;
  }

  .team-grid-item {
    font-size: 90%;
  }

  .team-grid-item-info {
    display: grid;
    padding: 0.5rem;
  }

  .team-grid-item-name {
    font-weight: bold;
  }
</style>
