<script>
  import { baseUrl, localeCode } from "$lib/stores/globalStore";

  export let hero;
  const bg = hero?.bg?.data?.attributes;
</script>

<div class="bg-cover bg-center flex h-[75vh] lg:h-[82vh] relative">
  {#if bg}
    {#if bg?.ext === ".mp4"}
      <!-- <video autoplay loop muted playsinline class="h-full w-full object-cover">
        <source
          src={`${bg.url}` ? `${bg.url}` : "/home/hero-vid.mp4"}
          type="video/mp4" />
      </video> -->
      <video
      poster="/default-poster.png"
      src={`${bg.url}` ?? "/home/hero-vid.mp4"}
      type="video/mp4"
      autoplay
      loop
      muted
      playsinline
      class="h-full w-full object-cover" />
    {:else}
      <img
        class="h-full w-full object-cover object-center"
        src={`${bg.url}` ? `${bg.url}` : "/home/hero.png"}
        alt="" />
    {/if}
  {/if}
  <div
    class="absolute top-0 left-0 {bg
      ? ''
      : 'bg-[#242424]'} flex flex-col w-full h-full">
    <!-- body -->
    <div
      class="flex-grow overflow-hidden grid place-items-center px-[5%] xl:px-0 w-full max-w-7xl mx-auto relative">
      <div class="w-full text-white">
        <h1
          class="text-tw-1 lg:text-tw-60 leading-none font-medium drop-shadow-md md:max-w-lg lg:max-w-4xl">
          {hero.title ? hero.title : "Book A Calsl - Contact Us"}
        </h1>
        <h2 class="text-tw-1 lg:text-tw-60 font-light leading-none mt-2">
          {hero.description
            ? hero.description
            : "Accelerate Your Transition To Net Zero"}
        </h2>
        <p
          class="text-sm xl:text-tw-2 font-light leading-tight md:max-w-sm xl:max-w-3xl mt-5">
          {hero.text
            ? hero.text
            : "As part of our mission to democratize carbon management.."}
        </p>

        <div class="flex gap-x-5 mt-6 md:mt-10">
          <a
            href={hero.button_link_1
              ? `${hero.button_link_1}?lang=${$localeCode}`
              : `/consulting?lang=${$localeCode}`}
            class="btn btn-sm btn-outline rounded-full px-6 text-white capitalize hover:bg-tw-orange hover:text-tw-blue 
            text-base font-base bg-transparent">
            {hero.button_text_1 ? hero.button_text_1 : "Consulting"}
          </a>
          <a
            href={hero.button_link_2
              ? `${hero.button_link_2}?lang=${$localeCode}`
              : `/software?lang=${$localeCode}`}
            class="btn btn-sm btn-outline rounded-full px-6 text-white capitalize hover:bg-tw-orange hover:text-tw-blue 
            text-base font-base bg-transparent">
            {hero.button_text_2 ? hero.button_text_2 : "Software"}
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
