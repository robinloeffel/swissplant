import { resolve } from "$app/paths";
import one from "$img/aerials/1.avif";
import two from "$img/aerials/2.avif";
import crates from "$img/photoshoot/crates.avif";
import machine from "$img/photoshoot/machine.avif";
import tinu from "$img/photoshoot/tinu.avif";
import type { EntryGenerator, PageServerLoad } from "./$types";

const translations: App.Translations = {
  de: {
    meta: {
      title: "SwissPlant GmbH – Ihr Spezialist für Gemüsejungpflanzen",
      description: "Die Swissplant GmbH ist Ihr Ansprechpartner für professionellen Gemüseanbau im Berner Seeland. Bei uns bekommen Sie Warmhauspflanzen in verschiedenen Varianten.",
      keywords: "gemüse, gemuese, jungpflanzen, setzlinge, salat, schweiz, seeland, müntschemier, muentschemier, swissplant, agriplant, swissplant gmbh, agriplant ag, anbau, warmhauspflanzen, distro"
    },
    heading: "Startseite",
    hero: {
      big: true,
      images: [
        {
          src: one,
          alt: "Luftaufnahme der SwissPlant GmbH"
        },
        {
          src: two,
          alt: "Luftaufnahme der SwissPlant GmbH"
        }
      ]
    },
    splitTiles: [
      {
        type: "image",
        even: false,
        image: {
          src: tinu,
          alt: "Martin Löffel, Gründer der SwissPlant AG."
        },
        title: "Wer wir sind",
        description: "Die Firma SwissPlant GmbH ist Verkaufsstelle für Gemüsejungpflanzen der Firmen AgriPlant AG Schweiz und Gipmans Holland.",
        cta: {
          label: "Über uns",
          url: resolve("/[lang=lang]/firma", { lang: "de" })
        }
      },
      {
        type: "image",
        even: true,
        image: {
          src: crates,
          alt: "Kisten mit verschiedenen Gemüsesetzlingen."
        },
        title: "Was wir Ihnen bieten",
        description: "Unser Produktionsstandort der Firma AgriPlant AG befindet sich im Berner Seeland. Die zentrale Lage der Firma bietet uns die Möglichkeit Sie schnell und kompetent zu beliefern.",
        cta: {
          label: "Unser Angebot",
          url: resolve("/[lang=lang]/angebot", { lang: "de" })
        }
      },
      {
        type: "image",
        even: false,
        image: {
          src: machine,
          alt: "Eine Maschine, die Gemüsejungpflanzen herstellt."
        },
        title: "Mit wem wir arbeiten",
        description: "Die Firma Gipmans aus Holland beliefert uns als Sortimentsergänzung mit Warmhaus- und Speedypflanzen.",
        cta: {
          label: "Unsere Partner",
          url: resolve("/[lang=lang]/partner", { lang: "de" })
        }
      },
      {
        type: "iframe",
        even: true,
        iframe: {
          src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87077.36113973339!2d7.146476148343918!3d46.99768327720842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e1186bcd0321b%3A0x438446635d8d02ab!2sSwissPlant%20GmbH!5e0!3m2!1sen!2sch!4v1631345560961!5m2!1sen!2sch",
          title: "Google Maps",
          ar: 4 / 3
        },
        title: "Wie Sie uns erreichen",
        description: "Wir stehen natürlich gerne für allfällige Informationen und Ratschläge zur Verfügung. Egal, ob E-Mail, Telefon oder vor Ort.",
        cta: {
          label: "Kontakt",
          url: resolve("/[lang=lang]/kontakt", { lang: "de" })
        }
      }
    ]
  },
  en: {
    meta: {
      title: "SwissPlant GmbH – Your specialist for vegetable young plants",
      description: "Swissplant GmbH is your partner for professional vegetable cultivation in the Bernese Seeland. We offer warm house plants in various varieties.",
      keywords: "vegetable, young plants, seedlings, lettuce, switzerland, seeland, müntschemier, muentschemier, swissplant, agriplant, swissplant gmbh, agriplant ag, cultivation, warm house plants, distro"
    },
    heading: "Home",
    hero: {
      big: true,
      images: [
        {
          src: one,
          alt: "Aerial view of SwissPlant GmbH"
        },
        {
          src: two,
          alt: "Aerial view of SwissPlant GmbH"
        }
      ]
    },
    splitTiles: [
      {
        type: "image",
        even: false,
        image: {
          src: tinu,
          alt: "Martin Löffel, founder of SwissPlant GmbH."
        },
        title: "Who we are",
        description: "SwissPlant is the official point of selling of seedings and saplings from AgriPlant Switzerland and Gipmans Netherlands.",
        cta: {
          label: "About us",
          url: resolve("/[lang=lang]/firma", { lang: "en" })
        }
      },
      {
        type: "image",
        even: true,
        image: {
          src: crates,
          alt: "Boxes with various vegetable seedlings."
        },
        title: "What we offer",
        description: "Our production site of AgriPlant AG is located in the Bernese Seeland. The central location allows us to deliver quickly and competently.",
        cta: {
          label: "Our portfolio",
          url: resolve("/[lang=lang]/angebot", { lang: "en" })
        }
      },
      {
        type: "image",
        even: false,
        image: {
          src: machine,
          alt: "Eine Maschine, die Gemüsejungpflanzen herstellt."
        },
        title: "Mit wem wir arbeiten",
        description: "Die Firma Gipmans aus Holland beliefert uns als Sortimentsergänzung mit Warmhaus- und Speedypflanzen.",
        cta: {
          label: "Unsere Partner",
          url: resolve("/[lang=lang]/partner", { lang: "en" })
        }
      },
      {
        type: "iframe",
        even: true,
        iframe: {
          src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87077.36113973339!2d7.146476148343918!3d46.99768327720842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e1186bcd0321b%3A0x438446635d8d02ab!2sSwissPlant%20GmbH!5e0!3m2!1sen!2sch!4v1631345560961!5m2!1sen!2sch",
          title: "Google Maps",
          ar: 4 / 3
        },
        title: "Wie Sie uns erreichen",
        description: "Wir stehen natürlich gerne für allfällige Informationen und Ratschläge zur Verfügung. Egal, ob E-Mail, Telefon oder vor Ort.",
        cta: {
          label: "Kontakt",
          url: resolve("/[lang=lang]/kontakt", { lang: "en" })
        }
      }
    ]
  }
};

export const load: PageServerLoad = ({ params }) => translations[params.lang];

export const entries: EntryGenerator = () => [
  { lang: "de" },
  { lang: "en" }
];
