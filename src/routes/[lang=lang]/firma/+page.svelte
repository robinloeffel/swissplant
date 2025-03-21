<script lang="ts">
  import Article from "$components/article.svelte";
  import Hero from "$components/hero.svelte";
  import Iframe from "$components/iframe.svelte";
  import two from "$img/aerials/2.jpg";
  import type { HTMLImgAttributes } from "svelte/elements";

  const images: HTMLImgAttributes[] = [
    {
      src: two,
      alt: ""
    }
  ];
</script>

<main>
  <Hero {images} />

  <Article>
    <h1>Firma</h1>

    <Iframe
      allow="fullscreen; picture-in-picture"
      ar={16 / 9}
      src="https://www.youtube-nocookie.com/embed/M3-n0Gf2f2c"
      title="SwissPlant: Gemüsebau im Berner Seeland"
    />

    <p>
      Den Anfang nehmen all diese Gemüse und Salate als Jungpflanzen, die von der Firma AgriPlant AG in Müntschemier angezogen werden. Geschäftsführer unserer Firmen Martin Löffel, fasst den Weg der Keimlinge bis hin zu ausgewachsenen Pflanzen so zusammen: «Wir stehen als Zulieferbetrieb der Gemüsebaubetriebe am Anfang der Produktionskette und kultivieren die Jungpflanzen, die anschliessend von den Gemüsegärtnern gepflanzt werden.»
    </p>

    <p>
      Die Handelsfirma SwissPlant GmbH, bietet Ihnen Gemüsejungpflanzen in allen möglichen Variationen und Grössen an. Durch unsere jahrelange Erfahrung im Gemüsebau können wir Ihnen eine kompetente und fachspezifische Beratung für unsere klimatischen Bedingungen garantieren. <a href="https://swissplant.vercel.app/angebot.html">Unser Sortiment</a> ist eine Zusammenstellung aus verschiedenen Züchtungsprogrammen der weltweit tätigen Anbieter von Hochleistungssaatgut.
    </p>

    <p>
      Die AgriPlant erweiterte im Jahr 2016 ihre Betriebsfläche um weitere 8130m2 auf insgesamt 42000m2. Mit dieser Erweiterung stiess die bestehende Ölheizung an Ihre Grenzen. Zudem hatte eine Heizungsanlage das technische Alter erreicht und musste sowieso ersetzt werden. Aus diesen Gründen wurde das Projekt Schnitzelheizung umgesetzt.
    </p>

    <p>
      Durch die Realisierung des Projektes kann die AgriPlant AG ihren CO2-Ausstoss trotz der Flächenerweiterung um satte 123 Tonnen reduzieren. Das Projekt wurde vom Büro der <a href="https://enaw.ch/">Energie-Agentur der Wirtschaft EnAW</a> und der <a href="https://www.klik.ch/">Stiftung Klimaschutz und CO2-Kompensation KliK</a> begleitet. Mittlerweile haben wir die erste Heizsaison hinter uns und können mit Stolz bestätigen, dass wir zu 80% CO2-neutral unsere Gewächshäuser beheizen.
    </p>

    <p>
      Zu unseren Zulieferfirmen im Bereich Saatgut gehören: <a href="https://www.bejosamen.de/">Bejo</a>, <a href="https://www.enzazaden.com/de/">Enza</a>, <a href="https://rijkzwaan.de/home">Rijk Zwaan</a>, <a href="https://www.hildsamen.de/">Hild</a>, <a href="https://www.syngenta.ch/">Syngenta</a> und <a href="https://www.sakata.com/">Sakata</a>. Unsere Anzuchterde beziehen wir bei den Firmen <a href="https://www.floragard.de/de-de">Floragard</a> und <a href="https://klasmann-deilmann.com/de/">Klasmann</a>.
    </p>
  </Article>
</main>
