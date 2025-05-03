<script lang="ts">
  import { getLanguage } from "$config";

  $effect(() => {
    location.href = `/${getLanguage(navigator)}`;
  });
</script>
