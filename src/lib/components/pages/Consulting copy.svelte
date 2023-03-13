<script>
  import { baseUrl } from "$lib/stores/globalStore";

  export let title;
  export let cards;

  let mouseHover;

  // console.log(JSON.stringify( cards, 0, 2 ))
</script>

<div
  class="md:px-[5%] xl:px-0 max-w-7xl mx-auto md:mt-10 lg:mt-20 md:mb-10 lg:mb-20 xl:mb-28">
  <h2
    class="hidden lg:block text-3xl xl:text-5xl text-primary-content font-light  leading-tight drop-shadow-md text-center xl:px-32">
    {title}
  </h2>

  <div class="lg:hidden grid md:grid-cols-2 md:gap-2">
    {#each cards as card}
      {@const imageUrl = card.image.data.attributes.url}
      <div
        class="border-b md:border border-accent-content/20 last:border-b-0 md:last:border-b bg-neutral">
        <div
          style="background-image: url({`${imageUrl}`})"
          class="hidden h-44 bg-cover">
          <div class="w-full h-full bg-tw-secondary/30" />
        </div>
        <section class="px-4 text-primary-content text-center py-7 md:py-5">
          <h2 class="text-3xl xl:text-tw-1 font-light leading-none">
            {card.title}
          </h2>
          <p class="text-sm xl:text-[21px] leading-tight font-extralight mt-2">
            {card.description}
          </p>
          <div class="flex gap-5 mt-5">
            <a
              class="text-sm xl:text-lg font-bold hover:underline w-fit mx-auto"
              href={card.button_link_1 ? `${card.button_link_1}` : "/"}>
              {card.button_text_1 ? card.button_text_1 : "More information >"}
            </a>
          </div>
        </section>
      </div>
    {/each}
  </div>
  <!-- Array(cards[0], cards[1], cards[2]) -->
  <div class="mt-12 hidden lg:grid grid-cols-3 gap-2">
    {#each cards as card, index}
      <div
        on:focus={() => {
          mouseHover = card.id;
        }}
        on:mouseover={() => {
          mouseHover = card.id;
        }}
        on:mouseleave={() => {
          mouseHover = 0;
        }}
        class="border border-accent bg-neutral flex flex-col">
        {#if mouseHover && mouseHover == card.id}
          <img src={card.image.data.attributes.url} alt="" />
        {:else}
          <section
            class="px-4 lg:px-6 xl:px-10 py-8 text-primary-content hover:bg-[#E0E2E5] flex flex-col h-full">
            <div class="flex-1">
              <h2 class="text-3xl xl:text-tw-1 font-light leading-none">
                {card.title}
              </h2>
              <p
                class="text-sm xl:text-[21px] leading-tight font-light mt-2 xl:mt-4">
                {card.description}
              </p>
            </div>
            <div class="flex gap-5 mt-5">
              <a
                class="text-sm xl:text-lg font-bold hover:underline text-base-200"
                href={card.button_link_1 ? `${card.button_link_1}` : "/"}>
                {card.button_text_1 ? card.button_text_1 : "More information >"}
              </a>
            </div>
          </section>
        {/if}
      </div>
    {/each}
  </div>
</div>
