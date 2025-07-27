<script lang="ts">
  import Content from "$components/content.svelte";
  import Hero from "$components/hero.svelte";
  import Iframe from "$components/iframe.svelte";
  import crates from "$img/photoshoot/crates.avif";
  import type { HTMLImgAttributes } from "svelte/elements";
  import type { PageProps } from "./$types";

  const images: HTMLImgAttributes[] = [
    {
      src: crates,
      alt: ""
    }
  ];

  const { data }: PageProps = $props();
</script>

<Hero {images} />
<Content>
  <h1>{data.title}</h1>

  <table>
    <tbody>
      <tr>
        <td>3.2cm-Einzeltopf</td>
        <td>Buntsalate, Nüssler, Sellerie und Lauch</td>
      </tr>
      <tr>
        <td>3.2cm-Doppeltopf</td>
        <td>Buntsalate, Nüssler, Sellerie und Lauch</td>
      </tr>
      <tr>
        <td>3.7cm-Einzeltopf</td>
        <td>Buntsalate, Nüssler, Sellerie und Lauch</td>
      </tr>
      <tr>
        <td>3.7cm-Riegeltopf</td>
        <td>Buntsalate, Sellerie und Lauch</td>
      </tr>
      <tr>
        <td>4cm-Einzeltopf</td>
        <td>Buntsalate, Nüssler, Sellerie und Lauch</td>
      </tr>
      <tr>
        <td>4cm-Riegeltopf</td>
        <td>Buntsalate, Sellerie und Lauch</td>
      </tr>
      <tr>
        <td>5cm-Einzeltopf</td>
        <td>Buntsalate</td>
      </tr>
      <tr>
        <td>6cm-Geklebt</td>
        <td>Zucchetti</td>
      </tr>
      <tr>
        <td>Superseedling</td>
        <td>Lauch und Fenchel</td>
      </tr>
      <tr>
        <td>G195</td>
        <td>Kohlarten und Sellerie</td>
      </tr>
      <tr>
        <td>G280</td>
        <td>Kohlarten und Sellerie</td>
      </tr>
      <tr>
        <td>PT770</td>
        <td>Lauch- und Kohlarten</td>
      </tr>
      <tr>
        <td>TQ 10.5</td>
        <td>Warmhauspflanzen Hobbybereich unveredelt</td>
      </tr>
    </tbody>
  </table>

  <p>
    Alle Topfvarianten (3.2cm &ndash; 6cm) werden in unserem Haus produziert, die übrigen Arten lassen wir von unseren holländischen Partnern herstellen. Wir bieten auch Warmhauspflanzen in verschiedenen Varianten an. Über unser reichhaltiges Jungpflanzensortiment informieren wir Sie gerne. Für kundenspezifische Auskünfte oder Fragen steht Ihnen unser Verkaufspersonal jederzeit zur Verfügung.
  </p>

  <Iframe
    allow="fullscreen; picture-in-picture"
    ar={16 / 9}
    src="https://www.youtube-nocookie.com/embed/H2mMli5KiKY"
    title="SwissPlant: PlantTape im Einsatz"
  />
</Content>
