<script>
  import { localeCode } from "$lib/stores/globalStore";
  import Card from "./Card.svelte";
  import Header from "./Header.svelte";

  export let cards = [];
  export let header;
  // console.log(header);
</script>

<div class="px-[5%] xl:px-0 max-w-7xl mx-auto mt-10 xl:mt-16 mb-14">
  <Header
    title={header?.title ?? "Software Solutions"}
    description={header?.description ??
      "Our ecosystem of solutions based on science, technological innovation and Blockchain technology help businesses on their journey towards mitigating their environmental impact and becoming carbon neutral."}
    buttonText={header?.button_text ?? "check all software solutions"}
    buttonLink={header?.button_link ?? "/software"} />

  <div class="text-center mt-8">
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {#each cards as card}
        {@const imageUrl = card?.image?.data?.attributes?.url}
        <Card
          service={header?.title ? header?.title : "Software Solutions"}
          {imageUrl}
          title={card.title}
          description={card.description}
          buttonText={card.button_text_1 ?? "More info"}
          buttonLink={card.button_link_1 ?? "/software"} />
      {/each}
    </section>
  </div>
  <a
    href={header?.button_link
      ? `${header?.button_link}?lang=${$localeCode}`
      : `/software?lang=${$localeCode}`}
    class="md:hidden text-xs md:text-xl font-bold flex items-center 
  text-primary-content gap-x-1 hover:underline
  w-fit mx-auto mt-5">
    <span>+</span>
    <span>
      {header?.button_text ?? "check all software solutions"}
    </span>
  </a>
</div>
