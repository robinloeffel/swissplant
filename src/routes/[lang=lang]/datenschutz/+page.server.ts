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
                value: "Verantwortliche Stelle"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Verantwortlich für die Bearbeitung von Personendaten auf dieser Website ist:"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "SwissPlant GmbH\nSpitzallmendweg 11c\nCH-3225 Müntschemier\n"
              },
              {
                type: "link",
                url: "mailto:info@swissplant.ch",
                children: [
                  {
                    type: "span",
                    value: "info@swissplant.ch"
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
                value: "Grundsätze der Datenbearbeitung"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Wir bearbeiten Personendaten in Übereinstimmung mit dem Schweizer Bundesgesetz über den Datenschutz (DSG). Wir erheben nur diejenigen Daten, die für den jeweiligen Zweck erforderlich sind (Datensparsamkeit), und bewahren sie nicht länger auf als notwendig."
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "Web-Analyse (Umami)"
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
                value: ", einen datenschutzfreundlichen Analysdienst. Dabei werden ausschliesslich anonymisierte, nicht personenbezogene Statistikdaten über Websitebesuche erhoben (z. B. aufgerufene Seiten, Verweildauer, Herkunftsland)."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Weitere Informationen: "
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
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "Hosting (Statichost)"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Diese Website wird über die Plattform "
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
                value: " bereitgestellt. Die IP-Adresse wird dabei technisch verarbeitet, um die Inhalte auszuliefern."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Weitere Informationen: "
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
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "Eingebettete Drittinhalte"
              }
            ]
          },
          {
            type: "heading",
            level: 3,
            children: [
              {
                type: "span",
                value: "YouTube"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Auf unserer Website können Videos über "
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
                value: " eingebettet sein. Wir verwenden dabei die «No-Cookie»-Variante, welche erst beim aktiven Wiedergeben von Videos Cookies setzt."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Weitere Informationen: "
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
              }
            ]
          },
          {
            type: "heading",
            level: 3,
            children: [
              {
                type: "span",
                value: "Google Maps"
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
                value: " zur Darstellung von Karteninhalten. Beim Laden des Iframes überträgt Ihr Browser automatisch Daten an Google, einschliesslich Ihrer IP-Adresse."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Weitere Informationen: "
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
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "Kontaktaufnahme und Kundenverhältnisse"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Wenn Sie uns per E-Mail oder anderweitig kontaktieren bzw. wenn ein Kunden- oder Geschäftsverhältnis besteht, bearbeiten wir die von Ihnen mitgeteilten Daten (Name, E-Mail-Adresse, Telefonnummer, Adresse, Bestellvolumen und sonstige im Rahmen der Kommunikation übermittelte Angaben)."
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "Datensicherheit"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Alle Daten, die zwischen Ihrem Browser und unserer Website übertragen werden, sind mittels HTTPS gesichert und für Dritte nicht einsehbar."
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "Rechte der betroffenen Personen"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Als betroffene Person haben Sie nach dem Schweizer Datenschutzgesetz (DSG) folgende Rechte:"
              }
            ]
          },
          {
            type: "list",
            style: "bulleted",
            children: [
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Auskunftsrecht (Art. 25 DSG): Sie können jederzeit Auskunft über die zu Ihrer Person gespeicherten Daten verlangen."
                      }
                    ]
                  }
                ]
              },
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Recht auf Berichtigung (Art. 32 DSG): Sie können die Berichtigung unrichtiger oder unvollständiger Daten verlangen."
                      }
                    ]
                  }
                ]
              },
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Recht auf Löschung (Art. 32 DSG): Sie können die Löschung Ihrer Daten verlangen, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen."
                      }
                    ]
                  }
                ]
              },
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Recht auf Datenherausgabe und -übertragbarkeit (Art. 28 DSG): Sie können die Herausgabe Ihrer Daten in einem gängigen, maschinenlesbaren Format verlangen."
                      }
                    ]
                  }
                ]
              },
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Widerspruchsrecht: Sie können der Bearbeitung Ihrer Daten widersprechen, sofern diese nicht zur Vertragserfüllung oder aus gesetzlichen Gründen zwingend erforderlich ist."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Zur Geltendmachung Ihrer Rechte wenden Sie sich bitte an: "
              },
              {
                type: "link",
                url: "mailto:info@swissplant.ch",
                children: [
                  {
                    type: "span",
                    value: "info@swissplant.ch"
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
                value: "Beschwerderecht"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Sie haben das Recht, bei der zuständigen Datenschutzaufsichtsbehörde Beschwerde einzureichen:"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter (FDPIC)\nFeldeggweg 1\nCH-3003 Bern\n"
              },
              {
                type: "link",
                url: "https://www.edoeb.admin.ch",
                children: [
                  {
                    type: "span",
                    value: "www.edoeb.admin.ch"
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
                value: "Änderungen dieser Datenschutzerklärung"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, insbesondere bei Änderungen der genutzten Dienste oder gesetzlicher Anforderungen. Die jeweils aktuelle Version ist auf dieser Website abrufbar."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Müntschemier, März 2026"
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
                value: "Responsible Party"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "The responsible party for processing personal data on this website is:"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "SwissPlant GmbH\nSpitzallmendweg 11c\nCH-3225 Müntschemier\n"
              },
              {
                type: "link",
                url: "mailto:info@swissplant.ch",
                children: [
                  {
                    type: "span",
                    value: "info@swissplant.ch"
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
                value: "Principles of Data Processing"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "We process personal data in accordance with the Swiss Federal Act on Data Protection (DSG). We only collect data that is necessary for the respective purpose (data minimization) and do not retain it longer than necessary."
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "Web Analytics (Umami)"
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
                value: ", a privacy-friendly analytics service. Only anonymized, non-personal statistics about website visits are collected (e.g., pages visited, duration, country of origin)."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "For more information: "
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
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "Hosting (Statichost)"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "This website is provided via the "
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
                value: " platform. The IP address is technically processed to deliver the content."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "For more information: "
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
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "Embedded Third-Party Content"
              }
            ]
          },
          {
            type: "heading",
            level: 3,
            children: [
              {
                type: "span",
                value: "YouTube"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Our website may embed videos from "
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
                value: ". We use the \"No-Cookie\" variant, which restricts the setting of cookies by YouTube until active playback."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "For more information: "
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
              }
            ]
          },
          {
            type: "heading",
            level: 3,
            children: [
              {
                type: "span",
                value: "Google Maps"
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
                value: " to display map content. When loading the iframe, your browser automatically transmits data to Google, including your IP address."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "For more information: "
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
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "Contact and Customer Relationships"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "If you contact us by email or otherwise, or if a customer or business relationship exists, we process the data you provide (name, email address, telephone number, address, order volume, and other information transmitted in the context of communication)."
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "Data Security"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "All data transmitted between your browser and our website is secured via HTTPS and is not accessible to third parties."
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "Rights of Data Subjects"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "As a data subject, you have the following rights under the Swiss Data Protection Act (DSG):"
              }
            ]
          },
          {
            type: "list",
            style: "bulleted",
            children: [
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Right to information (Art. 25 DSG): You can request information about the data stored about you at any time."
                      }
                    ]
                  }
                ]
              },
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Right to rectification (Art. 32 DSG): You can request the correction of inaccurate or incomplete data."
                      }
                    ]
                  }
                ]
              },
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Right to erasure (Art. 32 DSG): You can request the deletion of your data, provided no legal retention obligations oppose this."
                      }
                    ]
                  }
                ]
              },
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Right to data portability (Art. 28 DSG): You can request the release of your data in a common, machine-readable format."
                      }
                    ]
                  }
                ]
              },
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Right to object: You can object to the processing of your data, unless this is absolutely necessary for contract fulfillment or for legal reasons."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "To exercise your rights, please contact: "
              },
              {
                type: "link",
                url: "mailto:info@swissplant.ch",
                children: [
                  {
                    type: "span",
                    value: "info@swissplant.ch"
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
                value: "Right to Complain"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "You have the right to file a complaint with the competent data protection authority:"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Federal Data Protection and Information Commissioner (FDPIC)\nFeldeggweg 1\nCH-3003 Bern\n"
              },
              {
                type: "link",
                url: "https://www.edoeb.admin.ch",
                children: [
                  {
                    type: "span",
                    value: "www.edoeb.admin.ch"
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
                value: "Changes to this Privacy Policy"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "We reserve the right to adapt this privacy policy as needed, particularly in the event of changes to the services used or legal requirements. The current version is available on this website."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Müntschemier, March 2026"
              }
            ]
          }
        ]
      }
    }
  }
} satisfies App.Translations;

export const load: PageServerLoad = ({ params }) => translations[params.lang];
