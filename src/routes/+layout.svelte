<script>
  import { afterNavigate } from "$app/navigation";
  import PageTransition from "$lib/components/PageTransition.svelte";
  import { localeCode, getNavData } from "$lib/stores/globalStore";
  import { onMount } from "svelte";
  import "../app.css";

  /** @type {import('./$types').LayoutData} */
  export let data;
  const { locales } = data;
  // console.log(footerData);

  $: navPromise = getNavData($localeCode);

  onMount(async () => {
    if (localStorage.getItem("lang")) {
      $localeCode = localStorage.getItem("lang");
      // console.log("localstorage - " + $localeCode);
    } else {
      const userLanguage = navigator.language;
      if (userLanguage.startsWith("es")) {
        $localeCode = "es";
        localStorage.setItem("lang", "es");
      } else {
        $localeCode = "en";
        localStorage.setItem("lang", "en");
      }
    }
    console.log($localeCode);

    const theme = localStorage.getItem("theme");
    if (!theme) {
      localStorage.setItem("theme", "dark");
    }

    navPromise = await getNavData($localeCode);
  });

  afterNavigate(() => {
    // if ($showNavMenu) $showNavMenu = false;
  });
</script>

<!-- navData={} -->
<main class="bg-secondary min-h-screen">
  {#await navPromise}
    <div class="h-screen grid place-items-center bg-base-300">
      <div class="loader" />
    </div>
  {:then data}
    <!-- <PageTransition url={$page.url}> -->
    <slot />
    <!-- </PageTransition> -->
  {/await}
</main>
