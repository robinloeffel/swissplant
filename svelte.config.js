import vercel from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: vercel(),
    alias: {
      $styles: "src/lib/styles",
      $components: "src/lib/components",
      $img: "src/lib/img",
      $svg: "src/lib/svg"
    },
    prerender: {
      handleMissingId: ({ id }) => {
        if (id !== "!") {
          throw new Error("missing prerendered page", id);
        }
      }
    }
  }
};
