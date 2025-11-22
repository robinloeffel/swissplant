<script lang="ts">
  import { ContactLink } from "$components";
  import { kebabCase } from "es-toolkit";
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

  const makeEvent = (name: string, type: "phone" | "email") => (
    `team-${type}-${kebabCase(name)}`
  );
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
              data-umami-event={makeEvent(member.name, "email")}
              href="mailto:{member.contact.email}"
            />
            <ContactLink
              data-umami-event={makeEvent(member.name, "phone")}
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
    aspect-ratio: 1;
    border-radius: var(--space-16);
    object-fit: cover;
  }
</style>
