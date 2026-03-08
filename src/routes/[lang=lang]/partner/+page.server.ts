import machine from "$img/photoshoot/machine.avif";
import type { PageServerLoad } from "./$types";

const translations = {
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
                value: "AgriPlant AG"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Durch unseren ortsansässigen Produktionsbetrieb wachsen unsere Jungpflanzen im selben «Haus», wo sie anschliessend weiter kultiviert werden. Dank der individuellen Ausliefertage und den kurzen Transportdistanzen zum Kunden, können wir Ihnen stressfreie Pflanzen anbieten."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Um alle Wünsche und Bedürfnisse der Kundschaft zu erfüllen, stehen verschiedene Kulturräume zur Verfügung. Der Betrieb ist in der Lage Jungpflanzen von Auberginen bis Zwiebeln bestens zu kultivieren. Die Gewächshäuser entsprechen den neusten technischen Erkenntnissen im Gewächshausbau. Freilandflächen und Cabrio-Häuser zum Abhärten der Pflanzen garantieren optimale Startbedingungen nach dem Pflanzen."
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "Gipmans Holland"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Bei der Firma Gipmans in Holland lassen wir unsere Speedy- und Warmhauspflanzen aussäen. Traypflanzen werden halbfertig bezogen, um sie anschliessend bei uns fertig zu kultivieren. Warmhauspflanzen werden fertig zu uns geliefert und durch unsere eigene Betriebsspedition direkt zum Kunden geliefert."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Die Firma Gipmans steht für eine marktorientiertes Wissen und Können. Gemeinsame Wissensentwicklungen und Innovationen führen nicht nur zu einem besseren Ertrag, sondern tragen auch dazu bei, dass wir uns weitaus besser auf Ihre jeweils spezifische Marktsituation und die gewünschte Qualität einstellen können."
              }
            ]
          }
        ]
      }
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
                value: "AgriPlant"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Since we produce where we sell, all our saplings grow up in the same \"house\" as they will be cultivated in. Thanks to the individual delivery days and short transportation distances to our clients, we can offer stress-free plants."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "To make every wish of our clients come true, there are several different cultivation areas in our house. From a like aspargus to z like zucchini, we're able to cultivate saplings in the best quality. Our growing houses are updated with the latest technical improvements, and free field areas as well as convertible roof houses allow us to harden the plants before delivering them to you."
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "Gipmans"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "At Gipmans in the Netherlands, we seed our speedy and warm house saplings. Tray plants are obtained half-finished, so we can then cultivate them in our own house. The warm house plants are delivered to us already finished. They get delivered to our clients through our transportation units."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Gipmans stands for market-oriented knowledge and know-how. Joint knowledge improvements and innovations lead not only to a greater gain, but let us also help us adapt to your specific market situation and desired quality."
              }
            ]
          }
        ]
      }
    }
  }
} satisfies App.Translations;

export const load: PageServerLoad = ({ params }) => translations[params.lang];
