<script>
  import { goto } from "$app/navigation";
  import { localeCode } from "$lib/stores/globalStore";

  export let hero;
  const bg = hero?.bg?.data?.attributes;
</script>

<div class="bg-cover bg-center flex h-[75vh] lg:h-[82vh] relative">
  {#if bg?.ext === ".mp4"}
    <!-- svelte-ignore a11y-media-has-caption -->
    <video
      poster="/home/default.png"
      controls
      type="video/mp4"
      autoplay
      loop
      muted
      playsinline
      class="h-full w-full object-cover">
      <source src={`${bg.url}`} type="video/mp4" />
    </video>
  {:else}
    <img
      class="h-full w-full object-cover object-center"
      src={`${bg.url}` ? "/consulting/hero.png" : `${bg.url}`}
      alt="" />
  {/if}
  <div
    class="absolute top-0 left-0 bg-tw-secondary/60 flex flex-col w-full h-full">
    <!-- body -->
    <div
      class="flex-grow overflow-hidden grid place-items-center px-[5%] xl:px-0 w-full max-w-7xl mx-auto">
      <div class="w-full text-white text-center md:text-start pt-10">
        <h1
          class=" text-tw-1 xl:text-6xl leading-none xl:leading-[80px] font-medium drop-shadow-md capitalize">
          {hero.title}
        </h1>
        <h2 class="text-2xl xl:text-5xl font-extralight leading-none mt-3">
          {hero.description}
        </h2>
        <p
          class="text-sm xl:text-tw-2 font-extralight leading-tight md:max-w-sm xl:max-w-3xl mt-4">
          {hero.text}
        </p>

        {#if hero?.button_text_1 && hero?.button_link_1}
          <div class="text-center md:text-start">
            <button
              on:click={() => goto(`${hero.button_link_1}?lang=${$localeCode}`)}
              class="mt-8 btn btn-sm btn-outline rounded-full px-6 text-white capitalize text-base 
            hover:bg-tw-orange hover:text-tw-blue font-base bg-transparent">
              {hero.button_text_1}
            </button>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
