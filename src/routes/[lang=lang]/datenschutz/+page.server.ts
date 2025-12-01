import aerial from "$img/aerials/1.avif";
import type { PageServerLoad } from "./$types";

const translations = {
  de: {
    meta: {
      title: "Datenschutz — SwissPlant GmbH",
      description: "Erfahren Sie, wie wir Ihre personenbezogenen Daten verwalten und schützen.",
      keywords: "datenschutz, datenschutzerklärung, dsgvo, personendaten, privatsphäre, swissplant, agriplant"
    },
    heading: "Datenschutzerklärung",
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
                value: "Kontaktadresse"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Die Verantwortung über Verwaltung und Bearbeitung von personenbezogenen Daten obliegt der folgenden Stelle:"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "SwissPlant GmbH\nSpitzallmendweg 11c\nCH-3225 Müntschemier\n\ninfo@swissplant.ch"
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "Auskunft & Löschung"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Sollten Sie Fragen zu den von uns erhobenen Personendaten haben, können Sie sich an die oben erwähnte Stelle wenden. Möchten Sie, dass wir Daten von Ihnen löschen, so kommen wir diesem Wunsch so gut wie möglich entgegen."
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "Verschlüsselung"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Alle Daten, die zwischen Ihnen und der Webseite fliessen sind verschlüsselt und nicht für Dritte einsehbar."
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "Erhebung persönlicher Daten"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Unsere Website verwendet "
              },
              {
                type: "link",
                url: "https://umami.is",
                children: [
                  {
                    type: "span",
                    value: "Umami"
                  }
                ]
              },
              {
                type: "span",
                value: ", um anonymisierte Daten über Ihren Besuch zu sammeln. Umami ist DSGVO-konform und benötigt keine explizite Zustimmung. Diese Daten werden in der Europäischen Union gespeichert und sind nicht auf eine einzelne Person zurückführbar. Bitte machen Sie sich bei Bedarf mit der "
              },
              {
                type: "link",
                url: "https://umami.is/privacy",
                children: [
                  {
                    type: "span",
                    value: "Datenschutzerklärung von Umami"
                  }
                ]
              },
              {
                type: "span",
                value: " vertraut."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Informationen, die im Rahmen eines Kundenverhältnisses oder sonstiger Kommunikation mit uns geteilt werden (etwa Name, Kontaktdaten, Bestellvolumen), werden gemäss schweizerischer Gesetzgebung behandelt und verwahrt."
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "Dienste von Dritten"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Diese Webseite macht Gebrauch von Iframes, die auf "
              },
              {
                type: "link",
                url: "https://www.youtube.com",
                children: [
                  {
                    type: "span",
                    value: "YouTube"
                  }
                ]
              },
              {
                type: "span",
                value: " und "
              },
              {
                type: "link",
                url: "https://www.google.com/maps",
                children: [
                  {
                    type: "span",
                    value: "Google Maps"
                  }
                ]
              },
              {
                type: "span",
                value: " verlinken. Um Ihre Privatsphäre zu schützen, verwenden wir bei YouTube die sogenannte \"No-Cookie\"-Variante; Google Maps bietet eine solche Funktion nicht an. Bitte machen Sie sich bei Bedarf mit der "
              },
              {
                type: "link",
                url: "https://policies.google.com/privacy?hl=de-CH",
                children: [
                  {
                    type: "span",
                    value: "Datenschutzerklärung von Google"
                  }
                ]
              },
              {
                type: "span",
                value: " vertraut."
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "Hosting"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Diese Webseite läuft auf der Plattform von "
              },
              {
                type: "link",
                url: "https://www.statichost.eu/",
                children: [
                  {
                    type: "span",
                    value: "Statichost"
                  }
                ]
              },
              {
                type: "span",
                value: ". Anhand Ihrer IP-Adresse wird automatisch der nächstgelegene Server gewählt, um die Webseite bereitzustellen. Bitte machen Sie sich bei Bedarf mit der "
              },
              {
                type: "link",
                url: "https://www.statichost.eu/privacy/",
                children: [
                  {
                    type: "span",
                    value: "Datenschutzerklärung von Statichost"
                  }
                ]
              },
              {
                type: "span",
                value: " vertraut."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Müntschemier, November 2025"
              }
            ]
          }
        ]
      }
    }
  },
  en: {
    meta: {
      title: "Privacy Policy — SwissPlant GmbH",
      description: "Learn how we handle and protect your personal data.",
      keywords: "privacy, data protection, gdpr, privacy policy, swissplant, agriplant"
    },
    heading: "Privacy Policy",
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
                value: "Contact Address"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "The responsibility for the management and processing of personal data lies with the following entity:"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "SwissPlant GmbH\nSpitzallmendweg 11c\nCH-3225 Müntschemier\n\ninfo@swissplant.ch"
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "Information & Deletion"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "If you have any questions about the personal data we collect, you can contact the entity mentioned above. If you would like us to delete data about you, we will comply with this request as best as we can."
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "Encryption"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "All data transmitted between you and the website is encrypted and not accessible to third parties."
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "Collection of Personal Data"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Our website uses "
              },
              {
                type: "link",
                url: "https://umami.is",
                children: [
                  {
                    type: "span",
                    value: "Umami"
                  }
                ]
              },
              {
                type: "span",
                value: " to collect anonymized data about your visit. Umami is GDPR-compliant and does not require explicit consent. This data is stored in the European Union and cannot be traced back to an individual person. Please refer to the "
              },
              {
                type: "link",
                url: "https://umami.is/privacy",
                children: [
                  {
                    type: "span",
                    value: "Umami Privacy Policy"
                  }
                ]
              },
              {
                type: "span",
                value: " if needed."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Information shared with us in the context of a customer relationship or other communication (such as name, contact details, order volume) is handled and stored in accordance with Swiss legislation."
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "Third-Party Services"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "This website uses iframes that link to "
              },
              {
                type: "link",
                url: "https://www.youtube.com",
                children: [
                  {
                    type: "span",
                    value: "YouTube"
                  }
                ]
              },
              {
                type: "span",
                value: " and "
              },
              {
                type: "link",
                url: "https://www.google.com/maps",
                children: [
                  {
                    type: "span",
                    value: "Google Maps"
                  }
                ]
              },
              {
                type: "span",
                value: ". To protect your privacy, we use the so-called \"No-Cookie\" variant for YouTube; Google Maps does not offer such a feature. Please refer to the "
              },
              {
                type: "link",
                url: "https://policies.google.com/privacy?hl=en",
                children: [
                  {
                    type: "span",
                    value: "Google Privacy Policy"
                  }
                ]
              },
              {
                type: "span",
                value: " if needed."
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "Hosting"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "This website is hosted on the platform of "
              },
              {
                type: "link",
                url: "https://www.statichost.eu/",
                children: [
                  {
                    type: "span",
                    value: "Statichost"
                  }
                ]
              },
              {
                type: "span",
                value: ". Based on your IP address, the nearest server is automatically selected to deliver the website. Please refer to the "
              },
              {
                type: "link",
                url: "https://www.statichost.eu/privacy/",
                children: [
                  {
                    type: "span",
                    value: "Statichost Privacy Policy"
                  }
                ]
              },
              {
                type: "span",
                value: " if needed."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Müntschemier, November 2025"
              }
            ]
          }
        ]
      }
    }
  }
} satisfies App.Translations;

export const load: PageServerLoad = ({ params }) => translations[params.lang];
