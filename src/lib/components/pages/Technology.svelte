<script>
  import { goto } from "$app/navigation";
  import { localeCode } from "$lib/stores/globalStore";

  export let hero;
  const bg = hero?.bg?.data?.attributes;
</script>

<div class="text-white mt-1">
  <div class="bg-base-300 px-[5%] xl:px-0 py-2">
    <h2
      class="text-tw-30 md:text-tw-50 font-medium lg:text-center max-w-5xl mx-auto">
      {hero.title ?? "Technology for climate change"}
    </h2>
  </div>
  <div class="relative w-full h-[60vh]">
    {#if bg?.ext === ".mp4"}
      <video
        type="video/mp4"
        autoplay
        loop
        muted
        playsinline
        class="h-full w-full object-cover">
        <source data-sveltekit-reload src={bg?.url} type="video/mp4" />
      </video>
    {:else}
      <img
        class="h-full w-full object-cover object-center"
        src={bg?.url ? `${bg?.url}` : "/fiveSteps/hero.png"}
        alt="" />
    {/if}
    <div class="absolute top-0 left-0 bg-neutral-focus/50 h-full w-full">
      <div
        class="px-[5%] py-10 lg:py-28 xl:px-0 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between">
        <section class="lg:w-1/2">
          <h1 class="lg:text-tw-title text-tw-30 font-light leading-none">
            {hero.description
              ? hero.description
              : "Ready to save your consumption?"}
          </h1>
          <div class="flex gap-x-3 mt-10">
            <a
              href={hero.button_link_1
                ? `${hero.button_link_1}?lang=${$localeCode}`
                : `/contact?lang=${$localeCode}`}
              class="btn btn-md border-0 rounded-full px-6 text-white capitalize lg:text-lg font-regular bg-tw-orange hover:bg-tw-orange">
              {hero.button_text_1 ? hero.button_text_1 : "Book a demo"}
            </a>
            <a
              href={hero.button_link_2
                ? `${hero.button_link_2}?lang=${$localeCode}`
                : `/contact?lang=${$localeCode}`}
              class="btn btn-md btn-outline rounded-full px-6 text-white capitalize lg:text-lg font-regular bg-white/20">
              {hero.button_text_2 ? hero.button_text_2 : "Get in touch"}
            </a>
          </div>
        </section>
        <section class="lg:w-1/2 mt-8 lg:mt-0">
          <p
            class="text-xl lg:text-tw-2 font- leading-none lg:leading-8 max-w-[18rem]">
            {hero.text
              ? hero.text
              : " Take advantage of our free smart building IoT dashboard for climate control, energy management, and automation, all in a single IoT platform."}
          </p>
        </section>
      </div>
    </div>
  </div>
</div>
