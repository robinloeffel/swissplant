<script lang="ts">
  import Article from "$components/article.svelte";
  import Hero from "$components/hero.svelte";
  import Iframe from "$components/iframe.svelte";
  import one from "$img/aerials/1.jpg";
  import type { HTMLImgAttributes } from "svelte/elements";

  const images: HTMLImgAttributes[] = [
    {
      src: one,
      alt: ""
    }
  ];
</script>

<main>
  <Hero {images} />

  <Article>
    <h1>Kontakt</h1>

    <h2>Von Bern her</h2>
    <p>Autobahn Bern &ndash; Neuenburg Ausfahrt Kerzers anschliessend Richtung Neuenburg. In Müntschemier Richtung Bahnhof. Firmenwegweiser beachten.</p>

    <h2>Von Neuchâtel her</h2>
    <p>Richtung Ins &ndash; Müntschemier anschliessend in Müntschemier Richtung Bahnhof. Firmenwegweiser beachten.</p>

    <h2>Auf der Karte</h2>
    <Iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87077.36113973339!2d7.146476148343918!3d46.99768327720842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e1186bcd0321b%3A0x438446635d8d02ab!2sSwissPlant%20GmbH!5e0!3m2!1sen!2sch!4v1631345560961!5m2!1sen!2sch"
      title="Google Maps"
    />
  </Article>
</main>
