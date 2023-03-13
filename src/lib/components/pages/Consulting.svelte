<script>
  import { localeCode , isDark } from "$lib/stores/globalStore";

  export let title;
  export let cards;

  let mouseHover;
  let selected = cards.length > 0 ? cards[0] : {};

  // console.log(JSON.stringify( cards, 0, 2 ))
</script>

<div
  class="md:px-[5%] xl:px-0 max-w-7xl mx-auto md:mt-10 lg:mt-20 md:mb-10 lg:mb-20 xl:mb-28">
  <h2
    class="hidden lg:block text-3xl xl:text-5xl text-primary-content font-light  leading-tight drop-shadow-md text-center xl:px-32">
    {title ?? ""}
  </h2>

  <div class="lg:hidden grid md:grid-cols-2 md:gap-2">
    {#each cards as card}
      {@const imageUrl = card?.image?.data?.attributes.url}
      <div
        class="border-b md:border border-accent-content/20 last:border-b-0 md:last:border-b bg-neutral">
        {#if card.image.data}
          <div
            style="background-image: url({imageUrl})"
            class="hidden h-44 bg-cover">
            <div class="w-full h-full bg-tw-secondary/30" />
          </div>
        {/if}
        <section class="px-4 text-primary-content py-7 md:py-5">
          <h2 class="text-3xl xl:text-tw-1 font-light leading-none">
            {card.title ?? ""}
          </h2>
          <p class="text-sm xl:text-[21px] leading-tight font-light mt-2">
            {card.description ?? ""}
          </p>
          <div class="flex gap-5 mt-5">
            <a
              class="text-sm xl:text-lg font-bold hover:underline w-fit"
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
    {#each cards.slice(0, 4) as card, index}
      <!-- svelte-ignore a11y-mouse-events-have-key-events -->
      <div
        on:mouseover={() => (selected = card)}
        on:mouseleave={() => (selected = cards[0])}
        class="border border-accent bg-neutral flex flex-col">
        <section
          class="px-4 lg:px-6 xl:px-10 py-8 text-primary-content {$isDark ? 'hover:bg-[#454545]' : 'hover:bg-accent'  } flex flex-col h-full">
          <div class="flex-1">
            <h2 class="text-3xl xl:text-tw-1 font-light leading-none">
              {card.title ?? ""}
            </h2>
            <p
              class="text-sm xl:text-[21px] leading-tight font-light mt-2 xl:mt-4">
              {card.description ?? ""}
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
      </div>
    {/each}

    {#if cards.length > 0}
      <div class="border border-accent bg-neutral">
        <!-- <img
          class="h-full w-full object-cover"
          src={selected?.image?.data?.attributes.url
            ? selected?.image?.data?.attributes.url
            : "/default-img.png"}
          alt="" /> -->

        {#if selected?.image?.data?.attributes?.ext === ".mp4"}
          <video
            type="video/mp4"
            autoplay
            loop
            muted
            playsinline
            class="h-full w-full object-cover">
            <source
              data-sveltekit-reload
              src={selected?.image?.data?.attributes.url ??
                "/home/hero-vid.mp4"}
              type="video/mp4" />
          </video>
        {:else if selected.image.data}
          <img
            class="h-full w-full object-cover object-center"
            src={selected?.image?.data?.attributes.url ?? "/default-img.png"}
            alt="" />
        {/if}
      </div>
    {/if}

    {#each cards.slice(4, cards.length) as card, index}
      <!-- svelte-ignore a11y-mouse-events-have-key-events -->
      <div
        on:mouseover={() => (selected = card)}
        on:mouseleave={() => (selected = cards[0])}
        class="border border-accent bg-neutral flex flex-col">
        <section
          class="px-4 lg:px-6 xl:px-10 py-8 text-primary-content {$isDark ? 'hover:bg-[#454545]' : 'hover:bg-accent'} 
          flex flex-col h-full">
          <div class="flex-1">
            <h2 class="text-3xl xl:text-tw-1 font-light leading-none">
              {card.title ?? ""}
            </h2>
            <p
              class="text-sm xl:text-[21px] leading-tight font-light mt-2 xl:mt-4">
              {card.description ?? ""}
            </p>
          </div>
          <div class="flex gap-5 mt-5">
            <a
              class="text-sm xl:text-lg font-bold hover:underline text-base-200"
              href={card.button_link_1
                ? `${card.button_link_1}?lang=${$localeCode}`
                : `/consulting?lang=${$localeCode}`}>
              {card.button_text_1 ? card.button_text_1 : "More information >"}
            </a>
          </div>
        </section>
      </div>
    {/each}
  </div>
</div>
