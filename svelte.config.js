import vercel from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "svelte-define-config";

export default defineConfig({
	preprocess: vitePreprocess(),
	kit: {
		adapter: vercel(),
		alias: {
			$styles: "./src/lib/styles",
			$components: "./src/lib/components",
			$assets: "./src/lib/assets"
		}
	}
});
