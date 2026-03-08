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
    structuredText: {
      document: {
        type: "root",
        children: [
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "SwissPlant GmbH"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Spitzallmendweg 11c\nCH-3225 Müntschemier"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "link",
                url: "mailto:info@swissplant.ch",
                children: [
                  {
                    type: "span",
                    value: "info@swissplant.ch"
                  }
                ]
              },
              {
                type: "span",
                value: "\n"
              },
              {
                type: "link",
                url: "https://www.uid.admin.ch/Detail.aspx?uid_id=CHE-111.792.021",
                children: [
                  {
                    type: "span",
                    value: "CHE-111.792.021"
                  }
                ]
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "AgriPlant AG"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Spitzallmendweg 11c\nCH-3225 Müntschemier"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "link",
                url: "mailto:info@agriplant.ch",
                children: [
                  {
                    type: "span",
                    value: "info@agriplant.ch"
                  }
                ]
              },
              {
                type: "span",
                value: "\n"
              },
              {
                type: "link",
                url: "https://www.uid.admin.ch/Detail.aspx?uid_id=CHE-308.084.278",
                children: [
                  {
                    type: "span",
                    value: "CHE-308.084.278"
                  }
                ]
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "Öffnungszeiten"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Montag bis Freitag\n07:30–11:45 Uhr\n13:30–17:30 Uhr"
              }
            ]
          }
        ]
      }
    }
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
    structuredText: {
      document: {
        type: "root",
        children: [
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "SwissPlant GmbH"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Spitzallmendweg 11c\nCH-3225 Müntschemier"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "link",
                url: "mailto:info@swissplant.ch",
                children: [
                  {
                    type: "span",
                    value: "info@swissplant.ch"
                  }
                ]
              },
              {
                type: "span",
                value: "\n"
              },
              {
                type: "link",
                url: "https://www.uid.admin.ch/Detail.aspx?uid_id=CHE-111.792.021",
                children: [
                  {
                    type: "span",
                    value: "CHE-111.792.021"
                  }
                ]
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "AgriPlant AG"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Spitzallmendweg 11c\nCH-3225 Müntschemier"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "link",
                url: "mailto:info@agriplant.ch",
                children: [
                  {
                    type: "span",
                    value: "info@agriplant.ch"
                  }
                ]
              },
              {
                type: "span",
                value: "\n"
              },
              {
                type: "link",
                url: "https://www.uid.admin.ch/Detail.aspx?uid_id=CHE-308.084.278",
                children: [
                  {
                    type: "span",
                    value: "CHE-308.084.278"
                  }
                ]
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "Opening Hours"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Monday to Friday\n07:30–11:45\n13:30–17:30"
              }
            ]
          }
        ]
      }
    }
  }
} satisfies App.Translations;

export const load: PageServerLoad = ({ params }) => translations[params.lang];
