<script lang="ts">
  $effect.pre(() => {
    const appLanguages = new Set<App.Lang>(["de", "en"]);
    const navigatorLanguages = new Set(navigator.languages.map(lang => lang.split("-").at(0)));
    const [lang = "de"] = appLanguages.intersection(navigatorLanguages);
    window.location.href = `/${lang}`;
  });
</script>
