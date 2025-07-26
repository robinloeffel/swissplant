<script lang="ts">
  import Article from "$components/article.svelte";
  import Hero from "$components/hero.svelte";
  import Icon from "$components/icon.svelte";
  import machine from "$img/photoshoot/machine.avif";
  import type { HTMLImgAttributes } from "svelte/elements";

  const images: HTMLImgAttributes[] = [
    {
      src: machine,
      alt: ""
    }
  ];
</script>

<main>
  <Hero {images} />

  <Article>
    <h1>Offene Stellen</h1>
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
  </Article>
</main>
