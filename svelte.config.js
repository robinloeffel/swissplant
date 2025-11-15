import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    alias: {
      $styles: "src/lib/styles",
      $components: "src/lib/components",
      $img: "src/lib/img",
      $svg: "src/lib/svg"
    },
    csp: {
      mode: "hash",
      directives: {
        "default-src": ["self"],
        "script-src": ["self", "cloud.umami.is"],
        "connect-src": ["self", "api-gateway.umami.dev"],
        "frame-ancestors": ["none"]
      }
    },
    prerender: {
      handleMissingId: ({ id }) => {
        if (id !== "!") {
          throw new Error("missing pre-rendered page", id);
        }
      }
    }
  }
};
