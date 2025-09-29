import barbara from "$img/employees/barbara.avif";
import hansPeter from "$img/employees/hans-peter.avif";
import ivan from "$img/employees/ivan.avif";
import mariusz from "$img/employees/mariusz.avif";
import markus from "$img/employees/markus.avif";
import martin from "$img/employees/martin.avif";
import miguel from "$img/employees/miguel.avif";
import muhamet from "$img/employees/muhamet.avif";
import sandro from "$img/employees/sandro.avif";
import shpend from "$img/employees/shpend.avif";
import telja from "$img/employees/telja.avif";
import tinu from "$img/photoshoot/tinu.avif";
import type { PageServerLoad } from "./$types";

const translations = {
  de: {
    meta: {
      title: "Team — SwissPlant GmbH",
      description: "Erfahren Sie, wer bei der SwissPlant GmbH angestellt ist.",
      keywords: "mitarbeiter, angestellte, sales, kontaktdaten, muentschemier, müntschemier, swissplant, agriplant, swissplant gmbh, agriplant ag"
    },
    heading: "Team",
    hero: {
      images: [
        {
          src: tinu,
          alt: "Martin Löffel, der Gründer der SwissPlant GmbH."
        }
      ]
    },
    teamGrid: {
      members: [
        {
          name: "Martin Löffel",
          position: "Geschäftsführer",
          image: {
            src: martin,
            alt: "Martin Loeffel"
          },
          contact: {
            email: "m.loeffel@swissplant.ch",
            phone: "+41 79 631 45 59"
          }
        },
        {
          name: "Sandro Löffel",
          position: "Stv. Geschäftsführer",
          image: {
            src: sandro,
            alt: "Sandro"
          },
          contact: {
            email: "s.loeffel@swissplant.ch",
            phone: "+41 79 641 52 10"
          }
        },
        {
          name: "Telja Baumann",
          position: "Empfang & Administration",
          image: {
            src: telja,
            alt: "Telja"
          },
          contact: {
            email: "t.baumann@swissplant.ch",
            phone: "+41 79 815 38 35"
          }
        },
        {
          name: "Ivan Gross",
          position: "Leiter Gewächshaus",
          image: {
            src: ivan,
            alt: "Ivan"
          }
        },
        {
          name: "Shpend Thaqi",
          position: "Leiter Produktion",
          image: {
            src: shpend,
            alt: "Shpend"
          }
        },
        {
          name: "Hans-Peter Schwab",
          position: "Transport",
          image: {
            src: hansPeter,
            alt: "Hans Peter"
          }
        },
        {
          name: "Mariusz Wronski",
          position: "Transport",
          image: {
            src: mariusz,
            alt: "Mariusz"
          }
        },
        {
          name: "Muhamet Duraku",
          position: "Produktion",
          image: {
            src: muhamet,
            alt: "Muhamet"
          }
        },
        {
          name: "Barbara Dubler",
          position: "Transport",
          image: {
            src: barbara,
            alt: "Barbara"
          }
        },
        {
          name: "Markus Niklaus",
          position: "Maschinenführer",
          image: {
            src: markus,
            alt: "Markus"
          }
        },
        {
          name: "Miguel Pereira",
          position: "Maschinenführer",
          image: {
            src: miguel,
            alt: "Miguel"
          }
        }
      ]
    }
  },
  en: {
    meta: {
      title: "Team — SwissPlant GmbH",
      description: "Meet the team behind SwissPlant GmbH. Learn more about our expertise and passion for plants.",
      keywords: "Team, SwissPlant, Plants, Expertise, Passion"
    },
    heading: "Team",
    hero: {
      images: [
        {
          src: tinu,
          alt: "SwissPlant from above"
        }
      ]
    },
    teamGrid: {
      members: [
        {
          name: "Martin Löffel",
          position: "CEO & Sales",
          image: {
            src: martin,
            alt: "Martin Loeffel"
          },
          contact: {
            email: "m.loeffel@swissplant.ch",
            phone: "+41 79 631 45 59"
          }
        },
        {
          name: "Sandro Löffel",
          position: "Vice CEO & Sales",
          image: {
            src: sandro,
            alt: "Sandro"
          },
          contact: {
            email: "s.loeffel@swissplant.ch",
            phone: "+41 79 641 52 10"
          }
        },
        {
          name: "Telja Baumann",
          position: "Admin & Sales",
          image: {
            src: telja,
            alt: "Telja"
          },
          contact: {
            email: "t.baumann@swissplant.ch",
            phone: "+41 79 815 38 35"
          }
        },
        {
          name: "Ivan Gross",
          position: "Greenhouse Manager",
          image: {
            src: ivan,
            alt: "Ivan"
          }
        },
        {
          name: "Shpend Thaqi",
          position: "Production Manager",
          image: {
            src: shpend,
            alt: "Shpend"
          }
        },
        {
          name: "Hans-Peter Schwab",
          position: "Transport",
          image: {
            src: hansPeter,
            alt: "Hans Peter"
          }
        },
        {
          name: "Mariusz Wronski",
          position: "Transport",
          image: {
            src: mariusz,
            alt: "Mariusz"
          }
        },
        {
          name: "Muhamet Duraku",
          position: "Production",
          image: {
            src: muhamet,
            alt: "Muhamet"
          }
        },
        {
          name: "Barbara Dubler",
          position: "Transport",
          image: {
            src: barbara,
            alt: "Barbara"
          }
        },
        {
          name: "Markus Niklaus",
          position: "Machine Operator",
          image: {
            src: markus,
            alt: "Markus"
          }
        },
        {
          name: "Miguel Pereira",
          position: "Machine Operator",
          image: {
            src: miguel,
            alt: "Miguel"
          }
        }
      ]
    }
  }
} satisfies App.Translations;

export const load: PageServerLoad = ({ params }) => translations[params.lang];
