<script>
  import Footer from "$lib/components/Footer.svelte";
  import Nav from "$lib/components/Nav.svelte";

  /** @type {import('./$types').LayoutData} */
  export let data;
  const { locales } = data;
</script>

<main>
  <Nav showNavLinks={true} />
  <slot />
  <Footer {locales} />
</main>
