<script lang="ts">
  $effect(() => {
    const appLanguages = new Set(["de", "en"]);
    const navigatorLanguages = new Set(
      navigator.languages.map(lang => lang.split("-")[0]).filter(Boolean)
    );
    const lang = [...appLanguages.intersection(navigatorLanguages)].at(0) ?? "de";
    window.location.href = `/${lang}`;
  });
</script>
