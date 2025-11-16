import type { Hero, SplitTile, Table, TeamGrid } from "$components";
import "@total-typescript/ts-reset";
import type { ComponentProps } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

// https://svelte.dev/docs/kit/types#app.d.ts
declare global {
  namespace App {
    type Lang = "de" | "en";
    type Translations = Record<Lang, ContentPageData>;

    interface Richtext<T extends HTMLElement = HTMLElement> {
      type: "p" | "h1" | "h2" | "h3" | "ul" | "ol" | "li" | "strong" | "em" | "a" | "address";
      text: string;
      attributes?: HTMLAttributes<T>;
    }

    interface ContentPageData {
      meta: {
        title: string;
        description: string;
        keywords: string;
      };
      heading: string;
      hero: ComponentProps<typeof Hero>;
      splitTiles?: ComponentProps<typeof SplitTile>[];
      teamGrid?: ComponentProps<typeof TeamGrid>;
      richtext?: Richtext[];
      table?: ComponentProps<typeof Table>;
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-object-type -- allow interface merging
    interface PageData extends ContentPageData {}
  }
}
