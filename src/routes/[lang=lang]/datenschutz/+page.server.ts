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
    richtext: [
      {
        type: "h2",
        text: "Kontaktadresse"
      },
      {
        type: "p",
        text: "Die Verantwortung über Verwaltung und Bearbeitung von personenbezogenen Daten obliegt der folgenden Stelle:"
      },
      {
        type: "address",
        text: "SwissPlant GmbH bzw. AgriPlant AG\nSpitzallmendweg 11c\nCH-3225 Müntschemier"
      },
      {
        type: "p",
        text: "E-Mail-Adressen und Telefonnummern finden Sie auf unserer Kontaktseite oder der Fusszeile."
      },
      {
        type: "h2",
        text: "Auskunft & Löschung"
      },
      {
        type: "p",
        text: "Sollten Sie Fragen zu den von uns erhobenen Personendaten haben, können Sie sich an die oben erwähnte Stelle wenden. Möchten Sie, dass wir Daten von Ihnen löschen, so kommen wir diesem Wunsch so gut wie möglich entgegen."
      },
      {
        type: "h2",
        text: "Verschlüsselung"
      },
      {
        type: "p",
        text: " Alle Daten, die zwischen Ihnen und swissplant.ch fliessen, sind verschlüsselt und nicht für Dritte einsehbar."
      },
      {
        type: "h2",
        text: "Erhebung persönlicher Daten"
      },
      {
        type: "p",
        text: "Unsere Website verwendet Umami, um anonymisierte Daten über Ihren Besuch zu aggregieren. Umami ist mit der DSGVO kompatibel und erfordert keine explizite Zustimmung. Diese Daten werden in der Europäischen Union verwahrt und sind nicht auf einzelne Personen zurückführbar."
      },
      {
        type: "p",
        text: "Informationen, die im Rahmen eines Kundenverhältnisses oder sonstiger Kommunikation mit uns geteilt werden (etwa Name, Kontaktdaten, Bestellvolumen), werden gemäss schweizerischer Gesetzgebung behandelt und verwahrt."
      },
      {
        type: "h2",
        text: "Dienste von Dritten"
      },
      {
        type: "p",
        text: "Diese Webseite macht Gebrauch von Iframes, die auf YouTube und Google Maps verweisen. Zum Schutze Ihrer Privatsphäre wurde bei YouTube auf die sogenannte «No-Cookie»-Variante gesetzt; Google Maps bietet eine solche Funktion nicht an. Bitte machen Sie sich bei Bedarf mit den Datenschutzerklärungen von YouTube und Google Maps vertraut."
      },
      {
        type: "h2",
        text: "Hosting"
      },
      {
        type: "p",
        text: "Diese Webseite läuft auf der Plattform von Statichost. Anhand Ihrer IP-Adresse wird automatisch der nächstgelegene Server gewählt, um die Webseite bereitzustellen. Bitte machen Sie sich bei Bedarf mit der Datenschutzerklärung von Statichost vertraut."
      },
      {
        type: "p",
        text: "Müntschemier, November 2025"
      }
    ]
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
    richtext: [
      {
        type: "h2",
        text: "Contact Address"
      },
      {
        type: "p",
        text: "The following entity is responsible for the administration and processing of personal data:"
      },
      {
        type: "address",
        text: "SwissPlant GmbH or AgriPlant AG\nSpitzallmendweg 11c\nCH-3225 Müntschemier"
      },
      {
        type: "p",
        text: "Email addresses and phone numbers can be found on our contact page or in the footer."
      },
      {
        type: "h2",
        text: "Information & Deletion"
      },
      {
        type: "p",
        text: "If you have questions about the personal data we collect, you can contact the entity mentioned above. If you wish us to delete your data, we will accommodate this request to the best of our ability."
      },
      {
        type: "h2",
        text: "Encryption"
      },
      {
        type: "p",
        text: "All data transmitted between you and swissplant.ch is encrypted and not accessible to third parties."
      },
      {
        type: "h2",
        text: "Collection of Personal Data"
      },
      {
        type: "p",
        text: "Our website uses Umami to aggregate anonymized data about your visit. Umami is GDPR compliant and does not require explicit consent. This data is stored in the European Union and is not traceable to an individual person."
      },
      {
        type: "p",
        text: "Information shared with us as part of a customer relationship or other communication (such as name, contact details, order volume) is processed and stored in accordance with Swiss legislation."
      },
      {
        type: "h2",
        text: "Third-Party Services"
      },
      {
        type: "p",
        text: "This website uses iframes that link to YouTube and Google Maps. To protect your privacy, we use YouTube's so-called \"no-cookie\" variant; Google Maps does not offer such a feature. Please familiarize yourself with the privacy policies of YouTube and Google Maps if needed."
      },
      {
        type: "h2",
        text: "Hosting"
      },
      {
        type: "p",
        text: "This website is hosted on the Statichost platform. Based on your IP address, the nearest server is automatically selected to deliver the website. Please familiarize yourself with Statichost's privacy policy if needed."
      },
      {
        type: "p",
        text: "Müntschemier, November 2025"
      }
    ]
  }
} satisfies App.Translations;

export const load: PageServerLoad = ({ params }) => translations[params.lang];
