<script>
  import Contact from "$lib/components/Contact.svelte";
  import Hero from "./Hero.svelte";

  /** @type {import('./$types').PageData} */
  export let data;
  export let form;
  // $: console.log(form);

  // console.log(data);
</script>

<svelte:head>
  <title>{`Trueworld - ${data?.title}`}</title>
  <meta name="description" content={data?.title} />
</svelte:head>

<div>
  {#if data.hero_section.length > 0}
    <Hero hero={data?.hero_section[0]} />
  {/if}
  {#if data.hero_section.length > 0}
    <Contact contactData={data?.contact_section} {form} />
  {/if}
</div>
