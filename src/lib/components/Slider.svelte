<script>
  import { goto } from "$app/navigation";
  import { baseUrl, localeCode } from "$lib/stores/globalStore";
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
  export let cards;

  // console.log(cards[0].image.data)
  // console.log(cards[0])

  let options = {
    rewind: true,
    classes: {
      page: "splide__pagination__page custom-pagination-page",
    },
  };
</script>

<div class="relative">
  <Splide hasTrack={false} {options}>
    <SplideTrack>
      {#each cards as card}
        <SplideSlide>
          <div
            class="flex flex-col lg:flex-row-reverse lg:justify-between gap-5 lg:gap-8">
            {#if card?.image?.data?.attributes?.ext === ".mp4"}
              <!-- <img
                class="w-full lg:w-[44%] xl:w-[50%] max-h-[62vh] object-contain"
                src={card.image.data.attributes
                  ? `${card.image.data.attributes.url}`
                  : "/default-img.png"}
                alt="" /> -->
              <video
                type="video/mp4"
                autoplay
                loop
                muted
                playsinline
                class="h-full w-full object-cover">
                <source
                  data-sveltekit-reload
                  src={card?.image?.data?.attributes.url ??
                    "/home/hero-vid.mp4"}
                  type="video/mp4" />
              </video>
            {:else}
              <img
                class="w-full lg:w-[44%] xl:w-[50%] max-h-[62vh] object-contain"
                src={card?.image?.data?.attributes.url ?? "/default-img.png"}
                alt="" />
            {/if}
            <div
              class="text-primary-content text-start pb-6 lg:w-[45%] xl:w-[40%] xl:mt-8 relative">
              <h2
                class="text-3xl xl:text-tw-title font-medium leading-none drop-shadow-md">
                {card.title ?? ""}
              </h2>
              {#if card.description}
                <p
                  class="text-sm xl:text-base font-light leading-tight mt-5 mb-3 xl:h-[11rem]">
                  {card.description}
                </p>
              {/if}

              <div class="flex gap-5 mt-6 lg:mt-8 mb-8">
                {#if card?.button_text_1 && card?.button_link_1}
                  <a
                    href={`${card.button_link_1}?lang=${$localeCode}`}
                    class="btn btn-sm rounded-full border border-white px-6 py-1 text-white hover:text-tw-blue capitalize bg-base-300 hover:bg-tw-orange">
                    {card.button_text_1}
                  </a>
                {/if}
                {#if card?.button_text_2 && card?.button_link_2}
                  <a
                    href={`${card.button_link_2}?lang=${$localeCode}`}
                    class="btn btn-sm btn-outline rounded-full px-6 py-1 text-primary-content hover:text-white capitalize bg-transparent hover:bg-tw-blue hover:border-tw-blue">
                    {card.button_text_2}
                  </a>
                {/if}
              </div>
            </div>
          </div>
        </SplideSlide>
      {/each}
    </SplideTrack>
    <div
      class="absolute bottom-3 w-full lg:w-[30%] flex justify-between splide__arrows">
      <button class="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-8 h-8 md:h-12 md:w-12 text-primary-content splide__arrow splide__arrow--prev">
          <path
            fill-rule="evenodd"
            d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
            clip-rule="evenodd" />
        </svg>
      </button>
      <ul class="splide__pagination text-primary-content mt-5" />
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-8 h-8 md:h-12 md:w-12 text-primary-content splide__arrow splide__arrow--next">
          <path
            fill-rule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </Splide>
</div>
