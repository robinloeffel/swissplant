<script lang="ts">
  import { base } from "$app/paths";
  import { config, isLanguage } from "$config";
  import { redirect } from "@sveltejs/kit";

  const language = isLanguage(navigator.language) ? navigator.language : config.defaultLanguage;
  redirect(308, `${base}/${language}`);
</script>
