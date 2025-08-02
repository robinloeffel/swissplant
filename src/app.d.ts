import type { Hero, SplitTile, TeamGrid } from "$components";
import "@total-typescript/ts-reset";
import type { ComponentProps } from "svelte";

// https://svelte.dev/docs/kit/types#app.d.ts
declare global {
  namespace App {
    interface Translations {
      de: PageData;
      en: PageData;
    }

    interface PageData {
      meta: {
        title: string;
        description: string;
        keywords: string;
      };
      heading: string;
      hero: ComponentProps<typeof Hero>;
      splitTiles?: ComponentProps<typeof SplitTile>[];
      teamGrid?: ComponentProps<typeof TeamGrid>;
    }
  }
}
