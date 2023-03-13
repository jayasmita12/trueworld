<script>
  import Hero from "$lib/components/home/Hero.svelte";
  import ConsultingServices from "$lib/components/home/ConsultingServices.svelte";
  import Explore from "$lib/components/home/Explore.svelte";
  import WorkingTogether from "$lib/components/home/WorkingTogether.svelte";
  import Contact from "$lib/components/Contact.svelte";
  import SoftwareSolutions from "$lib/components/home/SoftwareSolutions.svelte";
  import { getData, homePageData, localeCode } from "$lib/stores/globalStore";
  import { onMount } from "svelte";

  /** @type {import('./$types').PageData} */
  export let data;
  // console.log(data)
  export let form;

  let promise = getData($localeCode);

  onMount(async () => {
    promise = await getData($localeCode);
  });

  // $: console.log(data.contents_section[1].card);
</script>

<svelte:head>
  <title>Trueworld</title>
  <meta name="description" content={data?.title} />
</svelte:head>

<div class="bg-secondary">
  {#await promise }
    <!-- {data} -->
    <div class="h-screen grid place-items-center bg-base-300">
      <div class="loader" />
    </div>
    {:then data}
    {#if $homePageData?.hero_section.length > 0}
      <Hero hero={$homePageData?.hero_section[0]} />
    {/if}

    {#if $homePageData.contents_section.length > 0}
      <ConsultingServices
        header={$homePageData?.contents_section[0]}
        cards={$homePageData?.contents_section[1]?.card} />
    {/if}

    {#if $homePageData.contents_section.length > 2}
      <SoftwareSolutions
        header={$homePageData?.contents_section[2]}
        cards={$homePageData?.contents_section[3]?.card} />
    {/if}

    {#if $homePageData.contact_section.length > 0}
      <Contact {form} contactData={$homePageData?.contact_section} />
    {/if}

    {#if $homePageData.brands_section.length > 0}
      <WorkingTogether
        title={$homePageData?.brands_section[0]?.title}
        brands={$homePageData?.brands_section[0]?.brand} />
    {/if}
  {/await}
</div>
