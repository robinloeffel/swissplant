import machine from "$img/photoshoot/machine.avif";
import type { PageServerLoad } from "./$types";

const translations: App.Translations = {
  de: {
    meta: {
      title: "Partner — SwissPlant GmbH",
      description: "Wir arbeiten Hand in Hand mit unseren Partnern. Erfahren Sie mehr über unsere Kooperationen.",
      keywords: "partner, geschäftspartner, partnerfirmen, partnerfirma, agriplant, agriplant ag, gipmans, gipmans holland, swissplant, kundschaft, spedition, wissen, können, innovationen, qualität"
    },
    heading: "Partner",
    hero: {
      images: [
        {
          src: machine,
          alt: ""
        }
      ]
    }
  },
  en: {
    meta: {
      title: "Partner — SwissPlant GmbH",
      description: "We work hand in hand with our partners. Learn more about our collaborations.",
      keywords: "partner, business partners, partner companies, partner firm, agriplant, agriplant ag, gipmans, gipmans holland, swissplant, clientele, shipping, knowledge, skills, innovations, quality"
    },
    heading: "Partners",
    hero: {
      images: [
        {
          src: machine,
          alt: ""
        }
      ]
    }
  }
};

export const load: PageServerLoad = ({ params }) => translations[params.lang];
