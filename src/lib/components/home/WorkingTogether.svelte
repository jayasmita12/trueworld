<script>
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";

  export let brands;
  export let title;
</script>

<div
  class="px-[5%] 2xl:px-0  py-12 bg-[#F1F1F1] md:bg-white text-center overflow-hidden">
  <div class="max-w-7xl mx-auto">
    <p class="text-tw-blue text-tw-3 md:text-tw-2 font-semibold">
      {title ?? "Working together makes the difference"}
    </p>

    <div class="hidden mt-10 lg:flex gap-8 w-full mx-auto">
      <Splide
        options={{
          rewind: true,
          autoplay: true,
          perPage: 4,
          arrows: false,
          pagination: false,
          interval: 2000,
          gap: 30,
        }}>
        {#each brands as brand}
          {@const logoUrl = brand?.logo?.data?.attributes?.url}
          <SplideSlide>
            <img
              class="w-full h-6 md:h-14 object-contain"
              src={`${logoUrl}`}
              alt="" />
          </SplideSlide>
        {/each}
      </Splide>
    </div>
    <div class="lg:hidden mt-5 gap-8 w-fit max-w-6xl mx-auto">
      <Splide
        options={{
          rewind: true,
          autoplay: true,
          perPage: 1,
          arrows: false,
          pagination: false,
          interval: 2000,
        }}>
        {#each brands as brand}
          {@const logoUrl = brand?.logo?.data?.attributes?.url}
          <SplideSlide>
            <img
              class="w-full h-6 md:h-24 object-contain"
              src={`${logoUrl}`}
              alt="" />
          </SplideSlide>
        {/each}
      </Splide>
    </div>
  </div>
</div>
