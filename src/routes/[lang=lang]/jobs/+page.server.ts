import aerial from "$img/aerials/1.avif";
import type { PageServerLoad } from "./$types";

const translations = {
  de: {
    meta: {
      title: "Jobs — SwissPlant GmbH",
      description: "Wir sind ein zukunftsorientiertes Unternehmen in der Gemüsejungpflanzenherstellung. Unsere Firmenkultur ist geprägt durch Flexibilität, Offenheit und Anpassungsfähigkeit.",
      keywords: "swissplant, agriplant, jobs, stellen, inserate, stelleninserate, jobangebot, arbeit"
    },
    heading: "Offene Stellen",
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
        text: "Wir sind zukunftsorientierte Gemüsejungpflanzenhersteller in Müntschemier im Berner Seeland. Wir kultivieren Jungpflanzen, die von Gemüsegärtnern in der ganzen Schweiz gepflanzt werden. Unsere 12 Mitarbeiter wiederspiegeln Qualität, Termintreue, Kundenzufriedenheit und machen unser Unternehmen einzigartig. Offenheit, Flexibilität und Anpassungsfähigkeit stehen bei uns an erster Stelle und prägen das freundliche und kollegiale Miteinander."
      }
    ]
  },
  en: {
    meta: {
      title: "Jobs — SwissPlant GmbH",
      description: "We are a future-oriented company in vegetable seedling production. Our company culture is characterized by flexibility, openness and adaptability.",
      keywords: "swissplant, agriplant, jobs, job offers, work"
    },
    heading: "Open Positions",
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
        text: "We are future-oriented vegetable young plant producers in Müntschemier in the Bernese Seeland. We cultivate young plants that are planted by vegetable growers throughout Switzerland. Our 12 employees reflect quality, adherence to deadlines, customer satisfaction and make our company unique. Openness, flexibility and adaptability are our top priorities and characterize the friendly and collegial way we work together."
      }
    ]
  }
} satisfies App.Translations;

export const load: PageServerLoad = ({ params }) => translations[params.lang];
