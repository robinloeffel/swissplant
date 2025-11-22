<script lang="ts">
  import { ContactLink } from "$components";
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

  interface TeamGridProps {
    members: Member[];
  }

  const { members }: TeamGridProps = $props();

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
