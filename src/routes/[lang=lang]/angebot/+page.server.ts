import aerial from "$img/aerials/1.avif";
import type { PageServerLoad } from "./$types";

const translations = {
  de: {
    meta: {
      title: "Angebot — SwissPlant GmbH",
      description: "Schauen Sie sich unser Angebot an. Wir bieten Warmhauspflanzen verschiedener Sorten an.",
      keywords: "salat, sellerie, kohl, zucchini, tomaten, gurken, lauch, fenchel, setzlinge, warmhauspflanzen, steinwolle, erde, jungpflanzen, angebot, swissplant, agriplant"
    },
    heading: "Angebot",
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
        text: "Alle Topfvarianten (3.2cm&ndash;6cm) werden in unserem Haus produziert, die übrigen Arten lassen wir von unseren holländischen Partnern herstellen. Wir bieten auch Warmhauspflanzen in verschiedenen Varianten an. Über unser reichhaltiges Jungpflanzensortiment informieren wir Sie gerne. Für kundenspezifische Auskünfte oder Fragen steht Ihnen unser Verkaufspersonal jederzeit zur Verfügung."
      }
    ],
    table: {
      rows: [
        ["3.2cm-Einzeltopf", "Buntsalate, Nüssler, Sellerie und Lauch"],
        ["3.2cm-Doppeltopf", "Buntsalate, Nüssler, Sellerie und Lauch"],
        ["3.7cm-Einzeltopf", "Buntsalate, Nüssler, Sellerie und Lauch"],
        ["3.7cm-Riegeltopf", "Buntsalate, Sellerie und Lauch"],
        ["4cm-Einzeltopf", "Buntsalate, Nüssler, Sellerie und Lauch"],
        ["4cm-Riegeltopf", "Buntsalate, Sellerie und Lauch"],
        ["5cm-Einzeltopf", "Buntsalate"],
        ["6cm-Geklebt", "Zucchetti"],
        ["Superseedling", "Lauch und Fenchel"],
        ["G195", "Kohlarten und Sellerie"],
        ["G280", "Kohlarten und Sellerie"],
        ["PT770", "Lauch- und Kohlarten"],
        ["TQ 10.5", "Warmhauspflanzen Hobbybereich unveredelt"]
      ]
    }
  },
  en: {
    meta: {
      title: "Portfolio — SwissPlant GmbH",
      description: "This is our portfolio. We offer a wide range of warm house plants and individual consultings.",
      keywords: "salad, salads, celery, cabbage, cabbages, zucchini, tomato, tomatoes, cucumber, cucumbers, leek, fennel, warm house, plants, warm house plants, mineral wool, soil, sales, swissplant, agriplant, portfolio"
    },
    heading: "Portfolio",
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
        text: "All pot variants (3.2cm to 6cm) are produced in-house. Everything else is produced by our dutch partners. We also offer warm house plants in various variants. If you need any information or have questions, our sales team will be happy to help you out!"
      }
    ],
    table: {
      rows: [
        ["3.2cm single pot", "Salads, field salad, celery and leek"],
        ["3.2cm double pot", "Salads, field salad, celery and leek"],
        ["3.7cm single pot", "Salads, field salad, celery and leek"],
        ["3.7cm lock pot", "Salads, celery and leek"],
        ["4cm single pot", "Salads, field salad, celery and leek"],
        ["4cm lock pot", "Salads, celery and leek"],
        ["5cm single pot", "Salads"],
        ["6cm glued", "Zucchini"],
        ["Superseedling", "Leek and fennel"],
        ["G195", "Cabbages and celery"],
        ["G280", "Cabbages and celery"],
        ["PT770", "Leeks and cabbages"],
        ["TQ 10.5", "Warm house plants for hobbyists"]
      ]
    }
  }
} satisfies App.Translations;

export const load: PageServerLoad = ({ params }) => translations[params.lang];
