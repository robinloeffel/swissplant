<script lang="ts">
  import { config, isLanguage } from "$config";
  import { redirect } from "@sveltejs/kit";

  const language = isLanguage(navigator.language) ? navigator.language : config.defaultLanguage;
  redirect(308, `/${language}`);
</script>
