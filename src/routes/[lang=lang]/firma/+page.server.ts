import aerial from "$img/aerials/2.avif";
import type { PageServerLoad } from "./$types";

const translations = {
  de: {
    meta: {
      title: "Firma — SwissPlant GmbH",
      description: "Informieren Sie sich darüber, wie die SwissPlant GmbH funktioniert.",
      keywords: "über uns, anfang, geschichte, müntschemier, erfahrung, gemüsebau, kompetent, muentschemier, swissplant, agriplant, swissplant gmbh, agriplant ag"
    },
    heading: "Firma",
    hero: {
      images: [
        {
          src: aerial,
          alt: ""
        }
      ]
    },
    richtext: [
      {
        type: "p",
        text: "Den Anfang nehmen all diese Gemüse und Salate als Jungpflanzen, die von der Firma AgriPlant AG in Müntschemier angezogen werden. Geschäftsführer unserer Firmen Martin Löffel, fasst den Weg der Keimlinge bis hin zu ausgewachsenen Pflanzen so zusammen: «Wir stehen als Zulieferbetrieb der Gemüsebaubetriebe am Anfang der Produktionskette und kultivieren die Jungpflanzen, die anschliessend von den Gemüsegärtnern gepflanzt werden.»"
      },
      {
        type: "p",
        text: "Die Handelsfirma SwissPlant GmbH, bietet Ihnen Gemüsejungpflanzen in allen möglichen Variationen und Grössen an. Durch unsere jahrelange Erfahrung im Gemüsebau können wir Ihnen eine kompetente und fachspezifische Beratung für unsere klimatischen Bedingungen garantieren. Unser Sortiment ist eine Zusammenstellung aus verschiedenen Züchtungsprogrammen der weltweit tätigen Anbieter von Hochleistungssaatgut."
      },
      {
        type: "p",
        text: "Die AgriPlant erweiterte im Jahr 2016 ihre Betriebsfläche um weitere 8130m2 auf insgesamt 42000m2. Mit dieser Erweiterung stiess die bestehende Ölheizung an Ihre Grenzen. Zudem hatte eine Heizungsanlage das technische Alter erreicht und musste sowieso ersetzt werden. Aus diesen Gründen wurde das Projekt Schnitzelheizung umgesetzt."
      },
      {
        type: "p",
        text: "Durch die Realisierung des Projektes kann die AgriPlant AG ihren CO2-Ausstoss trotz der Flächenerweiterung um satte 123 Tonnen reduzieren. Das Projekt wurde vom Büro der Energie-Agentur der Wirtschaft EnAW und der Stiftung Klimaschutz und CO2-Kompensation KliK begleitet. Mittlerweile haben wir die erste Heizsaison hinter uns und können mit Stolz bestätigen, dass wir zu 80% CO2-neutral unsere Gewächshäuser beheizen."
      },
      {
        type: "p",
        text: "Zu unseren Zulieferfirmen im Bereich Saatgut gehören: Bejo, Enza, Rijk Zwaan, Hild, Syngenta und Sakata. Unsere Anzuchterde beziehen wir bei den Firmen Floragard und Klasmann."
      }
    ]
  },
  en: {
    meta: {
      title: "Company — SwissPlant GmbH",
      description: "Learn about how SwissPlant GmbH operates.",
      keywords: "about us, beginning, history, müntschemier, experience, vegetable cultivation, competent, muentschemier, swissplant, agriplant, swissplant gmbh, agriplant ag"
    },
    heading: "Company",
    hero: {
      images: [
        {
          src: aerial,
          alt: ""
        }
      ]
    },
    richtext: [
      {
        type: "p",
        text: "All these vegetables and salads begin as young plants, which are grown by AgriPlant AG in Müntschemier. Martin Löffel, Managing Director of our companies, summarizes the journey of seedlings to fully grown plants as follows: \"As a supplier to vegetable farms, we stand at the beginning of the production chain and cultivate the young plants that are subsequently planted by vegetable growers.\""
      },
      {
        type: "p",
        text: "The trading company SwissPlant GmbH offers you vegetable young plants in all possible variations and sizes. Through our many years of experience in vegetable cultivation, we can guarantee you competent and specialized advice for our climatic conditions. Our range is a compilation from various breeding programs of globally active providers of high-performance seeds."
      },
      {
        type: "p",
        text: "In 2016, AgriPlant expanded its operational area by an additional 8,130m² to a total of 42,000m². With this expansion, the existing oil heating system reached its limits. In addition, one heating system had reached its technical age and needed to be replaced anyway. For these reasons, the wood chip heating project was implemented."
      },
      {
        type: "p",
        text: "Through the realization of this project, AgriPlant AG can reduce its CO2 emissions by a substantial 123 tons despite the area expansion. The project was accompanied by the Energy Agency of the Economy EnAW and the Climate Protection and CO2 Compensation Foundation KliK. We have now completed our first heating season and can proudly confirm that we heat our greenhouses 80% CO2-neutral."
      },
      {
        type: "p",
        text: "Our seed suppliers include: Bejo, Enza, Rijk Zwaan, Hild, Syngenta and Sakata. We source our growing soil from Floragard and Klasmann."
      }
    ]
  }
} satisfies App.Translations;

export const load: PageServerLoad = ({ params }) => translations[params.lang];
