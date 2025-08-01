import "@total-typescript/ts-reset";

// https://svelte.dev/docs/kit/types#app.d.ts
declare global {
  namespace App {
    interface PageData {
      title?: string;
      description?: string;
      keywords?: string;
    }
  }
}
