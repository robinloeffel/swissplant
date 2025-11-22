<script lang="ts">
  import { Content, Hero, Icon, Richtext } from "$components";
  import type { PageProps } from "./$types";
  const { data }: PageProps = $props();
</script>

<Hero {...data.hero} />
<Content>
  <h1>{data.heading}</h1>
  <Richtext blocks={data.richtext} />
  <hr />
  <ul>
    <li>
      <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
      <a href="/assets/annonce-betriebsleiter.pdf">
        <Icon name="document" size="small" /> Betriebsleiter
      </a>
    </li>
  </ul>
</Content>
