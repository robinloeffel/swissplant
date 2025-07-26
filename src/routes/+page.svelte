<script lang="ts">
  import Hero from "$components/hero.svelte";
  import SplitTile, { type Props as SplitTileProps } from "$components/split-tile.svelte";
  import one from "$img/aerials/1.avif";
  import two from "$img/aerials/2.avif";
  import crates from "$img/photoshoot/crates.avif";
  import machine from "$img/photoshoot/machine.avif";
  import tinu from "$img/photoshoot/tinu.avif";
  import type { HTMLImgAttributes } from "svelte/elements";

  const images: HTMLImgAttributes[] = [
    {
      src: one,
      alt: "SwissPlant from above"
    },
    {
      src: two,
      alt: "SwissPlant from above"
    }
  ];

  const splitTiles: SplitTileProps[] = [
    {
      type: "image",
      even: false,
      image: {
        src: tinu,
        alt: "Martin Löffel, Gründer der SwissPlant AG."
      },
      title: "Wer wir sind",
      description: "Die Firma SwissPlant GmbH ist Verkaufsstelle für Gemüsejungpflanzen der Firmen AgriPlant AG Schweiz und Gipmans Holland.",
      cta: {
        label: "Über uns",
        url: "firma"
      }
    },
    {
      type: "image",
      even: true,
      image: {
        src: crates,
        alt: "Kisten mit verschiedenen Gemüsesetzlingen."
      },
      title: "Was wir Ihnen bieten",
      description: "Unser Produktionsstandort der Firma AgriPlant AG befindet sich im Berner Seeland. Die zentrale Lage der Firma bietet uns die Möglichkeit Sie schnell und kompetent zu beliefern.",
      cta: {
        label: "Unser Angebot",
        url: "angebot"
      }
    },
    {
      type: "image",
      even: false,
      image: {
        src: machine,
        alt: "Eine Maschine, die Gemüsejungpflanzen herstellt."
      },
      title: "Mit wem wir arbeiten",
      description: "Die Firma Gipmans aus Holland beliefert uns als Sortimentsergänzung mit Warmhaus- und Speedypflanzen.",
      cta: {
        label: "Unsere Partner",
        url: "partner"
      }
    },
    {
      type: "iframe",
      even: true,
      iframe: {
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87077.36113973339!2d7.146476148343918!3d46.99768327720842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e1186bcd0321b%3A0x438446635d8d02ab!2sSwissPlant%20GmbH!5e0!3m2!1sen!2sch!4v1631345560961!5m2!1sen!2sch",
        title: "Google Maps",
        ar: 4 / 3
      },
      title: "Wie Sie uns erreichen",
      description: "Wir stehen natürlich gerne für allfällige Informationen und Ratschläge zur Verfügung. Egal, ob E-Mail, Telefon oder vor Ort.",
      cta: {
        label: "Kontakt",
        url: "kontakt"
      }
    }
  ];
</script>

<Hero big={true} {images} />

{#each splitTiles as splitTile (splitTile.title)}
  <SplitTile {...splitTile} />
{/each}
