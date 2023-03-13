<script>
  import { enhance } from "$app/forms";
  import { localeCode } from "$lib/stores/globalStore";

  export let hero;

  $: bg = hero?.bg?.data?.attributes;
</script>

<div class="bg-cover bg-center flex h-[82vh] relative ">
  <!-- <p>{bg.url}</p> -->
  <!-- bg?.ext === ".mp4" -->
  {#if bg}
    {#if bg?.ext === ".mp4"}
      <video
        poster="/default-poster.png"
        src={hero?.bg?.data?.attributes.url ?? "/home/hero-vid.mp4"}
        type="video/mp4"
        autoplay
        loop
        muted
        playsinline
        class="h-full w-full object-cover" />
    {:else}
      <img
        class="h-full w-full object-cover object-center"
        src={bg?.url ?? "/home/hero.png"}
        alt="" />
    {/if}
  {/if}
  <div
    class="absolute top-0 left-0 {bg ? '' : 'bg-[#242424]'} 
      flex flex-col w-full h-full">
    <!-- body -->
    <div
      class="flex-grow overflow-hidden grid place-items-center px-[5%] xl:px-0 w-full max-w-7xl mx-auto relative">
      <div class="w-full text-white">
        <h1
          class="text-tw-1 lg:text-tw-60 leading-none font-medium drop-shadow-md md:max-w-lg lg:max-w-4xl">
          {hero.title ? hero.title : "Our Software"}
        </h1>
        <h2 class="text-tw-1 lg:text-tw-60 font-light leading-none mt-2">
          {hero.description
            ? hero.description
            : "Accelerate Your Transition To Net Zero"}
        </h2>
        <p
          class="xl:text-tw-2 font-light leading-tight md:max-w-sm xl:max-w-3xl mt-5">
          {hero.text
            ? hero.text
            : "As part of our mission to democratize carbon management, we offer easy-to-use solutions to define nature-based climate strategies traced in Blockchain that"}
        </p>

        <div class="flex gap-x-5 mt-6 md:mt-10">
          {#if hero?.button_text_1 && hero?.button_link_1}
            <a
              href={`${hero.button_link_1}?lang=${$localeCode}`}
              class="btn btn-sm btn-outline rounded-full px-6 hover:bg-white hover:text-tw-blue
            text-white capitalize text-base font-base bg-transparent">
              {hero.button_text_1}
            </a>
          {/if}
          {#if hero?.button_text_2 && hero?.button_link_2}
            <a
              href={`${hero.button_link_2}?lang=${$localeCode}`}
              class="btn btn-sm btn-outline rounded-full px-6 hover:bg-white hover:text-tw-blue
            text-white capitalize text-base font-base bg-transparent">
              {hero.button_text_2}
            </a>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
