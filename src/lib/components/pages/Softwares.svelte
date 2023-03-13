<script>
  import { baseUrl } from "$lib/stores/globalStore";

  export let title;
  export let cards;

  let hover = false;
</script>

<div
  class="px-[5%] xl:px-0 max-w-7xl mx-auto mt-10 md:mt-20 mb-10 md:mb-20 xl:mb-28">
  <div class="xl:px-32">
    <h2
      class="text-3xl xl:text-5xl text-primary-content font-light leading-tight drop-shadow-md text-center border-2 border-red-500">
      {title ?? "Some title"}
    </h2>
  </div>

  <div class="lg:hidden mt-10 grid md:grid-cols-2 gap-5 md:gap-2">
    {#each cards as card}
      {@const imageUrl = card.image.data.attributes.url}
      <div class="border border-accent bg-neutral">
        <!-- <p>{$baseUrl}{imageUrl}</p> -->
        <div
          style="background-image: url({`${imageUrl}`})"
          class="h-44 bg-cover bg-center">
          <div class="w-full h-full bg-tw-secondary/30" />
        </div>
        <section class="px-4 text-primary-content">
          <h2 class="text-3xl xl:text-tw-[24px] font-light leading-none mt-4">
            {card.title}
          </h2>
          <p class="text-sm xl:text-[21px] leading-tight font-extralight mt-2">
            {card.description}
          </p>
          <div class="flex gap-5 my-5">
            <a
              class="text-sm xl:text-lg font-bold hover:underline "
              href={card.button_link_1 ? `${card.button_link_1}` : "/"}>
              {card.button_text_1 ? card.button_text_1 : "More information >"}
            </a>
          </div>
        </section>
      </div>
    {/each}
  </div>

  <div class="mt-12 hidden lg:block">
    <section class="grid grid-cols-3 gap-2 ">
      {#each Array(cards[0], cards[1], cards[2]) as card}
        {@const imageUrl = card.image.data.attributes.url}
        {#if hover}
          <div style="background-image: url({`${imageUrl}`})" class="flex" />
        {:else}
          <div class="border border-accent bg-neutral flex flex-col">
            <!-- hover:bg-[#E0E2E5] -->
            <section
              class="px-4 lg:px-6 xl:px-10 py-8 text-primary-content  flex flex-col h-full">
              <div class="flex-1 ">
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
                  class="text-sm xl:text-lg font-bold hover:underline "
                  href={card.button_link_1 ? `${card.button_link_1}` : "/"}>
                  {card.button_text_1
                    ? card.button_text_1
                    : "More information >"}
                </a>
              </div>
            </section>
          </div>
        {/if}
      {/each}

      <div
        class="grid-cols-1 border border-accent bg-neutral px-6 xl:px-10 py-8 flex justify-between items-center gap-x-10 xl:gap-x-20 3xl:gap-x-36 
        col-span-1 text-primary-content hover:bg-[#E0E2E5]">
        <section class="">
          <h2 class="text-3xl xl:text-tw-1 font-light leading-none">
            {cards[3].title}
          </h2>
          <p
            class="text-sm xl:text-[21px] leading-tight font-light mt-2 xl:mt-4">
            {cards[3].description}
          </p>
          <div class="flex gap-5 mt-5">
            <a
              class="text-sm xl:text-lg font-bold hover:underline "
              href={cards[3].button_link_1 ? `${cards[3].button_link_1}` : "/"}>
              {cards[3].button_text_1
                ? cards[3].button_text_1
                : "More information >"}
            </a>
          </div>
        </section>
      </div>
      <div
        class="w-full p-5 flex items-center border border-accent bg-neutral hover:bg-[#E0E2E5]">
        <!-- {`${cards[3].image.data.attributes.url}`} -->
        <img
          class="w-full object-contain"
          src="./smart-dashboard/dashboard.png"
          alt="" />
      </div>

      {#each Array(cards[4], cards[5], cards[6], cards[7]) as card}
        <div class="border border-accent bg-neutral flex flex-col">
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
                class="text-sm xl:text-lg font-bold hover:underline "
                href={card.button_link_1 ? `${card.button_link_1}` : "/"}>
                {card.button_text_1 ? card.button_text_1 : "More information >"}
              </a>
            </div>
          </section>
        </div>
      {/each}
    </section>
  </div>
</div>
