<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    const appLanguages = new Set<App.Lang>(["de", "en"]);
    const navigatorLanguages = new Set(
      window.navigator.languages
        .map(lang => lang.split("-").at(0))
        .filter(Boolean)
    );
    const [lang = "de"] = appLanguages.intersection(navigatorLanguages);
    window.location.href = lang;
  });
</script>
