<script>
  import Hero from "$lib/components/home/Hero.svelte";

  // from pages
  import Sectors from "$lib/components/pages/Sectors.svelte";
  import Plans from "$lib/components/pages/Plans.svelte";
  import Discover from "$lib/components/pages/Discover.svelte";
  import Technology from "$lib/components/pages/Technology.svelte";
  import Steps from "$lib/components/pages/Steps.svelte";
  import Softwares from "$lib/components/pages/Softwares.svelte";
  import Nature from "$lib/components/pages/Nature.svelte";

  import ConsultingServices from "$lib/components/home/ConsultingServices.svelte";

  import Explore from "$lib/components/home/Explore.svelte";
  import WorkingTogether from "$lib/components/home/WorkingTogether.svelte";
  import Contact from "$lib/components/Contact.svelte";
  import SoftwareSolutions from "$lib/components/home/SoftwareSolutions.svelte";
  import Slider from "$lib/components/Slider.svelte";
  import Faqs from "$lib/components/pages/Faqs.svelte";

  /** @type {import('./$types').PageData} */
  export let data;

  // "hero_section" : []
  // "main": null,
  // "contents_section": [], //for software Solutions, consulting services on home page
  // "categories_section": [], //deprecated
  // "cards_section": [], used in software/consulting grid and for slider content
  // "explore_section": [],
  // "brands_section": [],
  // "gallery_section": [],
  // "nature_section": [],
  // "features_section": [],
  // "plans_section": [],
  // "faq_section": [],
  // "environment_section": [],
  // "contact_section": [],
  // "sectors_section": [],
  // "technology_section": []

  const isObjectEmpty = (objectName) => {
    return JSON.stringify(objectName) === "{}";
  };

  export let form;

  // $: console.log(JSON.stringify(data, 0, 2));
</script>

<svelte:head>
  {#if data}
  <title>{`Trueworld - ${data?.title}`}</title>
  <meta name="description" content={data?.title} />
  {/if}
</svelte:head>

{#if data.hasOwnProperty('hero_section') 
|| data.hasOwnProperty('cards_section')
|| data.hasOwnProperty('nature_section')
|| data.hasOwnProperty('slider_section')
|| data.hasOwnProperty('contents_section')
|| data.hasOwnProperty('features_section')
|| data.hasOwnProperty('contact_section')
|| data.hasOwnProperty('sectors_section')
|| data.hasOwnProperty('steps_section')
|| data.hasOwnProperty('plans_section')
|| data.hasOwnProperty('technology_section')
|| data.hasOwnProperty('faq_section')}
<div class="">
  <!-- <p class="bg-green-400">this is a dynamic page for testing</p>  -->
  <!-- {data} -->
  {#if data.hero_section.length > 0}
    <Hero hero={data?.hero_section[0]} />
  {/if}

  {#if data.slider_section.length > 0}
    <section class="px-[5%] xl:px-0 max-w-7xl mx-auto my-10 xl:my-28">
      <Slider cards={data?.slider_section[0]?.card} />
    </section>
  {/if}

  <!-- {#if data.cards_section?.length > 0 }
    <Softwares
      title={data?.cards_section[0]?.title}
      cards={data?.cards_section[0]?.card} />
  {/if} -->

  {#if data.nature_section.length > 0}
    <Nature
      bg={data?.nature_section[0]?.nature_bg.data?.attributes}
      title={data?.nature_section[0]?.title}
      description={data?.nature_section[0]?.description}
      text={data?.nature_section[0]?.text}
      button_text={data?.nature_section[0]?.button_text}
      button_link={data?.nature_section[0]?.button_link} />
  {/if}

  {#if data?.contents_section.length > 0}
    <ConsultingServices
      header={data?.contents_section[0]}
      cards={data?.contents_section[1]?.card} />
  {/if}

  {#if data.features_section?.length > 0}
    <Discover
      title={data?.features_section[0]?.title}
      features={data?.features_section[0]?.feature} />
  {/if}

  {#if data.sectors_section.length > 0}
    <Sectors
      title={data?.sectors_section[0]?.title}
      sectors={data?.sectors_section[0]?.card} />
  {/if}

  {#if data.steps_section.length > 0}
    <Steps
      title={data?.steps_section[0].title}
      steps={data?.steps_section[0].feature} />
  {/if}

  {#if data.plans_section.length > 0}
    <Plans plans={data?.plans_section} />
  {/if}

  {#if data.contact_section.length > 0}
    <Contact {form} contactData={data?.contact_section} />
  {/if}

  <!-- <SoftwareSolutions
        header={data?.contents_section[2]}
        cards={data?.contents_section[3]?.card} />
    <Contact form={form}
        title={data?.contact_section[0]?.title}
        subtitle={data?.contact_section[0]?.description} />
    <WorkingTogether
        title={data?.brands_section[0]?.title}
        brands={data?.brands_section[0]?.brand} /> -->
  {#if data.technology_section.length > 0}
    <Technology hero={data?.technology_section[0]} />
  {/if}

  {#if data.faq_section.length > 0}
    {@const faqs = data.faq_section.slice(1, data.faq_section.length)}
    <Faqs
      title={data?.faq_section[0]?.title}
      description={data?.faq_section[0]?.description}
      {faqs} />
  {/if}
</div>
{:else}
  <div class="h-screen w-screen flex items-center justify-center">
    <p class="text-primary-content"> Page not available..</p>
  </div>
{/if}
