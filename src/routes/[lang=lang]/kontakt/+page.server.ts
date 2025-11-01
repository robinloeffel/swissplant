import aerial from "$img/aerials/1.avif";
import type { PageServerLoad } from "./$types";

const translations = {
  de: {
    meta: {
      title: "Kontakt — SwissPlant GmbH",
      description: "Erfahren Sie, wie Sie am schnellsten zu uns finden oder uns am einfachsten erreichen.",
      keywords: "kontakt, mail, email, telefon, bern, neuenburg, neuchatel, kerzers, müntschemier, muentschemier, ins, auto, autobahn, ankunft, anfahrt, swissplant, agriplant"
    },
    heading: "Kontakt",
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
        type: "h2",
        text: "Von Bern her"
      },
      {
        type: "p",
        text: "Autobahn Bern &ndash; Neuenburg Ausfahrt Kerzers anschliessend Richtung Neuenburg. In Müntschemier Richtung Bahnhof. Firmenwegweiser beachten."
      },
      {
        type: "h2",
        text: "Von Neuchâtel her"
      },
      {
        type: "p",
        text: "Richtung Ins &ndash; Müntschemier anschliessend in Müntschemier Richtung Bahnhof. Firmenwegweiser beachten."
      }
    ]
  },
  en: {
    meta: {
      title: "Contact — SwissPlant GmbH",
      description: "Learn how to best get in touch with us. Or get directions to get to our site.",
      keywords: "contact, mail, email, phone, bern, neuenburg, neuchatel, kerzers, müntschemier, muentschemier, ins, car, freeway, arrival, train, train station"
    },
    heading: "Contact",
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
        type: "h2",
        text: "From Bern"
      },
      {
        type: "p",
        text: "Take the Bern &ndash; Neuchâtel freeway and exit at Kerzers, then follow the signs to Neuchâtel. In Müntschemier, follow the signs to the train station."
      },
      {
        type: "h2",
        text: "From Neuchâtel"
      },
      {
        type: "p",
        text: "Follow the signs to Ins &ndash; Müntschemier, then in Müntschemier follow the signs to the train station."
      }
    ]
  }
} satisfies App.Translations;

export const load: PageServerLoad = ({ params }) => translations[params.lang];
