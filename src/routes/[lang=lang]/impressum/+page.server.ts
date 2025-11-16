import aerial from "$img/aerials/1.avif";
import type { PageServerLoad } from "./$types";

const translations = {
  de: {
    meta: {
      title: "Impressum — SwissPlant GmbH",
      description: "Kontaktinformationen und rechtliche Angaben zu SwissPlant GmbH und AgriPlant AG in Müntschemier. Öffnungszeiten, Adresse und Telefonnummer.",
      keywords: "swissplant, agriplant, impressum, kontakt, adresse, müntschemier, telefon, öffnungszeiten, rechtliche angaben"
    },
    heading: "Impressum",
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
        text: "SwissPlant GmbH"
      },
      {
        type: "address",
        text: "Spitzallmendweg 11c\nCH-3225 Müntschemier\n\+41 32 313 52 10\ninfo@swissplant.ch"
      },
      {
        type: "h2",
        text: "AgriPlant AG"
      },
      {
        type: "address",
        text: "Spitzallmendweg 11c\nCH-3225 Müntschemier\n\+41 32 313 52 10\ninfo@agriplant.ch"
      },
      {
        type: "h2",
        text: "Öffnungszeiten"
      },
      {
        type: "p",
        text: "Montag&ndash;Freitag: 07:30&ndash;11:45 Uhr, 13:30&ndash;17:30 Uhr"
      }
    ]
  },
  en: {
    meta: {
      title: "Imprint — SwissPlant GmbH",
      description: "Contact information and legal details for SwissPlant GmbH and AgriPlant AG in Müntschemier. Opening hours, address and phone number.",
      keywords: "swissplant, agriplant, imprint, contact, address, müntschemier, phone, opening hours, legal information"
    },
    heading: "Imprint",
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
        text: "SwissPlant GmbH"
      },
      {
        type: "address",
        text: "Spitzallmendweg 11c\nCH-3225 Müntschemier\n\+41 32 313 52 10\ninfo@swissplant.ch"
      },
      {
        type: "h2",
        text: "AgriPlant AG"
      },
      {
        type: "address",
        text: "Spitzallmendweg 11c\nCH-3225 Müntschemier\n\+41 32 313 52 10\ninfo@agriplant.ch"
      },
      {
        type: "h2",
        text: "Opening Hours"
      },
      {
        type: "p",
        text: "Monday&ndash;Friday: 07:30&ndash;11:45, 13:30&ndash;17:30"
      }
    ]
  }
} satisfies App.Translations;

export const load: PageServerLoad = ({ params }) => translations[params.lang];
