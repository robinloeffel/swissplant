<script lang="ts">
  import Content from "$components/content.svelte";
  import Hero from "$components/hero.svelte";
  import Icon from "$components/icon.svelte";
  import machine from "$img/photoshoot/machine.avif";
  import type { HTMLImgAttributes } from "svelte/elements";
  import type { PageProps } from "./$types";

  const images: HTMLImgAttributes[] = [
    {
      src: machine,
      alt: ""
    }
  ];

  const { data }: PageProps = $props();
</script>

<Hero {images} />
<Content>
  <h1>{data.title}</h1>
  <p>Wir sind zukunftsorientierte Gemüsejungpflanzenhersteller in Müntschemier im Berner Seeland. Wir kultivieren Jungpflanzen, die von Gemüsegärtnern in der ganzen Schweiz gepflanzt werden. Unsere 12 Mitarbeiter wiederspiegeln Qualität, Termintreue, Kundenzufriedenheit und machen unser Unternehmen einzigartig. Offenheit, Flexibilität und Anpassungsfähigkeit stehen bei uns an erster Stelle und prägen das freundliche und kollegiale Miteinander.</p>

  <hr />

  <ul>
    <li>
      <a href="/assets/annonce-betriebsleiter.pdf">
        <Icon name="document" size="small" />
        Betriebsleiter
      </a>
    </li>
  </ul>
</Content>
